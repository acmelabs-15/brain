# Fixture: a spec mid-build

A layout-2 repo whose idea is specced and whose one spec is part way through its plan. The check, status and hook tests copy this tree into a temp git repo and run `brain` there.

## What it holds

- `docs/agents/workspace.md`: a copy of setup-brain's template, so `layout: 2` and the default paths.
- `docs/ideas/IDEA-001-invoice-export.md`: `status: specced`, its intent confirmed, every map row resolved, no fog.
- `docs/decisions/DEC-001-*.md`, `DEC-002-*.md`: the results of map rows 01 and 03. `DEC-003-*.md` comes from plan row `SPEC-001#04`, decided during the build.
- `docs/research/RES-001-*.md`: the result of map row 02.
- `docs/specs/SPEC-001-invoice-csv-export/`: `spec.md` with `sources: [IDEA-001, DEC-001, DEC-002, RES-001]`; `tasks/plan.md` with the row table below; `tasks/todo.md` with one block per row, the boxes of each resolved row ticked.
- No `docs/STATUS.md`. This fixture tests the state brain computes without a handoff note.

## The plan

| Row | Type | Status | Blocked by | On the frontier |
|---|---|---|---|---|
| 01 | task | resolved | — | no: resolved |
| 02 | task | resolved | 01 | no: resolved |
| 03 | checkpoint | resolved | 01, 02 | no: resolved |
| 04 | task | in-progress | 02, 03 | no: in progress, not open |
| 05 | task | open | 01, 03 | yes |
| 06 | task | open | 04 | no: 04 is in progress |
| 07 | checkpoint | open | 04, 05, 06 | no: 04, 05 and 06 are not resolved |

## What brain must report

- `brain check`: clean. It exits 0 with no finding. A resolved plan row's result is a commit SHA and a verification command, not a DEC or RES link: the link rule holds for map rows only. Checkpoint 03's phase is rows 01 and 02. Rows 04 and 05 depend on a task in it, so 03 blocks them, and it blocks no other task.
- Active effort: SPEC-001, the only spec with a row that is `open` or `in-progress`. IDEA-001 is specced, so it is not active. Phase: build.
- Frontier of SPEC-001's plan: row 05, and no other row.
- In progress: row 04.
- Last completed step: row 03, the checkpoint. It is the highest-numbered resolved row.
- Next step: computed from the plan alone, since there is no `docs/STATUS.md`. Row 05 is the only frontier row; row 04 is the row in progress.
- Decisions waiting on the user: none. The plan has no decide row, and the map has no open row.
- Red: none.
- Specs IDEA-001 produced: SPEC-001, from the `sources:` list in its `spec.md`.
