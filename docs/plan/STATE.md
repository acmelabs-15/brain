# STATE — Lifecycle Synthesis

This file is the single source of truth for where the project is. It is updated at every work-unit boundary and at every session end. A new session reads `METHOD.md` first, then this file.

---

## Current position

| Field | Value |
|---|---|
| **phase** | `1` |
| **phase_name** | Inventory |
| **current_unit** | `inv-addy-15`..`38` (run 02) |
| **last_session** | `014` |
| **next_action** | Teamwork run 02 dispatch (units `inv-addy-15`, `16`, `17`, `22`, `25`, `36`, `37`, `38`) |
| **human_approval** | `PENDING` |
| **human_approval_date** | — |
| **landscape_scan** | `no` — set by Peter in D-007, 2026-09-02 |

> `human_approval` is written **only by Peter**, and only after reading `docs/plan/lifecycle-spec/`. Valid values: `PENDING`, `REVISIONS-REQUESTED` (see `REVIEW.md`), `APPROVED`. The agent never writes this field.

---

## Source pins

Recorded in Phase 0. Every session analyses exactly these commits.

| ID | Repository | SHA | Pinned in session |
|---|---|---|---|
| `addy` | github.com/addyosmani/agent-skills | d2c37ef6225dd8726cdd369a8030307f48592d26 | 001 |
| `matt` | github.com/mattpocock/skills | 6654f6b60cd9d5be8b54c6fafe44346dabeb3b76 | 001 |
| `rjm` | github.com/rjmurillo/ai-agents | 2abef31dc6812b62696297bd1065b58727a35786 | 001 |

---

## Phase progress

| Phase | Name | Status | Done criteria met | Session(s) |
|---|---|---|---|---|
| 0 | Setup | `done` | all criteria met | 000 |
| 0.5 | Landscape scan | `skipped` — D-007 `landscape_scan: no` | — | — |
| 1 | Inventory | `in-progress` | — | — |
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

Re-partitioned on 2026-09-04 by `partition.ts` (D-013); unit ids before this date are retired and appear only in historical handoffs. `done` rows hold pre-D-013 cards that have not passed `quote-check.ts`; the experiment protocol decides whether they are re-dispatched.

