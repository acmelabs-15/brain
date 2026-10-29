---
"@acmelabs/brain": minor
---

setup-brain's migrate mode finishes the move from brain 0.8 in one commit. Each ADR that brain 0.8 wrote, `docs/decisions/0001-<slug>.md`, becomes a decision record with `kind: architecture`. setup-brain asks once per repo whether to move an ADR folder of another tool, such as adr-tools' `doc/adr/`, into `docs/decisions/` the same way; a kept folder stays as read-only history, and `docs/agents/domain.md` points to it. The glossary move to `GLOSSARY.md` goes into the same commit, and so does `docs/agents/workspace.md`, whose `layout: 2` marks the repo as migrated: a later run moves nothing and asks nothing again. Until then, setup-brain writes no `workspace.md` on a repo on the 0.8 layout, and `--check` exits 1. After the migration, setup-brain runs `brain check` on the repo.
