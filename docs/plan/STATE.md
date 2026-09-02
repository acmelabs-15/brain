# STATE — Lifecycle Synthesis

This file is the single source of truth for where the project is. It is updated at every work-unit boundary and at every session end. A new session reads `METHOD.md` first, then this file.

---

## Current position

| Field | Value |
|---|---|
| **phase** | `0` |
| **phase_name** | Setup |
| **current_unit** | — |
| **last_session** | — |
| **next_action** | Run Phase 0 per METHOD.md §5 |
| **human_approval** | `PENDING` |
| **human_approval_date** | — |
| **landscape_scan** | `no` — set by Peter in D-007, 2026-09-02 |

> `human_approval` is written **only by Peter**, and only after reading `docs/plan/lifecycle-spec/`. Valid values: `PENDING`, `REVISIONS-REQUESTED` (see `REVIEW.md`), `APPROVED`. The agent never writes this field.

---

## Source pins

Recorded in Phase 0. Every session analyses exactly these commits.

| ID | Repository | SHA | Pinned in session |
|---|---|---|---|
| `addy` | github.com/addyosmani/agent-skills | — | — |
| `matt` | github.com/mattpocock/skills | — | — |
| `rjm` | github.com/rjmurillo/ai-agents | — | — |

---

## Phase progress

| Phase | Name | Status | Done criteria met | Session(s) |
|---|---|---|---|---|
| 0 | Setup | `pending` | — | — |
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

Populated in Phase 0 (inventory units) and Phase 6 (build units). One row per unit. Status values: `pending` · `in-progress` · `done` · `blocked` · `rolled-back`.

### Phase 1 — Inventory units

| Unit | Package | Files | Bytes | Status | Session | Output |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

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

Updated at every unit boundary.

| Metric | Value |
|---|---|
| Manifest rows (addy / matt / rjm) | — / — / — |
| Rows inventoried (addy / matt / rjm) | — / — / — |
| Concept cards (addy / matt / rjm) | — / — / — |
| Concordance rows (by class: ALIGNED / SYNONYM / HOMONYM / PARTIAL / UNIQUE / CONFLICT) | — |
| Decisions (active / superseded / pending-peter) | 8 / 0 / 0 |
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
| coverage.ts | — | — |
| glossary-lint.ts | — | — |
| last-unit verification | — | — |
| decision consistency (4V) | — | — |
| traceability | — | — |
