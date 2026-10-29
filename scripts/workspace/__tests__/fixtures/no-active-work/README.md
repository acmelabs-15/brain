# Fixture: no active work

A layout-2 repo where every effort is finished or parked. The check, status and hook tests copy this tree into a temp git repo and run `brain` there.

## What it holds

- `docs/agents/workspace.md`: a copy of setup-brain's template, so `layout: 2` and the default paths.
- `docs/ideas/IDEA-001-dark-mode.md`: `status: specced`. Map row 01 is `superseded by 03` and still names its result, DEC-001; rows 02 and 03 are resolved.
- `docs/ideas/IDEA-002-offline-mode.md`: `status: parked`. Its map has one open row, 01, with no blockers.
- `docs/decisions/DEC-001-*.md`: `status: superseded by DEC-002`. `DEC-002-*.md`: accepted.
- `docs/research/RES-001-*.md`: resolved. One finding carries a `last-modified` validator.
- `docs/specs/SPEC-001-theme-tokens/`: `sources: [IDEA-001, DEC-002, RES-001]`; plan rows 01 to 03 all resolved.
- `docs/specs/SPEC-002-theme-switch/`: `sources: [IDEA-001, DEC-002]`; plan rows 01, 03 and 04 resolved, row 02 `superseded by 03`.
- `docs/STATUS.md`: the seed text, "No active work. Start with interview-me."

## What brain must report

- `brain check`: clean. It exits 0 with no finding.
- Active effort: none. IDEA-001 is specced and IDEA-002 is parked; no plan row in SPEC-001 or SPEC-002 is `open` or `in-progress`. A superseded row does not keep a spec active.
- Phase: none.
- Frontier: empty for both specs. IDEA-002's map has row 01 on its frontier, but a parked idea is not active work, so row 01 is not reported.
- Last completed step: none in an active effort. The last resolved rows are SPEC-001#03 and SPEC-002#04, both checkpoints.
- Next step: none from the workspace. `docs/STATUS.md` says "Start with interview-me."
- Decisions waiting on the user: none.
- Red: none.
- Specs each idea produced: IDEA-001 produced SPEC-001 and SPEC-002; IDEA-002 produced none.
