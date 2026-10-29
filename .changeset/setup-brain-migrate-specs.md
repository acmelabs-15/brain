---
"@acmelabs/brain": minor
---

setup-brain's migrate mode moves a brain 0.8 repo's specs into the workspace. Each spec in `SPEC.md` or `spec/` moves with `git mv` to `docs/specs/SPEC-NNN-<slug>/spec.md`, and `tasks/plan.md` and `tasks/todo.md` move into the `tasks/` folder of the spec they belong to. The capability map becomes a decision record. Each moved file gains frontmatter only, so its history follows it. When a plan sits beside several specs, setup-brain asks which spec it belongs to.