| Unit | Package | Files | Bytes | Status | Session | Output |
|---|---|---|---|---|---|---|
| inv-addy-1 | addy | 29 | 49837 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-1.md |
| inv-addy-2 | addy | 14 | 46098 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-2.md |
| inv-addy-3 | addy | 6 | 34655 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-3.md |
| inv-addy-4 | addy | 6 | 47822 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-4.md |
| inv-addy-5 | addy | 22 | 48858 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-5.md |
| inv-addy-6 | addy | 55 | 42180 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-6.md |
| inv-addy-7 | addy | 1 | 26413 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-7.md |
| inv-addy-8 | addy | 1 | 23834 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-8.md |
| inv-addy-9 | addy | 1 | 26179 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-9.md |
| inv-addy-10 | addy | 1 | 26687 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-10.md |
| inv-addy-11 | addy | 2 | 26320 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-11.md |
| inv-addy-12 | addy | 1 | 26352 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-12.md |
| inv-addy-13 | addy | 2 | 49957 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-13.md |
| inv-addy-14 | addy | 1 | 26223 | done | 013 | docs/analysis/inventory/addy/_units/inv-addy-14.md |
| inv-addy-15 | addy | 1 | 26502 | in-progress | 014 | — |
| inv-addy-16 | addy | 1 | 26596 | in-progress | 014 | — |
| inv-addy-17 | addy | 1 | 26317 | in-progress | 014 | — |
| inv-addy-18 | addy | 1 | 24943 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-18.md |
| inv-addy-19 | addy | 1 | 26461 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-19.md |
| inv-addy-20 | addy | 1 | 24935 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-20.md |
| inv-addy-21 | addy | 1 | 26344 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-21.md |
| inv-addy-22 | addy | 2 | 48913 | in-progress | 014 | — |
| inv-addy-23 | addy | 1 | 26475 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-23.md |
| inv-addy-24 | addy | 1 | 26336 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-24.md |
| inv-addy-25 | addy | 1 | 26358 | in-progress | 014 | — |
| inv-addy-26 | addy | 1 | 25104 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-26.md |
| inv-addy-27 | addy | 3 | 48802 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-27.md |
| inv-addy-28 | addy | 10 | 45784 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-28.md |
| inv-addy-29 | addy | 4 | 39158 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-29.md |
| inv-addy-30 | addy | 3 | 43221 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-30.md |
| inv-addy-31 | addy | 4 | 34291 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-31.md |
| inv-addy-32 | addy | 5 | 45382 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-32.md |
| inv-addy-33 | addy | 7 | 43228 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-33.md |
| inv-addy-34 | addy | 3 | 45432 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-34.md |
| inv-addy-35 | addy | 4 | 48638 | done | ≤012 (pre-D-013 cards; quote-check pending) | docs/analysis/inventory/addy/_units/inv-addy-35.md |
| inv-addy-36 | addy | 4 | 49508 | in-progress | 014 | — |
| inv-addy-37 | addy | 1 | 14063 | in-progress | 014 | — |
| inv-addy-38 | addy | 6 | 49386 | in-progress | 014 | — |
| inv-addy-39 | addy | 3 | 47129 | pending | — | — |
| inv-addy-40 | addy | 3 | 44893 | pending | — | — |
| inv-addy-41 | addy | 4 | 49021 | pending | — | — |
| inv-matt-1 | matt | 24 | 38606 | pending | — | — |
| inv-matt-2 | matt | 3 | 49879 | pending | — | — |
| inv-matt-3 | matt | 4 | 44347 | pending | — | — |
| inv-matt-4 | matt | 4 | 42737 | pending | — | — |
| inv-matt-5 | matt | 5 | 44442 | pending | — | — |
| inv-matt-6 | matt | 4 | 48630 | pending | — | — |
| inv-matt-7 | matt | 5 | 48785 | pending | — | — |
| inv-matt-8 | matt | 4 | 20208 | pending | — | — |
| inv-matt-9 | matt | 2 | 49887 | pending | — | — |
| inv-matt-10 | matt | 5 | 19159 | pending | — | — |
| inv-matt-11 | matt | 56 | 168049 | pending | — | — |
| inv-matt-12 | matt | 18 | 38169 | pending | — | — |
| inv-matt-13 | matt | 10 | 12575 | pending | — | — |
| inv-matt-14 | matt | 20 | 40126 | pending | — | — |
| inv-rjm-1 | rjm | 1 | 53992 | pending | — | — |
| inv-rjm-2 | rjm | 2 | 49525 | pending | — | — |
| inv-rjm-3 | rjm | 3 | 45739 | pending | — | — |
| inv-rjm-4 | rjm | 5 | 49959 | pending | — | — |
| inv-rjm-5 | rjm | 2 | 35837 | pending | — | — |
| inv-rjm-6 | rjm | 4 | 34682 | pending | — | — |
| inv-rjm-7 | rjm | 2 | 34063 | pending | — | — |
| inv-rjm-8 | rjm | 4 | 42636 | pending | — | — |
| inv-rjm-9 | rjm | 4 | 43922 | pending | — | — |
| inv-rjm-10 | rjm | 5 | 48839 | pending | — | — |
| inv-rjm-11 | rjm | 5 | 44338 | pending | — | — |
| inv-rjm-12 | rjm | 3 | 35446 | pending | — | — |
| inv-rjm-13 | rjm | 2 | 44111 | pending | — | — |
| inv-rjm-14 | rjm | 3 | 47340 | pending | — | — |
| inv-rjm-15 | rjm | 2 | 38334 | pending | — | — |
| inv-rjm-16 | rjm | 3 | 39705 | pending | — | — |
| inv-rjm-17 | rjm | 3 | 38431 | pending | — | — |
| inv-rjm-18 | rjm | 5 | 38973 | pending | — | — |
| inv-rjm-19 | rjm | 4 | 47448 | pending | — | — |
| inv-rjm-20 | rjm | 2 | 27040 | pending | — | — |
| inv-rjm-21 | rjm | 2 | 44070 | pending | — | — |
| inv-rjm-22 | rjm | 2 | 27302 | pending | — | — |
| inv-rjm-23 | rjm | 2 | 43057 | pending | — | — |
| inv-rjm-24 | rjm | 3 | 45500 | pending | — | — |
| inv-rjm-25 | rjm | 1 | 20032 | pending | — | — |
| inv-rjm-26 | rjm | 1 | 60198 | pending | — | — |
| inv-rjm-27 | rjm | 2 | 30678 | pending | — | — |
| inv-rjm-28 | rjm | 1 | 48525 | pending | — | — |
| inv-rjm-29 | rjm | 3 | 49441 | pending | — | — |
| inv-rjm-30 | rjm | 1 | 14757 | pending | — | — |
| inv-rjm-31 | rjm | 1 | 54740 | pending | — | — |
| inv-rjm-32 | rjm | 3 | 48600 | pending | — | — |
| inv-rjm-33 | rjm | 3 | 47156 | pending | — | — |
| inv-rjm-34 | rjm | 2 | 45391 | pending | — | — |
| inv-rjm-35 | rjm | 1 | 56562 | pending | — | — |
| inv-rjm-36 | rjm | 1 | 21060 | pending | — | — |
| inv-rjm-37 | rjm | 1 | 57524 | pending | — | — |
| inv-rjm-38 | rjm | 2 | 30238 | pending | — | — |
| inv-rjm-39 | rjm | 2 | 36656 | pending | — | — |
| inv-rjm-40 | rjm | 4 | 47941 | pending | — | — |
| inv-rjm-41 | rjm | 1 | 28734 | pending | — | — |
| inv-rjm-42 | rjm | 1 | 34748 | pending | — | — |
| inv-rjm-43 | rjm | 1 | 32140 | pending | — | — |
| inv-rjm-44 | rjm | 1 | 18974 | pending | — | — |
| inv-rjm-45 | rjm | 1 | 89866 | pending | — | — |
| inv-rjm-46 | rjm | 1 | 94067 | pending | — | — |
| inv-rjm-47 | rjm | 1 | 48938 | pending | — | — |
| inv-rjm-48 | rjm | 1 | 28960 | pending | — | — |
| inv-rjm-49 | rjm | 3 | 46668 | pending | — | — |
| inv-rjm-50 | rjm | 2 | 31666 | pending | — | — |
| inv-rjm-51 | rjm | 2 | 42220 | pending | — | — |
| inv-rjm-52 | rjm | 3 | 45480 | pending | — | — |
| inv-rjm-53 | rjm | 4 | 43426 | pending | — | — |
| inv-rjm-54 | rjm | 6 | 45765 | pending | — | — |
| inv-rjm-55 | rjm | 5 | 43508 | pending | — | — |
| inv-rjm-56 | rjm | 5 | 35281 | pending | — | — |
| inv-rjm-57 | rjm | 2 | 45377 | pending | — | — |
| inv-rjm-58 | rjm | 3 | 48964 | pending | — | — |
| inv-rjm-59 | rjm | 6 | 47324 | pending | — | — |
| inv-rjm-60 | rjm | 2 | 26147 | pending | — | — |
| inv-rjm-61 | rjm | 1 | 37770 | pending | — | — |
| inv-rjm-62 | rjm | 2 | 41798 | pending | — | — |
| inv-rjm-63 | rjm | 3 | 46072 | pending | — | — |
| inv-rjm-64 | rjm | 4 | 49639 | pending | — | — |
| inv-rjm-65 | rjm | 5 | 47106 | pending | — | — |
| inv-rjm-66 | rjm | 4 | 37014 | pending | — | — |
| inv-rjm-67 | rjm | 1 | 46256 | pending | — | — |
| inv-rjm-68 | rjm | 6 | 48223 | pending | — | — |
| inv-rjm-69 | rjm | 1 | 28813 | pending | — | — |
| inv-rjm-70 | rjm | 2 | 34836 | pending | — | — |
| inv-rjm-71 | rjm | 1 | 46695 | pending | — | — |
| inv-rjm-72 | rjm | 3 | 43822 | pending | — | — |
| inv-rjm-73 | rjm | 6 | 43759 | pending | — | — |
| inv-rjm-74 | rjm | 9 | 47791 | pending | — | — |
| inv-rjm-75 | rjm | 5 | 37918 | pending | — | — |
| inv-rjm-76 | rjm | 6 | 42953 | pending | — | — |
| inv-rjm-77 | rjm | 10 | 70100 | pending | — | — |
| inv-rjm-78 | rjm | 3 | 48286 | pending | — | — |
| inv-rjm-79 | rjm | 5 | 46901 | pending | — | — |
| inv-rjm-80 | rjm | 5 | 48716 | pending | — | — |
| inv-rjm-81 | rjm | 3 | 43430 | pending | — | — |
| inv-rjm-82 | rjm | 4 | 40133 | pending | — | — |
| inv-rjm-83 | rjm | 3 | 43010 | pending | — | — |
| inv-rjm-84 | rjm | 2 | 34621 | pending | — | — |
| inv-rjm-85 | rjm | 2 | 37383 | pending | — | — |
| inv-rjm-86 | rjm | 3 | 38340 | pending | — | — |
| inv-rjm-87 | rjm | 11 | 56916 | pending | — | — |
| inv-rjm-88 | rjm | 2 | 13775 | pending | — | — |
| inv-rjm-89 | rjm | 5 | 47455 | pending | — | — |
| inv-rjm-90 | rjm | 15 | 103115 | pending | — | — |
| inv-rjm-91 | rjm | 7 | 93233 | pending | — | — |
| inv-rjm-92 | rjm | 7 | 46288 | pending | — | — |
| inv-rjm-93 | rjm | 1 | 4296 | pending | — | — |
| inv-rjm-94 | rjm | 7 | 107547 | pending | — | — |
| inv-rjm-95 | rjm | 7 | 24577 | pending | — | — |
| inv-rjm-96 | rjm | 5 | 39007 | pending | — | — |
| inv-rjm-97 | rjm | 14 | 220391 | pending | — | — |
| inv-rjm-98 | rjm | 8 | 100646 | pending | — | — |
| inv-rjm-99 | rjm | 5 | 43838 | pending | — | — |
| inv-rjm-100 | rjm | 13 | 67189 | pending | — | — |
| inv-rjm-101 | rjm | 3 | 78317 | pending | — | — |
| inv-rjm-102 | rjm | 2 | 14656 | pending | — | — |
| inv-rjm-103 | rjm | 2 | 71884 | pending | — | — |
| inv-rjm-104 | rjm | 1 | 6463 | pending | — | — |
| inv-rjm-105 | rjm | 5 | 45817 | pending | — | — |
| inv-rjm-106 | rjm | 8 | 52265 | pending | — | — |
| inv-rjm-107 | rjm | 5 | 64201 | pending | — | — |
| inv-rjm-108 | rjm | 4 | 37487 | pending | — | — |
| inv-rjm-109 | rjm | 8 | 35654 | pending | — | — |
| inv-rjm-110 | rjm | 8 | 109468 | pending | — | — |
| inv-rjm-111 | rjm | 7 | 28706 | pending | — | — |
| inv-rjm-112 | rjm | 2 | 25083 | pending | — | — |
| inv-rjm-113 | rjm | 14 | 107420 | pending | — | — |
| inv-rjm-114 | rjm | 5 | 28358 | pending | — | — |
| inv-rjm-115 | rjm | 6 | 40174 | pending | — | — |
| inv-rjm-116 | rjm | 6 | 146040 | pending | — | — |
| inv-rjm-117 | rjm | 3 | 83406 | pending | — | — |
| inv-rjm-118 | rjm | 6 | 34119 | pending | — | — |
| inv-rjm-119 | rjm | 9 | 41606 | pending | — | — |
| inv-rjm-120 | rjm | 2 | 25089 | pending | — | — |
| inv-rjm-121 | rjm | 7 | 81757 | pending | — | — |
| inv-rjm-122 | rjm | 15 | 186322 | pending | — | — |
| inv-rjm-123 | rjm | 4 | 42908 | pending | — | — |
| inv-rjm-124 | rjm | 9 | 58358 | pending | — | — |
| inv-rjm-125 | rjm | 52 | 13531120 | pending | — | — |
| inv-rjm-126 | rjm | 3 | 22165 | pending | — | — |
| inv-rjm-127 | rjm | 5 | 41972 | pending | — | — |
| inv-rjm-128 | rjm | 9 | 124916 | pending | — | — |
| inv-rjm-129 | rjm | 5 | 86839 | pending | — | — |
| inv-rjm-130 | rjm | 6 | 34013 | pending | — | — |
| inv-rjm-131 | rjm | 3 | 41225 | pending | — | — |
| inv-rjm-132 | rjm | 2 | 45685 | pending | — | — |
| inv-rjm-133 | rjm | 12 | 78968 | pending | — | — |
| inv-rjm-134 | rjm | 7 | 43132 | pending | — | — |
| inv-rjm-135 | rjm | 5 | 49080 | pending | — | — |
| inv-rjm-136 | rjm | 3 | 40093 | pending | — | — |
| inv-rjm-137 | rjm | 7 | 44214 | pending | — | — |
| inv-rjm-138 | rjm | 3 | 40364 | pending | — | — |
| inv-rjm-139 | rjm | 6 | 49349 | pending | — | — |
| inv-rjm-140 | rjm | 6 | 49541 | pending | — | — |
| inv-rjm-141 | rjm | 4 | 19832 | pending | — | — |
| inv-rjm-142 | rjm | 1 | 44216 | pending | — | — |
| inv-rjm-143 | rjm | 5 | 48704 | pending | — | — |
| inv-rjm-144 | rjm | 1 | 49433 | pending | — | — |
| inv-rjm-145 | rjm | 3 | 48719 | pending | — | — |
| inv-rjm-146 | rjm | 6 | 46095 | pending | — | — |
| inv-rjm-147 | rjm | 5 | 48323 | pending | — | — |
| inv-rjm-148 | rjm | 5 | 45414 | pending | — | — |
| inv-rjm-149 | rjm | 6 | 44912 | pending | — | — |
| inv-rjm-150 | rjm | 6 | 49900 | pending | — | — |
| inv-rjm-151 | rjm | 7 | 42966 | pending | — | — |
| inv-rjm-152 | rjm | 4 | 44431 | pending | — | — |
| inv-rjm-153 | rjm | 6 | 49712 | pending | — | — |
| inv-rjm-154 | rjm | 7 | 48134 | pending | — | — |
| inv-rjm-155 | rjm | 8 | 44261 | pending | — | — |
| inv-rjm-156 | rjm | 6 | 31039 | pending | — | — |
| inv-rjm-157 | rjm | 2 | 49923 | pending | — | — |
| inv-rjm-158 | rjm | 13 | 45816 | pending | — | — |
| inv-rjm-159 | rjm | 8 | 42505 | pending | — | — |
| inv-rjm-160 | rjm | 6 | 49782 | pending | — | — |
| inv-rjm-161 | rjm | 11 | 48734 | pending | — | — |
| inv-rjm-162 | rjm | 14 | 48141 | pending | — | — |
| inv-rjm-163 | rjm | 10 | 47750 | pending | — | — |
| inv-rjm-164 | rjm | 3 | 47659 | pending | — | — |
| inv-rjm-165 | rjm | 14 | 36851 | pending | — | — |
| inv-rjm-166 | rjm | 5 | 37358 | pending | — | — |
| inv-rjm-167 | rjm | 3 | 46489 | pending | — | — |
| inv-rjm-168 | rjm | 4 | 43073 | pending | — | — |
| inv-rjm-169 | rjm | 4 | 48783 | pending | — | — |
| inv-rjm-170 | rjm | 4 | 45941 | pending | — | — |
| inv-rjm-171 | rjm | 5 | 38972 | pending | — | — |
| inv-rjm-172 | rjm | 3 | 44241 | pending | — | — |
| inv-rjm-173 | rjm | 1 | 27405 | pending | — | — |
| inv-rjm-174 | rjm | 3 | 47643 | pending | — | — |
| inv-rjm-175 | rjm | 2 | 42650 | pending | — | — |
| inv-rjm-176 | rjm | 2 | 44099 | pending | — | — |
| inv-rjm-177 | rjm | 4 | 41325 | pending | — | — |
| inv-rjm-178 | rjm | 3 | 34051 | pending | — | — |
| inv-rjm-179 | rjm | 1 | 23269 | pending | — | — |
| inv-rjm-180 | rjm | 1 | 45289 | pending | — | — |
| inv-rjm-181 | rjm | 1 | 59882 | pending | — | — |
| inv-rjm-182 | rjm | 2 | 44466 | pending | — | — |
| inv-rjm-183 | rjm | 3 | 42883 | pending | — | — |
| inv-rjm-184 | rjm | 1 | 30975 | pending | — | — |
| inv-rjm-185 | rjm | 1 | 23467 | pending | — | — |
| inv-rjm-186 | rjm | 1 | 110937 | pending | — | — |
| inv-rjm-187 | rjm | 1 | 37191 | pending | — | — |
| inv-rjm-188 | rjm | 6 | 43459 | pending | — | — |
| inv-rjm-189 | rjm | 1 | 153486 | pending | — | — |
| inv-rjm-190 | rjm | 1 | 1102 | pending | — | — |
| inv-rjm-191 | rjm | 1 | 81217 | pending | — | — |
| inv-rjm-192 | rjm | 5 | 46899 | pending | — | — |
| inv-rjm-193 | rjm | 4 | 37305 | pending | — | — |
| inv-rjm-194 | rjm | 1 | 43794 | pending | — | — |
| inv-rjm-195 | rjm | 8 | 40711 | pending | — | — |
| inv-rjm-196 | rjm | 6 | 42501 | pending | — | — |
| inv-rjm-197 | rjm | 4 | 46430 | pending | — | — |
| inv-rjm-198 | rjm | 3 | 38050 | pending | — | — |
| inv-rjm-199 | rjm | 9 | 48251 | pending | — | — |
| inv-rjm-200 | rjm | 1 | 37983 | pending | — | — |
| inv-rjm-201 | rjm | 3 | 34320 | pending | — | — |
| inv-rjm-202 | rjm | 2 | 27348 | pending | — | — |
| inv-rjm-203 | rjm | 7 | 48062 | pending | — | — |
| inv-rjm-204 | rjm | 5 | 31266 | pending | — | — |
| inv-rjm-205 | rjm | 3 | 33387 | pending | — | — |
| inv-rjm-206 | rjm | 4 | 44625 | pending | — | — |
| inv-rjm-207 | rjm | 8 | 37430 | pending | — | — |
| inv-rjm-208 | rjm | 8 | 44757 | pending | — | — |
| inv-rjm-209 | rjm | 8 | 45685 | pending | — | — |
| inv-rjm-210 | rjm | 8 | 49917 | pending | — | — |
| inv-rjm-211 | rjm | 3 | 37448 | pending | — | — |
| inv-rjm-212 | rjm | 3 | 30637 | pending | — | — |
| inv-rjm-213 | rjm | 1 | 36974 | pending | — | — |
| inv-rjm-214 | rjm | 2 | 45462 | pending | — | — |
| inv-rjm-215 | rjm | 3 | 46491 | pending | — | — |
| inv-rjm-216 | rjm | 8 | 44076 | pending | — | — |
| inv-rjm-217 | rjm | 5 | 45241 | pending | — | — |
| inv-rjm-218 | rjm | 6 | 44259 | pending | — | — |
| inv-rjm-219 | rjm | 5 | 35024 | pending | — | — |
| inv-rjm-220 | rjm | 2 | 25797 | pending | — | — |
| inv-rjm-221 | rjm | 1 | 46123 | pending | — | — |
| inv-rjm-222 | rjm | 5 | 40601 | pending | — | — |
| inv-rjm-223 | rjm | 1 | 70298 | pending | — | — |
| inv-rjm-224 | rjm | 3 | 26220 | pending | — | — |
| inv-rjm-225 | rjm | 5 | 41061 | pending | — | — |
| inv-rjm-226 | rjm | 4 | 33802 | pending | — | — |
| inv-rjm-227 | rjm | 1 | 59943 | pending | — | — |
| inv-rjm-228 | rjm | 1 | 5725 | pending | — | — |
| inv-rjm-229 | rjm | 1 | 53014 | pending | — | — |
| inv-rjm-230 | rjm | 3 | 47671 | pending | — | — |
| inv-rjm-231 | rjm | 4 | 43713 | pending | — | — |
| inv-rjm-232 | rjm | 4 | 45432 | pending | — | — |
| inv-rjm-233 | rjm | 3 | 37390 | pending | — | — |
| inv-rjm-234 | rjm | 4 | 42074 | pending | — | — |
| inv-rjm-235 | rjm | 2 | 41334 | pending | — | — |
| inv-rjm-236 | rjm | 3 | 28644 | pending | — | — |
| inv-rjm-237 | rjm | 3 | 46733 | pending | — | — |
| inv-rjm-238 | rjm | 2 | 35820 | pending | — | — |
| inv-rjm-239 | rjm | 2 | 39449 | pending | — | — |
| inv-rjm-240 | rjm | 1 | 62742 | pending | — | — |
| inv-rjm-241 | rjm | 5 | 48290 | pending | — | — |
| inv-rjm-242 | rjm | 1 | 71105 | pending | — | — |
| inv-rjm-243 | rjm | 3 | 30842 | pending | — | — |
| inv-rjm-244 | rjm | 2 | 37007 | pending | — | — |
| inv-rjm-245 | rjm | 4 | 47143 | pending | — | — |
| inv-rjm-246 | rjm | 5 | 38692 | pending | — | — |
| inv-rjm-247 | rjm | 3 | 44236 | pending | — | — |
| inv-rjm-248 | rjm | 6 | 38982 | pending | — | — |
| inv-rjm-249 | rjm | 1 | 338521 | pending | — | — |
| inv-rjm-250 | rjm | 2 | 38156 | pending | — | — |
| inv-rjm-251 | rjm | 8 | 49358 | pending | — | — |
| inv-rjm-252 | rjm | 3 | 48429 | pending | — | — |
| inv-rjm-253 | rjm | 2 | 28636 | pending | — | — |
| inv-rjm-254 | rjm | 1 | 57443 | pending | — | — |
| inv-rjm-255 | rjm | 3 | 48268 | pending | — | — |
| inv-rjm-256 | rjm | 5 | 18281 | pending | — | — |
| inv-rjm-257 | rjm | 1 | 62233 | pending | — | — |
| inv-rjm-258 | rjm | 5 | 49414 | pending | — | — |
| inv-rjm-259 | rjm | 3 | 44790 | pending | — | — |
| inv-rjm-260 | rjm | 2 | 48382 | pending | — | — |
| inv-rjm-261 | rjm | 6 | 49220 | pending | — | — |
| inv-rjm-262 | rjm | 6 | 47292 | pending | — | — |
| inv-rjm-263 | rjm | 4 | 44814 | pending | — | — |
| inv-rjm-264 | rjm | 8 | 49950 | pending | — | — |
| inv-rjm-265 | rjm | 6 | 41181 | pending | — | — |
| inv-rjm-266 | rjm | 2 | 43648 | pending | — | — |
| inv-rjm-267 | rjm | 2 | 25826 | pending | — | — |
| inv-rjm-268 | rjm | 3 | 47283 | pending | — | — |
| inv-rjm-269 | rjm | 6 | 49825 | pending | — | — |
| inv-rjm-270 | rjm | 2 | 15186 | pending | — | — |
| inv-rjm-271 | rjm | 1 | 43506 | pending | — | — |
| inv-rjm-272 | rjm | 6 | 41386 | pending | — | — |
| inv-rjm-273 | rjm | 1 | 28751 | pending | — | — |
| inv-rjm-274 | rjm | 2 | 31844 | pending | — | — |
| inv-rjm-275 | rjm | 1 | 43573 | pending | — | — |
| inv-rjm-276 | rjm | 2 | 40473 | pending | — | — |
| inv-rjm-277 | rjm | 4 | 35980 | pending | — | — |
| inv-rjm-278 | rjm | 1 | 14246 | pending | — | — |

