# Analysis — research and investigations

What we *found out*, against primary sources or empirically, as opposed to what we decided (`../decisions/`) or require (`../plan/PRD-001-…`). Unverified beliefs are labelled unverified.

## Index

| Doc | Question it answers | Status |
| --- | --- | --- |
| [ANA-001-rehydration-ownership.md](ANA-001-rehydration-ownership.md) | Who should own rehydration; every installed skill and both authors' lifecycles read in full; four homes found; the design that gives the plan the procedure and the session the record | decided |
| [ANA-002-measured-facts-and-eval-lessons.md](ANA-002-measured-facts-and-eval-lessons.md) | The measured facts the ADRs rest on: how Claude Code resolves plugin and personal skills, the SKILL.md frontmatter fields (no dependency field), why `ask-user-question` was not fired, the session skill's four disclosure iterations and their failure clusters, the trigger figures, the inventory of what ADR-002 moves | current |
| [ANA-003-plan-001-sequencing.md](ANA-003-plan-001-sequencing.md) | Whether PLAN-001's parts and tasks are in the order their dependencies demand: the reinstall's two owners, the reinstall part's unmeetable checkpoint, the rehydration gap after the reinstall, rehydrate-before-move against move-before-rehydrate, the docs sweep and the shapes after the move, the missing env-setup task | decided |
| [ANA-004-session-tool-surface-against-the-acts.md](ANA-004-session-tool-surface-against-the-acts.md) | Whether the tool's nine subcommands match the skill's three acts, against the best-practices page, the overview, the engineering post and plugin-kit's measured references: the Template pattern covers model-written output and the entry template already follows it; scaffolding belongs to scripts; `--refresh` exists because shapes-in-code need a refresh path; the act↔subcommand map with `current` and bare `list` as the thin claims; `validate` collides with the glossary | current — decisions pending (Part 5 Task 4) |
| [ANA-005-consult-skills-inventory.md](ANA-005-consult-skills-inventory.md) | What `domain-modeling` and `codebase-design` define, produce and depend on; their drift from the Matt Pocock upstream (small, enumerable, and exactly where the integration already half-exists as local edges); the measured citation graph — domain-modeling a 30-edge hub with three edge kinds, codebase-design a vocabulary spine (PLAN-002 Part 1) | current |

## Rules

- **One per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **Every claim cites a primary source**; `Refuted` and `Unverifiable` sections stay so a wrong belief is not re-researched.
- **Produced with** the `research` skill; its template is the template.
