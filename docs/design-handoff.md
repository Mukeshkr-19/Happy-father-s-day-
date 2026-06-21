# Design Handoff

This project is intentionally static HTML/CSS/JS so it is easy to edit in Cursor and easy to deploy on GitHub Pages, Netlify, Vercel, or a simple file host.

## Direction

The visual direction is a warm cinematic Father's Day tribute:

- Apple-style spaciousness and polish.
- Awwwards-inspired movement, depth, and asymmetrical layout.
- Open Design inspired handoff structure: clear files, reusable shared system, two outputs.
- Design Extract inspired token thinking: shared color, spacing, motion, and component variables live in `shared/styles.css`.
- Emil Kowalski inspired motion discipline: transform and opacity first, short UI feedback, reduced-motion support, pointer and device-orientation motion for special moments.

## File Map

- `index.html`: launcher for both websites.
- `sites/father-one/index.html`: first complete website.
- `sites/father-two/index.html`: second website with separate copy and image names.
- `shared/styles.css`: full design system and responsive layout.
- `shared/app.js`: scroll reveal, photo loading, particle canvas, pointer tilt, phone motion sensors.
- `shared/assets/photos`: put the final family photos here.
- `.agents/skills`: installed design skills for future agents.

## Cursor Editing Prompts

Use these prompts when asking Cursor for edits:

```text
Use the local .agents/skills design instructions. Keep the site premium, warm, cinematic, and personal. Preserve reduced-motion support and do not remove the two separate site folders.
```

```text
Update only sites/father-one/index.html copy for my dad. Keep shared/styles.css and shared/app.js reusable for both websites.
```

```text
Make the second website feel more playful but keep the same structure. Only edit sites/father-two/index.html and small alternate-theme variables in shared/styles.css.
```

## Photo Notes

Use clear, bright, meaningful photos. Portraits work best for the hero image. Landscape or group photos work well for memory and gallery slots.
