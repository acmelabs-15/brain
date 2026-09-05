---
unit: inv-matt-7
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-7

## Files assigned
- [x] sources/matt/docs/engineering/to-spec.md (8790 bytes, 82 lines)
- [x] sources/matt/docs/engineering/to-tickets.md (10724 bytes, 100 lines)
- [x] sources/matt/docs/engineering/triage.md (13140 bytes, 100 lines)
- [x] sources/matt/docs/engineering/wayfinder.md (15976 bytes, 104 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-to-spec-md.md (4558 bytes)
- docs/analysis/inventory/matt/docs-engineering-to-tickets-md.md (5754 bytes)
- docs/analysis/inventory/matt/docs-engineering-triage-md.md (5021 bytes)
- docs/analysis/inventory/matt/docs-engineering-wayfinder-md.md (5794 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-7.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/engineering/to-spec.md`: Step in the main engineering chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`), synthesizing grilling discussions and codebase context into a single tracker issue. Pre-agrees testing seams with the human prior to drafting prose, feeding those seams into downstream `tdd` and `code-review`.
- `docs/engineering/to-tickets.md`: Decomposes specs into tracer bullets (vertical slices spanning schema, API, UI, and tests) with native blocking edges, strictly forbidding horizontal slicing by architectural layer. Models wide, high-blast-radius refactors as expand-migrate-contract ticket sequences.
- `docs/engineering/triage.md`: Parallel inbound on-ramp for external third-party issues and pull requests, moving each item through a two-dimensional state machine (one category: bug/enhancement; one state: needs-triage/needs-info/ready-for-agent/ready-for-human/wontfix). Requires concrete bug reproduction and branch checkout before generating durable agent briefs; documents permanent rejections in `.out-of-scope/`.
- `docs/engineering/wayfinder.md`: Situational planning on-ramp for efforts exceeding a single context window, charting work as an index map issue with typed child decision tickets (`grilling`, `prototype`, `research`, `task`). Enforces a strict "plan, don't do" separation, burning down research tickets in parallel while working grilling and prototyping interactively, and hands off cleared maps to `to-spec`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~12,200 tokens (48,630 bytes across 4 files).
Approximate output tokens: ~5,500 tokens (22,000 bytes across 4 cards and unit report).
