---
unit: cc-addy-35
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-35

## Files assigned
- [x] sources/addy/skills/constraint-driven-development/references/floor-guard.md
- [x] sources/addy/skills/constraint-driven-development/SKILL.md
- [x] sources/addy/skills/context-engineering/SKILL.md
- [x] docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md
- [x] docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md
- [x] docs/analysis/inventory/addy/skills-context-engineering-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/new-exception.md (1381 bytes)
- docs/analysis/concepts/addy/assertion-removed.md (1377 bytes)
- docs/analysis/concepts/addy/threshold-lowered.md (1402 bytes)
- docs/analysis/concepts/addy/constraintsignore.md (1491 bytes)
- docs/analysis/concepts/addy/escalation-path.md (1480 bytes)
- docs/analysis/concepts/addy/good-enough-to-ship.md (1373 bytes)
- docs/analysis/concepts/addy/quality-gates.md (1319 bytes)
- docs/analysis/concepts/addy/ratchets.md (1464 bytes)
- docs/analysis/concepts/addy/enforced-with-numbers.md (1538 bytes)
- docs/analysis/concepts/addy/measured-not-yet-enforced.md (1433 bytes)
- docs/analysis/concepts/addy/floor-guard-md.md (865 bytes)
- docs/analysis/concepts/addy/external.md (1414 bytes)
- docs/analysis/concepts/addy/project.md (1283 bytes)
- docs/analysis/concepts/addy/suite.md (1266 bytes)
- docs/analysis/concepts/addy/sane-defaults.md (1327 bytes)
- docs/analysis/concepts/addy/written-only.md (1365 bytes)
- docs/analysis/concepts/addy/scripted.md (1447 bytes)
- docs/analysis/concepts/addy/tool-backed.md (1489 bytes)
- docs/analysis/concepts/addy/the-context-hierarchy.md (1473 bytes)
- docs/analysis/concepts/addy/spec-architecture-docs.md (1360 bytes)
- docs/analysis/concepts/addy/relevant-source-files.md (1340 bytes)
- docs/analysis/concepts/addy/error-output-test-results.md (1345 bytes)
- docs/analysis/concepts/addy/conversation-history.md (1405 bytes)
- docs/analysis/concepts/addy/github-copilot-instructions-md.md (849 bytes)
- docs/analysis/concepts/addy/trust-levels.md (1598 bytes)
- docs/analysis/concepts/addy/trusted.md (1184 bytes)
- docs/analysis/concepts/addy/verify-before-acting-on.md (1272 bytes)
- docs/analysis/concepts/addy/untrusted.md (1281 bytes)
- docs/analysis/concepts/addy/the-brain-dump.md (1307 bytes)
- docs/analysis/concepts/addy/the-selective-include.md (1282 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-35.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md (exit code 0, 37 PASS, 0 FAIL)
- bun scripts/synthesis/concept-index.ts (exit code 0, regenerated index)
- bun scripts/synthesis/coverage.ts (exit code 0 on addy concepts, 0 orphan cards, 0 empty required)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Units for `floor-guard` and `constraint-driven-development` span units cc-addy-1, cc-addy-34, and cc-addy-35. In unit cc-addy-35, specific diff-level floor checks (`new-exception`, `assertion-removed`, `threshold-lowered`) and `.constraintsignore` are documented as sub-concepts of `floor` and `floor-guard`.
- Concepts `floor-guard.md` and `.github/copilot-instructions.md` represent document filenames/links and tool-specific configuration paths; they are categorized as `kind: name-only` per D-023.
- In `context-engineering`, the five tiers of `The Context Hierarchy` and the three levels of `Trust levels` form coordinated structural frameworks linking to individual tier cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,500 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~10,500 tokens across 30 concept cards and this unit report.
