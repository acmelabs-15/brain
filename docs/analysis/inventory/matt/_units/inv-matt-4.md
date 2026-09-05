---
unit: inv-matt-4
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-4

## Files assigned
- [x] sources/matt/docs/engineering/ask-matt.md (10723 bytes, 91 lines)
- [x] sources/matt/docs/engineering/code-review.md (10553 bytes, 95 lines)
- [x] sources/matt/docs/engineering/codebase-design.md (12370 bytes, 89 lines)
- [x] sources/matt/docs/engineering/diagnosing-bugs.md (10701 bytes, 94 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-ask-matt-md.md (5244 bytes)
- docs/analysis/inventory/matt/docs-engineering-code-review-md.md (4608 bytes)
- docs/analysis/inventory/matt/docs-engineering-codebase-design-md.md (4564 bytes)
- docs/analysis/inventory/matt/docs-engineering-diagnosing-bugs-md.md (3939 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-4.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/engineering/ask-matt.md` serves as the router across the entire skill collection, establishing four distinct routing categories: the main build flow, on-ramps, standalones, and the underlying vocabulary layer. It defines explicit decision criteria for context handling at phase boundaries: Continue > `/clear` > `handoff` > Subagent > `/compact`.
- `docs/engineering/code-review.md` introduces an unmerged, dual-axis review pattern (Standards vs. Spec) run across isolated parallel subagents. It catalogues twelve Martin Fowler code smells as heuristics for the Standards baseline.
- `docs/engineering/codebase-design.md` defines an authoritative, scale-agnostic architectural vocabulary (module, interface, depth, seam, adapter, leverage, locality) alongside four design principles (including the deletion test, the interface as test surface, and the two-adapter rule for seams). It notes that supporting file `DESIGN-IT-TWICE.md` hardcodes Claude Code's `Agent` tool.
- `docs/engineering/diagnosing-bugs.md` defines a gated six-phase debugging discipline that strictly forbids hypothesis generation or code editing until a deterministic reproduction command goes red on the bug. It incorporates a 10-tier ladder of reproduction mechanisms and mandates tagged debug logs (`[DEBUG-a4f2]`) for clean grep removal.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,087 tokens (44,347 bytes across 4 files).
Approximate tokens of output written: ~4,541 tokens (18,163 bytes across 4 inventory cards).
