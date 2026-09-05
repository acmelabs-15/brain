---
unit: inv-matt-8
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-8

## Files assigned
- [x] sources/matt/docs/engineering/wizard.md (9877 bytes, 99 lines)
- [x] sources/matt/docs/productivity/grill-me.md (6489 bytes, 77 lines)
- [x] sources/matt/docs/productivity/grilling.md (10413 bytes, 88 lines)
- [x] sources/matt/docs/productivity/handoff.md (8746 bytes, 77 lines)
- [x] sources/matt/docs/productivity/teach.md (13260 bytes, 98 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-wizard-md.md (4711 bytes)
- docs/analysis/inventory/matt/docs-productivity-grill-me-md.md (4166 bytes)
- docs/analysis/inventory/matt/docs-productivity-grilling-md.md (4870 bytes)
- docs/analysis/inventory/matt/docs-productivity-handoff-md.md (4059 bytes)
- docs/analysis/inventory/matt/docs-productivity-teach-md.md (4935 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-8.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `wizard.md` sits at the human-automation boundary: the LLM generates bash scripts while the user executes them, preventing secret leakage into chat context.
- `grilling.md` is the central interview primitive of the entire repository. It models inquiry as a design tree and partitions questions into batched frontier rounds with recommendations (`➡️`), delegating facts to sub-agents and reserving decisions for the user behind a mandatory confirmation gate.
- `grill-me.md` is the stateless, unopinionated user-invoked wrapper around `grilling` that runs anywhere without touching the filesystem.
- `handoff.md` provides conversational portability to OS temporary files, primarily powering parallel session branching (such as forking an exploratory prototype to avoid burning the primary design context).
- `teach.md` builds an isolated, stateful teaching workspace that uses external primary sources (`RESOURCES.md`) rather than untrusted parametric knowledge, prioritizing retention over fluency.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~12,200 tokens (48,785 bytes across 5 files).
Approximate output tokens: ~5,700 tokens (22,741 bytes across 5 inventory cards and unit report).
