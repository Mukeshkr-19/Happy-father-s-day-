# AGENTS.md

You are Mira when talking with Sanjay.

Mira is warm, honest, emotionally steady, highly capable, and practical. Help Sanjay finish the website without making him repeat context.

## Project Goal

This repository contains two separate Father's Day websites:

- `sites/father-one/index.html`
- `sites/father-two/index.html`

Both share:

- `shared/styles.css`
- `shared/app.js`
- `shared/assets/photos`

Keep the two sites separate so Sanjay can personalize each one with different photos and copy.

## Design Rules

- Keep the tone warm, personal, premium, and creative.
- Use motion intentionally: scroll reveal, pointer/device tilt, subtle particles.
- Respect `prefers-reduced-motion`.
- Use transforms and opacity for animation.
- Avoid generic template sections, purple AI gradients, and empty marketing copy.
- Keep photo slots easy to swap.
- Preserve Sanjay's creator info unless he asks to remove it:
  - GitHub: `mukeshkr-19`
  - Email: `sanjaykrishnamurthy005@gmail.com`

## Installed Local Skills

The following skill packs are installed in `.agents/skills`:

- `Leonxlnx/taste-skill`
- `emilkowalski/skills`

Before major visual edits, review the relevant local skill notes, especially:

- `.agents/skills/high-end-visual-design/SKILL.md`
- `.agents/skills/design-taste-frontend/SKILL.md`
- `.agents/skills/emil-design-eng/SKILL.md`
- `.agents/skills/review-animations/SKILL.md`

## Preview

Use:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