### Phase 2 — Concept card units

| Unit | Package / family | Status | Session | Output |
|---|---|---|---|---|

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

---

## Counts

Updated at every unit boundary.

| Metric | Value |
|---|---|
| Manifest rows (addy / matt / rjm) | 217 / 167 / 950 |
| Rows inventoried (addy / matt / rjm) | 209 / 0 / 0 |
| Concept cards (addy / matt / rjm) | 0 / 0 / 0 |
| Concordance rows (by class: ALIGNED / SYNONYM / HOMONYM / PARTIAL / UNIQUE / CONFLICT) | 0 |
| Decisions (active / superseded / pending-peter) | 13 / 1 / 0 |
| Glossary terms | 0 |
| Build units (done / total) | — / — |

---

## Blocked

Anything the agent cannot resolve alone. Each row names what Peter needs to do.

| Since | Unit / item | Reason | Needs |
|---|---|---|---|

---

## Anti-drift check log

Last result of each check (METHOD.md §10). Filled at session start and phase gates.

| Check | Last run | Result |
|---|---|---|
| coverage.ts | 014 | 1344 uncovered, 5 failures (pre-existing orphan cards) |
| glossary-lint.ts | 014 | clean |
| last-unit verification | 014 | clean (inv-addy-14 exists, memo HIT, quote-check 98 PASS) |
| decision consistency (4V) | — | — |
| traceability | — | — |
