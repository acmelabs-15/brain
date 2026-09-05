---
unit: inv-matt-11
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-11

## Files assigned
- [x] sources/matt-external/code-review.md (359558 bytes, 76 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-code-review-md.md (5085 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-11.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Defines a dual-axis review architecture split between `Standards` ("is it built right?") and `Spec` ("is it the right thing?"), evaluated in separate sub-agents with no blended verdict.
- Establishes the 12 Fowler smells as a baseline floor for repository standards when no explicit repo style documents exist.
- Documents known issues including naming collision with Claude Code's native `/code-review` and recursive subagent invocation fanouts.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~73,000 tokens (359,558 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,200 tokens (5,085 bytes inventory card + unit report).
