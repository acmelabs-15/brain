---
unit: inv-matt-4
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-4

## Files assigned
- [x] sources/matt/docs/engineering/ask-matt.md
- [x] sources/matt/docs/engineering/code-review.md
- [x] sources/matt/docs/engineering/codebase-design.md
- [x] sources/matt/docs/engineering/diagnosing-bugs.md

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-ask-matt-md.md — 7419 bytes
- docs/analysis/inventory/matt/docs-engineering-code-review-md.md — 8147 bytes
- docs/analysis/inventory/matt/docs-engineering-codebase-design-md.md — 6916 bytes
- docs/analysis/inventory/matt/docs-engineering-diagnosing-bugs-md.md — 6498 bytes
- docs/analysis/inventory/matt/_units/inv-matt-4.md — unit report

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V findings remediation:
  - In `docs-engineering-code-review-md.md`: explicitly inventoried `build chain` (line 88), `fixed point` (lines 3, 20), and `three-dot` (line 76), and documented three-dot diff behavior measured from merge-base.
  - In `docs-engineering-codebase-design-md.md`: explicitly inventoried invocations `setup-ts-deep-modules` (line 52) and `grill-with-docs` (line 56), as well as named concepts `interface-design` (line 60), `connascence` (line 76), and `module secrets` (line 76).
- Cross-skill relationships and defects:
  - `docs/engineering/ask-matt.md`: router over the full skill ecosystem; details the 5-way decision tree at phase boundaries and highlights known bugs where `disable-model-invocation: true` hides skills from the agent.
  - `docs/engineering/code-review.md`: details the two-axis review architecture (Standards and Spec) and highlights critical bugs including naming collisions with Claude Code's built-in `/code-review` and runaway recursive delegation loops.
  - `docs/engineering/codebase-design.md`: defines scale-agnostic architectural vocabulary, deletion test, and two-adapter heuristic, while warning of runaway 100k+ token burning when agents treat reference material as an active refactoring loop.
  - `docs/engineering/diagnosing-bugs.md`: mandates tight empirical feedback loops before hypothesizing, noting undocumented overlap with `triage` and credential leakage risks.

## Blocked or uncertain
none

## Time and size
Source read: 44347 bytes (~10800 tokens).
Output written: 28980 bytes (~7100 tokens across 4 cards and 1 unit report).
