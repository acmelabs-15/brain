# Fixture: an idea mid-define

A layout-2 repo whose only effort is an idea in the define stage, part way through its map. The check, status and hook tests copy this tree into a temp git repo and run `brain` there.

## What it holds

- `docs/agents/workspace.md`: a copy of setup-brain's template, so `layout: 2` and the default paths.
- `docs/ideas/IDEA-001-sync-notes.md`: the map, with rows of every type (`interview`, `prototype`, `ideate`, `research`, `task`) and every status (`open`, `in-progress`, `resolved`, `superseded by NN`), blocking edges, and fog in "Not yet specified".
- `docs/decisions/DEC-001-*.md` (kind `decision`) and `DEC-002-*.md` (kind `architecture`, from the `ideate` row): the results of rows 01 and 04.
- `docs/research/RES-001-*.md`: the resolved result of row 02. One finding carries an `etag` validator.
- `docs/research/RES-002-*.md`: `status: in-progress`, `kind: task`, from row 05. Row 05 is not resolved, so its Result cell is `—`.
- `docs/STATUS.md`: the handoff note, written at the end of row 04.

## The map

| Row | Type | Status | Blocked by | On the frontier |
|---|---|---|---|---|
| 01 | interview | resolved | — | no: resolved |
| 02 | research | resolved | — | no: resolved |
| 03 | interview | superseded by 06 | 01 | no: superseded |
| 04 | ideate | resolved | 01, 02 | no: resolved |
| 05 | task | in-progress | 04 | no: in progress, not open |
| 06 | prototype | open | 04 | yes |
| 07 | research | open | 02, 04 | yes: two blockers, both resolved |
| 08 | interview | open | — | yes: no blockers |
| 09 | interview | open | 05, 06 | no: 05 is in progress and 06 is open |
| 10 | task | open | 05 | no: 05 is in progress |

## What brain must report

- `brain check`: clean. It exits 0 with no finding.
- Active effort: IDEA-001, the only idea, with `status: define`. Stage: define.
- Frontier of IDEA-001: rows 06, 07 and 08, and no other row.
- Decisions waiting on the user: rows 06 (prototype) and 08 (interview), the decide rows on the frontier.
- Research to start: row 07, the research row on the frontier.
- In progress: row 05.
- Last completed step: row 04, resolved to DEC-002 on 2026-10-24. It is the highest-numbered resolved row and the latest decision.
- Next step: row 06, the first row of the frontier. `docs/STATUS.md` names the same row, and the same waiting rows, 06 and 08.
- Red: none.
- Specs IDEA-001 produced: none. The repo has no spec.
