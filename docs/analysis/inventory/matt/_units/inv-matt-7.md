---
unit: inv-matt-7
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-7

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/to-spec.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/to-tickets.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/triage.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/wayfinder.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-engineering-to-spec-md.md` (5742 bytes)
- `docs/analysis/inventory/matt/docs-engineering-to-tickets-md.md` (7191 bytes)
- `docs/analysis/inventory/matt/docs-engineering-triage-md.md` (6803 bytes)
- `docs/analysis/inventory/matt/docs-engineering-wayfinder-md.md` (7003 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-7 analyzes 4 major planning, specification, decomposition, and triage documentation files in `sources/matt/docs/engineering/`:
  - `to-spec.md`: Documents the transition from interactive conversation/grilling to an immutable specification issue on an issue tracker. Establishes the rule of negotiating test seams before drafting prose, restricting the number of seams (ideally one). Codifies specs as ephemeral snapshots designed strictly to survive context window limits, with durable knowledge residing only in `CONTEXT.md` and ADRs. Renamed from `to-prd` in v1.1.
  - `to-tickets.md`: Governs the decomposition of specs or plans into vertically sliced, demonstrable tracer-bullet tickets with explicit blocking edges. Formulates the frontier mechanism where unblocked tickets can be tackled independently. Formulates the expand-migrate-contract exception for wide refactors with sweeping blast radiuses.
  - `triage.md`: Specifies the parallel inbound on-ramp for external issues and PRs (distinct from author-originated work). Enforces a 2-role state machine (categories: `bug`, `enhancement`; states: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Pre-verifies bugs by reproduction and PRs by test runs before generating durable agent briefs naming behavioral contracts. Maintains `.out-of-scope/` design concept files for rejected enhancements to prevent cyclic debate.
  - `wayfinder.md`: Details the situational on-ramp for multi-session, foggy projects where the destination is known but the route is not. Employs a single map index issue and child decision tickets across four types (`grilling`, `prototype`, `research`, `task`). Enforces the "plans, does not do" principle, keeping code implementation strictly downstream. Collapses resolved decisions into a spec via `to-spec` upon map completion. Renamed from `decision-mapping` in v1.1.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (0 duplicates, no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,600 tokens (48,630 bytes across 4 files); approximate tokens of output written: ~7,200 tokens (29,970 bytes across 4 inventory cards and 1 work unit report).
