---
"@acmelabs/brain": minor
---

The default spec folder is now `specs/SPEC-NNN-<slug>/` at the repo's root, not `docs/specs/SPEC-NNN-<slug>/`. A new install and a migration from layout 1 get `specs/`. A repo that already has `docs/agents/workspace.md` keeps the spec folder that file names: a re-run of setup-brain changes no path, so a workspace from 0.10.0 or 0.11.0 keeps `docs/specs/`, and nothing moves.
