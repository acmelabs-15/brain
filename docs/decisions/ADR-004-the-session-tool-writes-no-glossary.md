# ADR-004: The session tool writes nothing into a repo's `CONTEXT.md`; the session-log words have one home, the plugin; the skill reads a repo's glossary and writes in its words

## Status

Accepted — supersedes the `CONTEXT.md` clause of PRD-001 requirement 8 ("`session init` scaffolds … the glossary section of `CONTEXT.md`") and the consequence in [ADR-001](ADR-001-rehydration-belongs-to-the-plan.md) that names "the session-log glossary `session init` writes". The rest of ADR-001 stands, and so does `project-docs-conventions`' rule that `domain-modeling` owns `CONTEXT.md`.

## Date

2026-08-31 (brain SES-003)

## Analysis it relies on

- `references/project-docs-conventions.md` § The shared files: "`CONTEXT.md` — the domain glossary, at the repo root. A glossary and *nothing else* … `domain-modeling` owns it".
- env-setup SES-008, `83d0881` (2026-08-31): a hand regeneration of the tool's section in env-setup's `CONTEXT.md` cut every section that followed it — Secrets, Relationships, Flagged ambiguities, Open — and the installed plugin's own log run had to restore them. Two owners of one file, and the second one blind to what the first put there.
- The plugin already had a home for the words: `skills/session/CONTEXT.md` pointed at the template code in `core.ts` rather than restating it — the definitions lived in a string the tool wrote into other people's files.

## Context

Since ADR-019 in env-setup the session tool has written a "The session log" glossary section into the `CONTEXT.md` of every repo it is initialised in, so that *session*, *entry*, *gate*, *plan part* and the acts were defined where the repo's other words are. That put the tool in a file the conventions give to `domain-modeling`, and made the plugin's own glossary file a pointer at a template. When the template changed (the three acts), every consuming repo's copy went stale, and refreshing one by hand went wrong. Peter: "I'm not sure that the session skill should have anything to do with updating any CONTEXT.md files … though it might make sense for it to read from CONTEXT.md / CONTEXT-MAP.md files."

## Decision

- **The tool writes no glossary.** `session init` scaffolds `docs/sessions/README.md` and nothing else (and nothing under `docs/plan/`, as before). The `context` template, `contextFile()` and `init`'s `CONTEXT.md` branch are removed; `init --refresh` rewrites the README's prose around its index block, and only that.
- **The session-log words have one home**: `skills/session/CONTEXT.md` in this plugin, the full glossary with its `_Avoid_` lines — no longer a pointer at code. The skill's `SKILL.md` names it as the place the words are defined.
- **The skill reads a repo's glossary and writes in its words.** Before an entry is written, the repo's `CONTEXT-MAP.md` (where there is one) and the `CONTEXT.md` it points at are read; entries, commits and replies use those words for the repo's own concepts, and the plugin's words for the record's. A term the repo lacks is a gap the `log` act routes to `domain-modeling`, as its step 3 already does — the skill never edits the file itself.
- **Repos that carry the section today keep it as their own.** env-setup's and this repo's `CONTEXT.md` sections are now those repos' glossaries' text, owned by `domain-modeling` there; this repo's is replaced by a pointer at `skills/session/CONTEXT.md`, since the two would otherwise be one text in two places.

## Alternatives considered

### Keep the section and the `--refresh` flag

The tool refreshes what it wrote. Rejected: the refresh path exists only because a hand edit went wrong, and the file still has two owners.

### A one-line pointer written into `CONTEXT.md`

Rejected: still a write into a file the tool does not own, and a pointer that goes stale when the plugin moves.

## Consequences

- PRD-001 requirement 8 and its promise line change; `references/project-docs-conventions.md`'s `docs/sessions/` paragraph no longer says `init` writes the glossary section.
- The tool loses `contextSection`, `CONTEXT_SECTION_HEADING`, `contextFile` and the `context` template; `session template` lists `session | sessions-readme`; the tests follow.
- `skills/session/CONTEXT.md` carries the definitions; `skills/session/CLAUDE.md` says so.
- The `CONTEXT.md` a consuming repo keeps is `domain-modeling`'s; the session skill's `start` and `log` acts read it and the map.
