# Decisions — Architecture Decision Records

The current truth of every decision that shapes this system, one ADR per decision, with the alternatives rejected and why. Decisions here are settled: a change is a new ADR that supersedes, never an edit.

## Index

| Doc | Decision | Status |
| --- | --- | --- |
| [ADR-001-rehydration-belongs-to-the-plan.md](ADR-001-rehydration-belongs-to-the-plan.md) | Rehydration is `/plan`'s; the session skill keeps the record with three acts (start · log · close), one status (`in progress \| done`), argument inference and three scoped commands; no join/open/leave; `Open at end` retired; home clause superseded by ADR-002; built in acmelabs-15/sessions first | accepted |
| [ADR-002-brain-is-the-plugin-for-the-whole-toolset.md](ADR-002-brain-is-the-plugin-for-the-whole-toolset.md) | `brain` is one plugin carrying the session skill, `ask-user-question`, every skill in `~/.claude/skills`, every command and agent, their references, evidence and this docs system; `sessions` and `ask-user-question` plugins retired; git history replaces `LOCAL-CHANGES.md`; order clause and bare-name point superseded by ADR-003 | accepted |
| [ADR-003-the-session-skill-moves-now-with-its-history.md](ADR-003-the-session-skill-moves-now-with-its-history.md) | The session skill moves into `brain` now by merging acmelabs-15/sessions' history; its docs archived with their numbers; an archived log still vouches for its commits; every typed form is `/brain:…`, the plugin's `commands/` the typed surface; `brain` 0.3.0 installed, `sessions` retired; the rest copied in at Part 2 and retired at Part 6 | accepted |
| [ADR-004-the-session-tool-writes-no-glossary.md](ADR-004-the-session-tool-writes-no-glossary.md) | The session tool writes nothing into a repo's `CONTEXT.md` (supersedes PRD-001 requirement 8's clause and ADR-001's consequence); the session-log words have one home, `skills/session/CONTEXT.md`; the skill reads a repo's `CONTEXT-MAP.md` and `CONTEXT.md` and writes entries in its words; `domain-modeling` owns the file | accepted |
| [ADR-005-consult-skills-integration.md](ADR-005-consult-skills-integration.md) | The consult skills stay separate; the ADR rule synthesized (trade-off AND surprise; reversal cost = urgency); the read rule injected from one file by `!`-cat (measured; `@` in skill bodies attaches nothing); *boundary* scoped by the map; one interrogation skill under the one-at-a-time and ask-user-question decrees, implementation after PLAN-003 | accepted |
| [ADR-006-the-composed-lifecycle-set.md](ADR-006-the-composed-lifecycle-set.md) | Define/Plan/Build rebuilt from both lineages' best parts: *part* stays; idea-refine standalone with two wayfinder transfers; rendering by the resolution order; the merit-test names (interview-me and planning-and-task-breakdown keep theirs, the spec writer renamed, `implement` and `diagnosing-bugs` the merge homes); the DoD tiers as /brain:build's gates with plan-close converge; concurrency a /build mode behind verify-first; discovery aligned; PRD-002 the contract | accepted |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **Supersede, never edit**; cite the session entry (sha) that made the change.
- **Produced with** the `documentation-and-adrs` skill; its template is the template.
