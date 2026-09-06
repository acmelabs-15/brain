# STATE — Lifecycle Synthesis

This file is the single source of truth for where the project is. It is updated at every work-unit boundary and at every session end. A new session reads `METHOD.md` first, then this file. It is small on purpose: the Phase 1 unit table lives in `docs/plan/units.md` and is read only through `scripts/synthesis/units.ts`.

---

## Current position

| Field | Value |
|---|---|
| **phase** | `1` |
| **phase_name** | Inventory |
| **current_unit** | inv-rjm-133 |
| **last_session** | 005 |
| **next_action** | Dispatch Phase 1 run from inv-rjm-133 per budget.ts recommendation |
| **human_approval** | `PENDING` |
| **human_approval_date** | — |
| **landscape_scan** | `no` — set by Peter in D-007, 2026-09-02 |

> `human_approval` is written **only by Peter**, and only after reading `docs/plan/lifecycle-spec/`. Valid values: `PENDING`, `REVISIONS-REQUESTED` (see `REVIEW.md`), `APPROVED`. The agent never writes this field.

---

## Source pins

Recorded in Phase 0. Every session analyses exactly these commits.

| ID | Repository | SHA | Pinned in session |
|---|---|---|---|
| `addy` | github.com/addyosmani/agent-skills | d2c37ef6225dd8726cdd369a8030307f48592d26 | 000 (Peter, D-016) |
| `matt` | github.com/mattpocock/skills | 6654f6b60cd9d5be8b54c6fafe44346dabeb3b76 | 000 (Peter, D-016) |
| `rjm` | github.com/rjmurillo/ai-agents | 2abef31dc6812b62696297bd1065b58727a35786 | 000 (Peter, D-016) |

---

## Phase progress

| Phase | Name | Status | Done criteria met | Session(s) |
|---|---|---|---|---|
| 0 | Setup | `done` | four manifests and three ledgers exist; units.md initialized; brain-conventions.md written; all §10 checks clean | 000 |
| 0.5 | Landscape scan | `skipped` — D-007 `landscape_scan: no` | — | — |
| 1 | Inventory | `pending` | — | — |
| 1V | Inventory verification | `pending` | — | — |
| 2 | Concept cards | `pending` | — | — |
| 3 | Concordance | `pending` | — | — |
| 4 | Alignment decisions | `pending` | — | — |
| 4V | Decision review | `pending` | — | — |
| 5 | Lifecycle spec | `pending` | — | — |
| ⏸ | **Human gate** | `pending` | — | — |
| 6 | Implementation plan | `pending` | — | — |
| 7 | Build + review | `pending` | — | — |
| 8 | Integration verification | `pending` | — | — |

Status values: `pending` · `in-progress` · `done` · `blocked`

---

## Work units

Populated in Phase 0 (inventory units) and Phase 6 (build units). Status values: `pending` · `in-progress` · `done` · `blocked` · `rolled-back`.

### Phase 1 — Inventory units

The unit table is `docs/plan/units.md`, written only by `bun scripts/synthesis/units.ts` (`status`, `pending N`, `mark`, `sync`). Never read or edit it by hand; ask the script.

| Status | Units |
|---|---|
| pending | 160 |
| in-progress | 32 |
| done | 224 |
| blocked | 0 |
| rolled-back | 0 |
| **total** | **416** |

### Phase 2 — Concept card units

| Unit | Package / family | Status | Session | Output |
|---|---|---|---|---|
| — | — | — | — | — |

### Phase 3 — Concordance families

| Family | Status | Session | Output |
|---|---|---|---|
| phases | `pending` | — | `docs/analysis/concordance/phases.md` |
| artifacts | `pending` | — | `docs/analysis/concordance/artifacts.md` |
| sequencing | `pending` | — | `docs/analysis/concordance/sequencing.md` |
| techniques | `pending` | — | `docs/analysis/concordance/techniques.md` |
| gates | `pending` | — | `docs/analysis/concordance/gates.md` |
| roles | `pending` | — | `docs/analysis/concordance/roles.md` |
| references | `pending` | — | `docs/analysis/concordance/references.md` |
| invocation-patterns | `pending` | — | `docs/analysis/concordance/invocation-patterns.md` |

### Phase 7 — Build units

| Unit | Artifact | Spec §§ | Status | Review rounds | Session | Report |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

---

## Counts

Updated at every unit boundary (`units.ts sync` writes the inventory rows).

| Metric | Value |
|---|---|
| Manifest rows (addy / matt / rjm) | 219 / 201 / 1175 |
| Inventory units done (addy / matt / rjm) | 46 / 46 / 132 |
| Concept cards (addy / matt / rjm) | — / — / — |
| Concordance rows (by class: ALIGNED / SYNONYM / HOMONYM / PARTIAL / UNIQUE / CONFLICT) | — |
| Decisions (active / superseded / pending-peter) | 18 / 2 / 1 (D-008 — moot: D-007 skipped the scan) |
| Glossary terms | 0 |
| Build units (done / total) | — / — |

---

## Blocked

Anything the agent cannot resolve alone. Each row names what Peter needs to do.

| Since | Unit / item | Reason | Needs |
|---|---|---|---|
| — | — | — | — |

---

## Anti-drift check log

Last result of each check (METHOD.md §10). Filled at session start and phase gates.

| Check | Last run | Result |
|---|---|---|
| coverage.ts | 2026-09-04 | clean (1595 rows, 0 covered, 1567 uncovered, 0 failures) |
| units.ts check | 2026-09-04 | clean (416 total — pending 416 · in-progress 0 · done 0 · blocked 0 · rolled-back 0) |
| budget.ts | 2026-09-04 | clean (used=9.64%, peak=9.64%, governing=25.00%, headroom=14.26%) |
| glossary-lint.ts | 2026-09-04 | clean |
| last-unit verification | 2026-09-04 | none (Phase 0) |
| decision consistency (4V) | — | — |
| traceability | — | — |
