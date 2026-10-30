---
"@acmelabs/brain": minor
---

**Breaking:** `/spec`, `/plan` and `/build` now read and write a spec folder, `docs/specs/SPEC-NNN-<slug>/`, with `spec.md`, `tasks/plan.md` and `tasks/todo.md` in it. They no longer use `SPEC.md`, `spec/` or `tasks/` at the repo root. A repo on layout 1 (brain 0.9 and earlier) must move its files first: run setup-brain to migrate. Until then, `brain status` says so.
