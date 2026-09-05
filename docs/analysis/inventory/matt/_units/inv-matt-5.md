---
unit: inv-matt-5
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-5

## Files assigned
- [x] sources/matt/docs/engineering/domain-modeling.md (10742 bytes, 87 lines)
- [x] sources/matt/docs/engineering/grill-with-docs.md (9922 bytes, 83 lines)
- [x] sources/matt/docs/engineering/implement.md (10259 bytes, 98 lines)
- [x] sources/matt/docs/engineering/improve-codebase-architecture.md (11814 bytes, 102 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-domain-modeling-md.md (4189 bytes)
- docs/analysis/inventory/matt/docs-engineering-grill-with-docs-md.md (4276 bytes)
- docs/analysis/inventory/matt/docs-engineering-implement-md.md (4395 bytes)
- docs/analysis/inventory/matt/docs-engineering-improve-codebase-architecture-md.md (5359 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-5.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/engineering/domain-modeling.md` establishes the active discipline of maintaining ubiquitous language during design, enforcing inline updates to `CONTEXT.md` and gating ADRs behind three criteria (hard to reverse, surprising without context, real trade-off). It clarifies that `CONTEXT.md` is strictly a glossary, not an implementation scratch pad.
- `docs/engineering/grill-with-docs.md` serves as the head of the main build flow (`grill-with-docs → to-spec → to-tickets → implement → code-review`), providing a stateful conversational interview that writes resolved terminology into `CONTEXT.md` and ADRs into `docs/adr/`.
- `docs/engineering/implement.md` executes decided specifications and tickets under an authoritative five-beat cadence, explicitly barring agents from second-guessing plans or redesigning architectures during implementation. It operates on a single-ticket-per-session model with context clearing.
- `docs/engineering/improve-codebase-architecture.md` provides periodic, non-destructive codebase surveys looking for deepening opportunities, outputting a standalone HTML report with categorized strength badges (`Strong`, `Worth exploring`, `Speculative`) before guiding candidate selection into the build flow.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,684 tokens (42,737 bytes across 4 files).
Approximate tokens of output written: ~4,506 tokens (18,027 bytes across 4 inventory cards).
