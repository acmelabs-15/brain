# STATE — Lifecycle Synthesis

This file is the single source of truth for where the project is. It is updated at every work-unit boundary and at every session end. A new session reads `METHOD.md` first, then this file.

---

## Current position

| Field | Value |
|---|---|
| **phase** | `1` |
| **phase_name** | Inventory |
| **current_unit** | inv-addy-36 |
| **last_session** | 011 |
| **next_action** | Process 15-unit experimental batch |
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

| Unit | Package | Files | Bytes | Status | Session | Output |
|---|---|---|---|---|---|---|
| inv-addy-1 | addy | 28 | 49827 | done | 002 | docs/analysis/inventory/addy/_units/inv-addy-1.md |
| inv-addy-2 | addy | 57 | 44728 | done | 002 | docs/analysis/inventory/addy/_units/inv-addy-2.md |
| inv-addy-3 | addy | 3 | 38800 | done | 003 | docs/analysis/inventory/addy/_units/inv-addy-3.md |
| inv-addy-4 | addy | 17 | 48135 | done | 004 | docs/analysis/inventory/addy/_units/inv-addy-4.md |
| inv-addy-5 | addy | 6 | 41922 | done | 005 | docs/analysis/inventory/addy/_units/inv-addy-5.md |
| inv-addy-6 | addy | 5 | 42661 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-6.md |
| inv-addy-7 | addy | 6 | 27981 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-7.md |
| inv-addy-8 | addy | 5 | 49662 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-8.md |
| inv-addy-9 | addy | 10 | 42248 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-9.md |
| inv-addy-10 | addy | 4 | 42379 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-10.md |
| inv-addy-11 | addy | 16 | 47865 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-11.md |
| inv-addy-12 | addy | 5 | 39879 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-12.md |
| inv-addy-13 | addy | 4 | 48310 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-13.md |
| inv-addy-14 | addy | 4 | 46793 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-14.md |
| inv-addy-15 | addy | 4 | 38862 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-15.md |
| inv-addy-16 | addy | 2 | 41435 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-16.md |
| inv-addy-17 | addy | 3 | 47761 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-17.md |
| inv-addy-18 | addy | 3 | 44403 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-18.md |
| inv-addy-19 | addy | 3 | 46205 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-19.md |
| inv-addy-20 | addy | 5 | 34444 | done | 006 | docs/analysis/inventory/addy/_units/inv-addy-20.md |
| inv-addy-21 | addy | 2 | 48648 | done | 007 | docs/analysis/inventory/addy/_units/inv-addy-21.md |
| inv-addy-22 | addy | 2 | 48438 | done | 007 | docs/analysis/inventory/addy/_units/inv-addy-22.md |
| inv-addy-23 | addy | 2 | 48771 | done | 007 | docs/analysis/inventory/addy/_units/inv-addy-23.md |
| inv-addy-24 | addy | 1 | 26413 | done | 007 | docs/analysis/inventory/addy/_units/inv-addy-24.md |
| inv-addy-25 | addy | 1 | 26179 | done | 007 | docs/analysis/inventory/addy/_units/inv-addy-25.md |
| inv-addy-26 | addy | 1 | 26352 | done | 008 | docs/analysis/inventory/addy/_units/inv-addy-26.md |
| inv-addy-27 | addy | 1 | 26596 | done | 008 | docs/analysis/inventory/addy/_units/inv-addy-27.md |
| inv-addy-28 | addy | 1 | 26336 | done | 008 | docs/analysis/inventory/addy/_units/inv-addy-28.md |
| inv-addy-29 | addy | 2 | 25104 | done | 008 | docs/analysis/inventory/addy/_units/inv-addy-29.md |
| inv-addy-30 | addy | 1 | 26687 | done | 008 | docs/analysis/inventory/addy/_units/inv-addy-30.md |
| inv-addy-31 | addy | 1 | 26475 | done | 009 | docs/analysis/inventory/addy/_units/inv-addy-31.md |
| inv-addy-32 | addy | 1 | 26252 | done | 009 | docs/analysis/inventory/addy/_units/inv-addy-32.md |
| inv-addy-33 | addy | 1 | 26344 | done | 009 | docs/analysis/inventory/addy/_units/inv-addy-33.md |
| inv-addy-34 | addy | 1 | 24935 | done | 009 | docs/analysis/inventory/addy/_units/inv-addy-34.md |
| inv-addy-35 | addy | 1 | 26320 | done | 009 | docs/analysis/inventory/addy/_units/inv-addy-35.md |
| inv-addy-36 | addy | 1 | 26502 | pending | — | — |
| inv-addy-37 | addy | 1 | 26358 | pending | — | — |
| inv-addy-38 | addy | 1 | 26603 | pending | — | — |
| inv-addy-39 | addy | 1 | 23834 | pending | — | — |
| inv-addy-40 | addy | 1 | 26317 | pending | — | — |
| inv-addy-41 | addy | 1 | 26223 | pending | — | — |
| inv-matt-1 | matt | 10 | 49951 | pending | — | — |
| inv-matt-2 | matt | 11 | 49883 | pending | — | — |
| inv-matt-3 | matt | 4 | 43118 | pending | — | — |
| inv-matt-4 | matt | 5 | 46302 | pending | — | — |
| inv-matt-5 | matt | 4 | 40731 | pending | — | — |
| inv-matt-6 | matt | 5 | 48916 | pending | — | — |
| inv-matt-7 | matt | 5 | 48031 | pending | — | — |
| inv-matt-8 | matt | 1 | 15587 | pending | — | — |
| inv-matt-9 | matt | 2 | 49887 | pending | — | — |
| inv-matt-10 | matt | 30 | 49357 | pending | — | — |
| inv-matt-11 | matt | 20 | 49275 | pending | — | — |
| inv-matt-12 | matt | 12 | 49790 | pending | — | — |
| inv-matt-13 | matt | 14 | 49909 | pending | — | — |
| inv-matt-14 | matt | 25 | 49333 | pending | — | — |
| inv-matt-15 | matt | 19 | 28431 | pending | — | — |
| inv-rjm-1 | rjm | 3 | 49002 | pending | — | — |
| inv-rjm-2 | rjm | 3 | 43285 | pending | — | — |
| inv-rjm-3 | rjm | 4 | 34682 | pending | — | — |
| inv-rjm-4 | rjm | 4 | 48560 | pending | — | — |
| inv-rjm-5 | rjm | 4 | 32454 | pending | — | — |
| inv-rjm-6 | rjm | 2 | 35685 | pending | — | — |
| inv-rjm-7 | rjm | 2 | 40666 | pending | — | — |
| inv-rjm-8 | rjm | 2 | 43577 | pending | — | — |
| inv-rjm-9 | rjm | 3 | 41249 | pending | — | — |
| inv-rjm-10 | rjm | 2 | 47859 | pending | — | — |
| inv-rjm-11 | rjm | 2 | 35214 | pending | — | — |
| inv-rjm-12 | rjm | 1 | 60198 | pending | — | — |
| inv-rjm-13 | rjm | 1 | 48525 | pending | — | — |
| inv-rjm-14 | rjm | 2 | 38971 | pending | — | — |
| inv-rjm-15 | rjm | 5 | 43208 | pending | — | — |
| inv-rjm-16 | rjm | 5 | 41799 | pending | — | — |
| inv-rjm-17 | rjm | 5 | 42388 | pending | — | — |
| inv-rjm-18 | rjm | 4 | 34922 | pending | — | — |
| inv-rjm-19 | rjm | 2 | 44933 | pending | — | — |
| inv-rjm-20 | rjm | 4 | 41011 | pending | — | — |
| inv-rjm-21 | rjm | 7 | 44012 | pending | — | — |
| inv-rjm-22 | rjm | 7 | 43772 | pending | — | — |
| inv-rjm-23 | rjm | 4 | 38940 | pending | — | — |
| inv-rjm-24 | rjm | 3 | 48286 | pending | — | — |
| inv-rjm-25 | rjm | 5 | 46901 | pending | — | — |
| inv-rjm-26 | rjm | 5 | 48716 | pending | — | — |
| inv-rjm-27 | rjm | 3 | 43430 | pending | — | — |
| inv-rjm-28 | rjm | 4 | 40133 | pending | — | — |
| inv-rjm-29 | rjm | 3 | 43010 | pending | — | — |
| inv-rjm-30 | rjm | 2 | 34621 | pending | — | — |
| inv-rjm-31 | rjm | 2 | 37383 | pending | — | — |
| inv-rjm-32 | rjm | 8 | 49313 | pending | — | — |
| inv-rjm-33 | rjm | 6 | 45943 | pending | — | — |
| inv-rjm-34 | rjm | 3 | 42209 | pending | — | — |
| inv-rjm-35 | rjm | 3 | 43817 | pending | — | — |
| inv-rjm-36 | rjm | 4 | 42569 | pending | — | — |
| inv-rjm-37 | rjm | 6 | 40907 | pending | — | — |
| inv-rjm-38 | rjm | 6 | 49748 | pending | — | — |
| inv-rjm-39 | rjm | 1 | 61607 | pending | — | — |
| inv-rjm-40 | rjm | 6 | 47965 | pending | — | — |
| inv-rjm-41 | rjm | 4 | 48886 | pending | — | — |
| inv-rjm-42 | rjm | 2 | 39896 | pending | — | — |
| inv-rjm-43 | rjm | 2 | 39637 | pending | — | — |
| inv-rjm-44 | rjm | 4 | 44101 | pending | — | — |
| inv-rjm-45 | rjm | 2 | 47871 | pending | — | — |
| inv-rjm-46 | rjm | 5 | 31701 | pending | — | — |
| inv-rjm-47 | rjm | 2 | 49900 | pending | — | — |
| inv-rjm-48 | rjm | 5 | 48630 | pending | — | — |
| inv-rjm-49 | rjm | 11 | 49539 | pending | — | — |
| inv-rjm-50 | rjm | 3 | 31903 | pending | — | — |
| inv-rjm-51 | rjm | 1 | 47394 | pending | — | — |
| inv-rjm-52 | rjm | 4 | 45579 | pending | — | — |
| inv-rjm-53 | rjm | 1 | 56770 | pending | — | — |
| inv-rjm-54 | rjm | 8 | 49092 | pending | — | — |
| inv-rjm-55 | rjm | 4 | 34477 | pending | — | — |
| inv-rjm-56 | rjm | 2 | 37954 | pending | — | — |
| inv-rjm-57 | rjm | 6 | 47755 | pending | — | — |
| inv-rjm-58 | rjm | 9 | 49083 | pending | — | — |
| inv-rjm-59 | rjm | 1 | 10933 | pending | — | — |
| inv-rjm-60 | rjm | 1 | 39760 | pending | — | — |
| inv-rjm-61 | rjm | 6 | 42371 | pending | — | — |
| inv-rjm-62 | rjm | 11 | 44069 | pending | — | — |
| inv-rjm-63 | rjm | 4 | 47106 | pending | — | — |
| inv-rjm-64 | rjm | 4 | 41477 | pending | — | — |
| inv-rjm-65 | rjm | 8 | 48545 | pending | — | — |
| inv-rjm-66 | rjm | 2 | 45319 | pending | — | — |
| inv-rjm-67 | rjm | 1 | 82025 | pending | — | — |
| inv-rjm-68 | rjm | 5 | 39681 | pending | — | — |
| inv-rjm-69 | rjm | 1 | 65128 | pending | — | — |
| inv-rjm-70 | rjm | 7 | 47003 | pending | — | — |
| inv-rjm-71 | rjm | 9 | 41606 | pending | — | — |
| inv-rjm-72 | rjm | 4 | 49251 | pending | — | — |
| inv-rjm-73 | rjm | 4 | 46486 | pending | — | — |
| inv-rjm-74 | rjm | 4 | 41387 | pending | — | — |
| inv-rjm-75 | rjm | 4 | 46288 | pending | — | — |
| inv-rjm-76 | rjm | 4 | 44932 | pending | — | — |
| inv-rjm-77 | rjm | 3 | 40462 | pending | — | — |
| inv-rjm-78 | rjm | 5 | 49805 | pending | — | — |
| inv-rjm-79 | rjm | 7 | 43398 | pending | — | — |
| inv-rjm-80 | rjm | 9 | 47719 | pending | — | — |
| inv-rjm-81 | rjm | 9 | 49254 | pending | — | — |
| inv-rjm-82 | rjm | 6 | 41509 | pending | — | — |
| inv-rjm-83 | rjm | 2 | 38073 | pending | — | — |
| inv-rjm-84 | rjm | 5 | 41080 | pending | — | — |
| inv-rjm-85 | rjm | 4 | 42780 | pending | — | — |
| inv-rjm-86 | rjm | 1 | 29094 | pending | — | — |
| inv-rjm-87 | rjm | 2 | 47272 | pending | — | — |
| inv-rjm-88 | rjm | 6 | 48765 | pending | — | — |
| inv-rjm-89 | rjm | 4 | 41319 | pending | — | — |
| inv-rjm-90 | rjm | 3 | 44813 | pending | — | — |
| inv-rjm-91 | rjm | 3 | 46178 | pending | — | — |
| inv-rjm-92 | rjm | 2 | 18849 | pending | — | — |
| inv-rjm-93 | rjm | 1 | 38288 | pending | — | — |
| inv-rjm-94 | rjm | 4 | 48551 | pending | — | — |
| inv-rjm-95 | rjm | 7 | 37579 | pending | — | — |
| inv-rjm-96 | rjm | 2 | 37659 | pending | — | — |
| inv-rjm-97 | rjm | 3 | 46971 | pending | — | — |
| inv-rjm-98 | rjm | 8 | 41045 | pending | — | — |
| inv-rjm-99 | rjm | 5 | 45156 | pending | — | — |
| inv-rjm-100 | rjm | 4 | 34933 | pending | — | — |
| inv-rjm-101 | rjm | 3 | 34049 | pending | — | — |
| inv-rjm-102 | rjm | 3 | 40093 | pending | — | — |
| inv-rjm-103 | rjm | 7 | 49936 | pending | — | — |
| inv-rjm-104 | rjm | 1 | 44216 | pending | — | — |
| inv-rjm-105 | rjm | 3 | 37372 | pending | — | — |
| inv-rjm-106 | rjm | 1 | 49433 | pending | — | — |
| inv-rjm-107 | rjm | 3 | 48719 | pending | — | — |
| inv-rjm-108 | rjm | 6 | 47127 | pending | — | — |
| inv-rjm-109 | rjm | 5 | 49493 | pending | — | — |
| inv-rjm-110 | rjm | 5 | 40449 | pending | — | — |
| inv-rjm-111 | rjm | 6 | 49900 | pending | — | — |
| inv-rjm-112 | rjm | 7 | 42966 | pending | — | — |
| inv-rjm-113 | rjm | 4 | 44431 | pending | — | — |
| inv-rjm-114 | rjm | 6 | 49712 | pending | — | — |
| inv-rjm-115 | rjm | 7 | 48134 | pending | — | — |
| inv-rjm-116 | rjm | 8 | 44261 | pending | — | — |
| inv-rjm-117 | rjm | 6 | 31039 | pending | — | — |
| inv-rjm-118 | rjm | 2 | 49923 | pending | — | — |
| inv-rjm-119 | rjm | 13 | 45816 | pending | — | — |
| inv-rjm-120 | rjm | 8 | 42505 | pending | — | — |
| inv-rjm-121 | rjm | 6 | 49782 | pending | — | — |
| inv-rjm-122 | rjm | 11 | 48734 | pending | — | — |
| inv-rjm-123 | rjm | 14 | 48141 | pending | — | — |
| inv-rjm-124 | rjm | 10 | 47750 | pending | — | — |
| inv-rjm-125 | rjm | 3 | 47659 | pending | — | — |
| inv-rjm-126 | rjm | 14 | 36851 | pending | — | — |
| inv-rjm-127 | rjm | 5 | 37358 | pending | — | — |
| inv-rjm-128 | rjm | 3 | 46489 | pending | — | — |
| inv-rjm-129 | rjm | 4 | 43073 | pending | — | — |
| inv-rjm-130 | rjm | 2 | 34807 | pending | — | — |
| inv-rjm-131 | rjm | 5 | 45994 | pending | — | — |
| inv-rjm-132 | rjm | 4 | 44565 | pending | — | — |
| inv-rjm-133 | rjm | 4 | 40942 | pending | — | — |
| inv-rjm-134 | rjm | 2 | 39034 | pending | — | — |
| inv-rjm-135 | rjm | 3 | 47643 | pending | — | — |
| inv-rjm-136 | rjm | 2 | 42650 | pending | — | — |
| inv-rjm-137 | rjm | 2 | 44099 | pending | — | — |
| inv-rjm-138 | rjm | 4 | 41325 | pending | — | — |
| inv-rjm-139 | rjm | 1 | 9633 | pending | — | — |
| inv-rjm-140 | rjm | 1 | 45289 | pending | — | — |
| inv-rjm-141 | rjm | 1 | 59882 | pending | — | — |
| inv-rjm-142 | rjm | 2 | 44466 | pending | — | — |
| inv-rjm-143 | rjm | 3 | 42883 | pending | — | — |
| inv-rjm-144 | rjm | 1 | 30975 | pending | — | — |
| inv-rjm-145 | rjm | 1 | 23467 | pending | — | — |
| inv-rjm-146 | rjm | 1 | 110937 | pending | — | — |
| inv-rjm-147 | rjm | 1 | 37191 | pending | — | — |
| inv-rjm-148 | rjm | 3 | 44864 | pending | — | — |
| inv-rjm-149 | rjm | 6 | 46282 | pending | — | — |
| inv-rjm-150 | rjm | 1 | 153486 | pending | — | — |
| inv-rjm-151 | rjm | 1 | 1102 | pending | — | — |
| inv-rjm-152 | rjm | 1 | 81217 | pending | — | — |
| inv-rjm-153 | rjm | 5 | 46899 | pending | — | — |
| inv-rjm-154 | rjm | 4 | 37305 | pending | — | — |
| inv-rjm-155 | rjm | 1 | 43794 | pending | — | — |
| inv-rjm-156 | rjm | 8 | 40711 | pending | — | — |
| inv-rjm-157 | rjm | 6 | 42501 | pending | — | — |
| inv-rjm-158 | rjm | 4 | 46430 | pending | — | — |
| inv-rjm-159 | rjm | 3 | 38050 | pending | — | — |
| inv-rjm-160 | rjm | 9 | 48251 | pending | — | — |
| inv-rjm-161 | rjm | 1 | 37983 | pending | — | — |
| inv-rjm-162 | rjm | 3 | 34320 | pending | — | — |
| inv-rjm-163 | rjm | 2 | 27348 | pending | — | — |
| inv-rjm-164 | rjm | 7 | 48062 | pending | — | — |
| inv-rjm-165 | rjm | 5 | 31266 | pending | — | — |
| inv-rjm-166 | rjm | 3 | 33387 | pending | — | — |
| inv-rjm-167 | rjm | 4 | 44625 | pending | — | — |
| inv-rjm-168 | rjm | 8 | 49698 | pending | — | — |
| inv-rjm-169 | rjm | 9 | 45582 | pending | — | — |
| inv-rjm-170 | rjm | 10 | 43478 | pending | — | — |
| inv-rjm-171 | rjm | 6 | 48052 | pending | — | — |
| inv-rjm-172 | rjm | 4 | 49019 | pending | — | — |
| inv-rjm-173 | rjm | 2 | 47019 | pending | — | — |
| inv-rjm-174 | rjm | 2 | 45462 | pending | — | — |
| inv-rjm-175 | rjm | 3 | 46491 | pending | — | — |
| inv-rjm-176 | rjm | 8 | 44076 | pending | — | — |
| inv-rjm-177 | rjm | 4 | 33813 | pending | — | — |
| inv-rjm-178 | rjm | 6 | 47282 | pending | — | — |
| inv-rjm-179 | rjm | 6 | 43429 | pending | — | — |
| inv-rjm-180 | rjm | 2 | 25797 | pending | — | — |
| inv-rjm-181 | rjm | 1 | 46123 | pending | — | — |
| inv-rjm-182 | rjm | 5 | 40601 | pending | — | — |
| inv-rjm-183 | rjm | 1 | 70298 | pending | — | — |
| inv-rjm-184 | rjm | 3 | 26220 | pending | — | — |
| inv-rjm-185 | rjm | 5 | 41061 | pending | — | — |
| inv-rjm-186 | rjm | 4 | 33802 | pending | — | — |
| inv-rjm-187 | rjm | 1 | 59943 | pending | — | — |
| inv-rjm-188 | rjm | 1 | 53014 | pending | — | — |
| inv-rjm-189 | rjm | 3 | 45741 | pending | — | — |
| inv-rjm-190 | rjm | 4 | 45606 | pending | — | — |
| inv-rjm-191 | rjm | 4 | 44765 | pending | — | — |
| inv-rjm-192 | rjm | 4 | 43819 | pending | — | — |
| inv-rjm-193 | rjm | 4 | 42074 | pending | — | — |
| inv-rjm-194 | rjm | 2 | 41334 | pending | — | — |
| inv-rjm-195 | rjm | 3 | 44287 | pending | — | — |
| inv-rjm-196 | rjm | 3 | 31090 | pending | — | — |
| inv-rjm-197 | rjm | 2 | 35820 | pending | — | — |
| inv-rjm-198 | rjm | 2 | 39449 | pending | — | — |
| inv-rjm-199 | rjm | 1 | 62742 | pending | — | — |
| inv-rjm-200 | rjm | 5 | 48290 | pending | — | — |
| inv-rjm-201 | rjm | 1 | 71105 | pending | — | — |
| inv-rjm-202 | rjm | 3 | 30842 | pending | — | — |
| inv-rjm-203 | rjm | 2 | 37007 | pending | — | — |
| inv-rjm-204 | rjm | 4 | 47143 | pending | — | — |
| inv-rjm-205 | rjm | 5 | 38692 | pending | — | — |
| inv-rjm-206 | rjm | 3 | 44236 | pending | — | — |
| inv-rjm-207 | rjm | 6 | 38982 | pending | — | — |
| inv-rjm-208 | rjm | 1 | 338521 | pending | — | — |
| inv-rjm-209 | rjm | 1 | 37686 | pending | — | — |
| inv-rjm-210 | rjm | 8 | 45133 | pending | — | — |
| inv-rjm-211 | rjm | 3 | 43795 | pending | — | — |
| inv-rjm-212 | rjm | 3 | 37965 | pending | — | — |
| inv-rjm-213 | rjm | 1 | 57443 | pending | — | — |
| inv-rjm-214 | rjm | 3 | 48268 | pending | — | — |
| inv-rjm-215 | rjm | 5 | 18281 | pending | — | — |
| inv-rjm-216 | rjm | 1 | 62233 | pending | — | — |
| inv-rjm-217 | rjm | 5 | 49414 | pending | — | — |
| inv-rjm-218 | rjm | 3 | 44790 | pending | — | — |
| inv-rjm-219 | rjm | 2 | 48382 | pending | — | — |
| inv-rjm-220 | rjm | 6 | 49220 | pending | — | — |
| inv-rjm-221 | rjm | 6 | 47292 | pending | — | — |
| inv-rjm-222 | rjm | 4 | 44814 | pending | — | — |
| inv-rjm-223 | rjm | 8 | 49950 | pending | — | — |
| inv-rjm-224 | rjm | 6 | 41181 | pending | — | — |
| inv-rjm-225 | rjm | 2 | 43648 | pending | — | — |
| inv-rjm-226 | rjm | 2 | 25826 | pending | — | — |
| inv-rjm-227 | rjm | 3 | 47283 | pending | — | — |
| inv-rjm-228 | rjm | 6 | 49825 | pending | — | — |
| inv-rjm-229 | rjm | 2 | 15186 | pending | — | — |
| inv-rjm-230 | rjm | 1 | 43506 | pending | — | — |
| inv-rjm-231 | rjm | 6 | 41386 | pending | — | — |
| inv-rjm-232 | rjm | 1 | 28751 | pending | — | — |
| inv-rjm-233 | rjm | 2 | 31844 | pending | — | — |
| inv-rjm-234 | rjm | 1 | 43573 | pending | — | — |
| inv-rjm-235 | rjm | 2 | 40473 | pending | — | — |
| inv-rjm-236 | rjm | 4 | 35980 | pending | — | — |
| inv-rjm-237 | rjm | 1 | 14246 | pending | — | — |
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
| Manifest rows (addy / matt / rjm) | 217 / 167 / 950 |
| Rows inventoried (addy / matt / rjm) | 209 / 0 / 0 |
| Concept cards (addy / matt / rjm) | 0 / 0 / 0 |
| Concordance rows (by class: ALIGNED / SYNONYM / HOMONYM / PARTIAL / UNIQUE / CONFLICT) | 0 |
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
| coverage.ts | 011 | 1191 unchecked rows |
| glossary-lint.ts | 011 | clean |
| last-unit verification | 011 | clean (inv-addy-35 exists and is valid) |
| decision consistency (4V) | — | — |
| traceability | — | — |
