---
"@acmelabs/brain": patch
---

setup-brain's first install, the run that creates `docs/agents/workspace.md`, now keeps `docs/specs/` as the specs folder when that folder already holds a spec (`SPEC-NNN-<slug>/`), as `brain new-doc SPEC` wrote it on 0.10.0 and 0.11.0 in a repo with no `workspace.md`. Nothing moves. When the root `specs/` holds other files, such as API specs or test specs, setup-brain asks where brain's specs go instead of mixing them in: `docs/specs/` (recommended), a folder you name, or `specs/` anyway. The setup writer takes the answer as `--specs-folder <folder>`.
