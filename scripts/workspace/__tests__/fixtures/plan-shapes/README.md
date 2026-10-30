# Fixture: plan shapes

A layout-2 repo with four specs, each a plan of a different shape, and no ideas. The `brain plan` tests copy this tree into a temp git repo and run `brain plan` there. Each spec's `spec.md` has `sources: []`, because only its plan and task blocks matter here.

## What it holds

- `docs/agents/workspace.md`: a copy of setup-brain's template, so `layout: 2`, the default paths and `max_parallel: 8`.
- `docs/specs/SPEC-001-linear/`: a chain. Row 01 is resolved, row 02 is in progress, and each later row needs the one before it.
- `docs/specs/SPEC-002-wide/`: row 01 is resolved, and four tasks need only row 01. Their task blocks share two files.
- `docs/specs/SPEC-003-checkpoints/`: two phases, each closed by a checkpoint row. Row 04 needs nothing from phase one, so the two phases share a wave. Row 05 needs row 01 from phase one, so checkpoint 03 blocks it.
- `docs/specs/SPEC-004-cycle/`: rows 02, 03 and 04 block each other in a cycle.

The plans of SPEC-001 to SPEC-003 each hold a "Parallel waves" section: the lines that `brain plan` prints for that spec above its Cap line. SPEC-004's plan has none, because `brain plan` prints no waves for a cycle.

Every spec has an open row, so four efforts are not finished: without a spec to read, `brain plan` names all four.

## What `brain plan` must report

A wave is the frontier once the waves above it are done; a resolved or superseded row drops out. The critical path is the longest chain of rows still to do, checkpoints included; on a tie, the first row in table order. A phase is the tasks its checkpoint row is blocked by.

| Spec | Waves | Critical path | Files that tasks in one wave share | Phases that share a wave |
|---|---|---|---|---|
| SPEC-001 | 1: 02; 2: 03; 3: 04 (checkpoint) | 02, 03, 04 | none | none |
| SPEC-002 | 1: 02, 03, 04, 05; 2: 06 | 02, 06 | wave 1: `package.json` (04, 05), `src/import/index.ts` (02, 03, 05) | none |
| SPEC-003 | 1: 01, 04; 2: 02; 3: 03 (checkpoint); 4: 05; 5: 06 (checkpoint) | 01, 02, 03, 05, 06 | none | 03 and 06, in wave 1 |
| SPEC-004 | none: exit 1 | none | none | none |

SPEC-004: `brain plan` exits 1 and names the cycle: 02 is blocked by 04, 04 by 03, 03 by 02.

## What `brain check` must report

One finding, and exit 1: SPEC-004's cycle, in the same words as `brain plan`: `docs/specs/SPEC-004-cycle/tasks/plan.md: cycle: 02 is blocked by 04, 04 by 03, 03 by 02`.

No checkpoint finding. Each checkpoint blocks every later task that depends on a task in its phase, and no other task. In SPEC-003, checkpoint 03 blocks row 05, which depends on row 01; checkpoint 06 blocks no row.

No Parallel waves finding: each section of SPEC-001 to SPEC-003 is what `brain plan` prints now. A test that changes an edge, a row's status or a block's files leaves that spec's section stale, and `brain check` reports it.
