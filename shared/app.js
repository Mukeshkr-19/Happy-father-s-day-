const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setPointer(x, y) {
  root.style.setProperty("--pointer-x", `${x}px`);
  root.style.setProperty("--pointer-y", `${y}px`);
  const width = window.innerWidth || 1;
  const height = window.innerHeight || 1;
  const tiltX = clamp(((x / width) - 0.5) * 12, -7, 7);
  const tiltY = clamp(((y / height) - 0.5) * -10, -6, 6);
  root.style.setProperty("--tilt-x", `${tiltX}deg`);
  root.style.setProperty("--tilt-y", `${tiltY}deg`);
}

window.addEventListener("pointermove", (event) => {
  if (!reduceMotion) setPointer(event.clientX, event.clientY);
}, { passive: true });

document.querySelectorAll("[data-motion-permission]").forEach((button) => {
  button.addEventListener("click", async () => {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const result = await DeviceOrientationEvent.requestPermission();
      button.textContent = result === "granted" ? "Motion enabled" : "Use pointer motion";
    } else {
      button.textContent = "Move your phone or cursor";
    }
  });
});

window.addEventListener("deviceorientation", (event) => {
  if (reduceMotion) return;
  const gamma = clamp(event.gamma || 0, -28, 28);
  const beta = clamp(event.beta || 0, -28, 28);
  root.style.setProperty("--tilt-x", `${gamma * 0.22}deg`);
  root.style.setProperty("--tilt-y", `${beta * -0.16}deg`);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

document.querySelectorAll(".photo-slot[data-photo]").forEach((slot) => {
  const url = slot.dataset.photo;
  const image = new Image();
  image.onload = () => {
    slot.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.16)), url("${url}")`;
    slot.classList.add("has-photo");
  };
  image.src = url;
});

function startMemoryField() {
  const canvas = document.getElementById("memory-field");
  if (!canvas || reduceMotion) return;
  const context = canvas.getContext("2d");
  const dots = Array.from({ length: 72 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 2 + 0.7,
    s: Math.random() * 0.28 + 0.08,
    a: Math.random() * 0.55 + 0.12
  }));

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    dots.forEach((dot) => {
      dot.y -= dot.s / window.innerHeight;
      if (dot.y < -0.02) {
        dot.y = 1.02;
        dot.x = Math.random();
      }
      context.beginPath();
      context.arc(dot.x * window.innerWidth, dot.y * window.innerHeight, dot.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(247, 200, 115, ${dot.a})`;
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}

startMemoryField();
