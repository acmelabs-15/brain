---
unit: inv-matt-3
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-3

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/CHANGELOG.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/CLAUDE.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/CONTEXT.md`

## Outputs produced
- `docs/analysis/inventory/matt/changelog-md.md` (6452 bytes)
- `docs/analysis/inventory/matt/claude-md.md` (4079 bytes)
- `docs/analysis/inventory/matt/context-md.md` (3515 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-3 covers three top-level core documentation and configuration files in the `matt` repository: `CHANGELOG.md`, `CLAUDE.md`, and `CONTEXT.md`.
- Key architectural findings:
  - `CLAUDE.md` establishes repository-wide bucket hierarchy (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`), plugin promotion rules into `.claude-plugin/plugin.json`, documentation page structure at `docs/<bucket>/<skill-name>.md` (`aihero.dev/skills-<name>`), the `ask-matt` router update requirement, and prose formatting constraints (strict ban on em-dashes).
  - Per the duplication ledger (`docs/analysis/manifest/matt-duplicates.md`), `CLAUDE.md` has an EXACT alias in `AGENTS.md` (which is a symlink to `CLAUDE.md`). This alias is satisfied directly by `claude-md.md` via `aliases: [AGENTS.md]`, fulfilling METHOD.md §2.4 (a) and R11 (a).
  - `CONTEXT.md` serves as the authoritative ubiquitous domain language definition for the repository. It standardizes terminology around issue tracking (`Issue tracker`, `Issue`, `Decision ticket`, `Triage role`) and explicitly deprecates synonyms such as "backlog", "backlog backend", and "backlog manager".
  - `CHANGELOG.md` documents major evolutionary steps across the package versions (1.0.0 through 1.2.3), including skill renames (e.g. `to-prd` → `to-spec`, `writing-great-skills` → `writing-for-agents`), retirements of early skills (`caveman`, `zoom-out`, `ubiquitous-language`, `design-an-interface`, `qa`, `request-refactor-plan`), the architectural shift of `prototype` to single-file static HTML artifacts, and the introduction of parallel AFK research subagents.
- Defects discovered:
  - `CONTEXT.md:19` references `docs/agents/triage-labels.md`, which does not exist in `sources/matt/` (it is a template emitted by `setup-matt-pocock-skills` into consumer repositories).
  - `CHANGELOG.md:11` cites `scripts/hitl-loop.template.sh` relative to the `diagnosing-bugs` skill rather than the repo root (actual path is `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`).
  - `CLAUDE.md:25` mandates "No em-dashes anywhere in this repo's prose (SKILL.md files, docs, README.md, CHANGELOG.md, ADRs, changesets, code comments)", but `CHANGELOG.md` lines 191-264 contain numerous em-dashes.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,500 tokens (49,879 bytes across 3 files); approximate tokens of output written: ~3,500 tokens (14,046 bytes across 3 inventory cards).
