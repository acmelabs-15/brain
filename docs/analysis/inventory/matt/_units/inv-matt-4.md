---
unit: inv-matt-4
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-4

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/ask-matt.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/code-review.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/codebase-design.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/diagnosing-bugs.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-engineering-ask-matt-md.md` (7046 bytes)
- `docs/analysis/inventory/matt/docs-engineering-code-review-md.md` (6811 bytes)
- `docs/analysis/inventory/matt/docs-engineering-codebase-design-md.md` (5738 bytes)
- `docs/analysis/inventory/matt/docs-engineering-diagnosing-bugs-md.md` (5649 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-4 covers four core engineering documentation files that define the structural topology and verification gates of the `mattpocock/skills` package:
  1. `ask-matt.md` establishes the four-part routing taxonomy (main flow, on-ramps, standalones, vocabulary layer) and the decision tree for context lifecycle at phase boundaries (`continue`, `/clear`, `/handoff`, `subagent`, `/compact`). It also documents harness issues where skills flagged with `disable-model-invocation: true` disappear from model context listings.
  2. `code-review.md` defines the two-axis review architecture (Standards vs. Spec), isolating both in separate subagents to prevent mutual masking of defects. Key documented defects include recursive agent spawning due to lack of delegation restrictions, shadowing Claude Code's built-in `/code-review`, and blindness to uncommitted changes caused by three-dot diffing.
  3. `codebase-design.md` acts as the shared vocabulary reference (module, interface, depth, seam, adapter, leverage, locality) and establishes four principles (depth at interface, deletion test, interface as test surface, two adapters for a seam). Documents risks of unbounded agent redesign runs when invoked without a driver skill.
  4. `diagnosing-bugs.md` enforces a six-phase gated diagnostic pipeline where formulating hypotheses is prohibited until an automated, deterministic "tight feedback loop" produces red output. Also notes secret leakage risks and overlap with `/triage`.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (44,347 bytes across 4 files); approximate tokens of output written: ~6,200 tokens (25,244 bytes across 4 inventory cards).
