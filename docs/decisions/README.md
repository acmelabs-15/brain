# Decisions — Architecture Decision Records

The current truth of every decision that shapes this system, one ADR per decision, with the alternatives rejected and why. Decisions here are settled: a change is a new ADR that supersedes, never an edit.

## Index

| Doc | Decision | Status |
| --- | --- | --- |
| [ADR-001-rehydration-belongs-to-the-plan.md](ADR-001-rehydration-belongs-to-the-plan.md) | Rehydration is `/plan`'s; the session skill keeps the record with three acts (start · log · close), one status (`in progress \| done`), argument inference and three scoped commands; no join/open/leave; `Open at end` retired; home clause superseded by ADR-002; built in acmelabs-15/sessions first | accepted |
| [ADR-002-brain-is-the-plugin-for-the-whole-toolset.md](ADR-002-brain-is-the-plugin-for-the-whole-toolset.md) | `brain` is one plugin carrying the session skill, `ask-user-question`, every skill in `~/.claude/skills`, every command and agent, their references, evidence and this docs system; `sessions` and `ask-user-question` plugins retired; git history replaces `LOCAL-CHANGES.md` | accepted |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **Supersede, never edit**; cite the session entry (sha) that made the change.
- **Produced with** the `documentation-and-adrs` skill; its template is the template.
