---
"@acmelabs/brain": minor
---

setup-brain's migrate mode moves the specs of a repo on layout 1 (brain 0.9 and earlier) into the workspace. Each spec in `SPEC.md` or `spec/` moves with `git mv` to `docs/specs/SPEC-NNN-<slug>/spec.md`, and `tasks/plan.md` and `tasks/todo.md` move into the `tasks/` folder of the spec they belong to. The capability map becomes a decision record. Each moved file gains frontmatter only, so its history follows it. When a plan sits beside several specs, setup-brain asks which spec it belongs to.
