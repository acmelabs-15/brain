---
unit: inv-matt-13
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-13

## Files assigned
- [x] sources/matt-external/diagnosing-bugs.md (358695 bytes, 79 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-diagnosing-bugs-md.md (4497 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-13.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Defines a strict six-phase diagnosis protocol governed by prerequisite gates: Phase 1 (tight repro command), Phase 2 (minimisation), Phase 3 (3–5 ranked hypotheses), Phase 4 (tagged instrumentation), Phase 5 (regression test and fix), and Done (verification and debug probe cleanup).
- References `scripts/hitl-loop.template.sh` as the human-in-the-loop fallback when automated repro loops cannot be built.
- Connects directly to `improve-codebase-architecture` when bugs cannot be tested due to absent or shallow seams.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~72,500 tokens (358,695 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,100 tokens (4,497 bytes inventory card + unit report).
