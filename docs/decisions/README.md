# Decisions — Architecture Decision Records

The current truth of every decision that shapes this system, one ADR per decision, with the alternatives rejected and why. Decisions here are settled: a change is a new ADR that supersedes, never an edit.

## Index

| Doc | Decision | Status |
| --- | --- | --- |
| [ADR-001-rehydration-belongs-to-the-plan.md](ADR-001-rehydration-belongs-to-the-plan.md) | Rehydration is `/plan`'s; the session skill keeps the record with three acts (start · log · close), one status (`in progress \| done`), argument inference and three scoped commands; no join/open/leave; `Open at end` retired; home clause superseded by ADR-002; built in acmelabs-15/sessions first | accepted |
| [ADR-002-brain-is-the-plugin-for-the-whole-toolset.md](ADR-002-brain-is-the-plugin-for-the-whole-toolset.md) | `brain` is one plugin carrying the session skill, `ask-user-question`, every skill in `~/.claude/skills`, every command and agent, their references, evidence and this docs system; `sessions` and `ask-user-question` plugins retired; git history replaces `LOCAL-CHANGES.md`; order clause and bare-name point superseded by ADR-003 | accepted |
| [ADR-003-the-session-skill-moves-now-with-its-history.md](ADR-003-the-session-skill-moves-now-with-its-history.md) | The session skill moves into `brain` now by merging acmelabs-15/sessions' history; its docs archived with their numbers; an archived log still vouches for its commits; every typed form is `/brain:…`, the plugin's `commands/` the typed surface; `brain` 0.3.0 installed, `sessions` retired; the rest copied in at Part 2 and retired at Part 6 | accepted |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **Supersede, never edit**; cite the session entry (sha) that made the change.
- **Produced with** the `documentation-and-adrs` skill; its template is the template.
