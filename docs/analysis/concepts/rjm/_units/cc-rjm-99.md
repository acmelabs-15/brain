---
unit: cc-rjm-99
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-99

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-external-claims/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-failure-archaeology/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-failure-archaeology/references/incidents.md
- [x] sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/check_canonical_citations.py
- [x] sources/rjm/templates/AGENTS.md
- [x] sources/rjm/templates/README.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-external-claims-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-failure-archaeology-references-incidents-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-failure-archaeology-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-doc-accuracy-scripts-doc-accuracy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-build-gates-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-canonical-citations-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-md.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md

## Outputs produced
- docs/analysis/concepts/rjm/file-conservative.md (1984 bytes)
- docs/analysis/concepts/rjm/reporting-without-acting.md (1870 bytes)
- docs/analysis/concepts/rjm/round-number-trust.md (1662 bytes)
- docs/analysis/concepts/rjm/summary-as-source.md (1577 bytes)
- docs/analysis/concepts/rjm/vendor-doc-as-runtime-truth.md (1710 bytes)
- docs/analysis/concepts/rjm/paraphrased-repo-cross-claim.md (1682 bytes)
- docs/analysis/concepts/rjm/naming-a-gate-you-did-not-walk.md (1679 bytes)
- docs/analysis/concepts/rjm/trusting-a-stake-holder-s-self-favorable-stat.md (1660 bytes)
- docs/analysis/concepts/rjm/customer-wedge.md (1874 bytes)
- docs/analysis/concepts/rjm/fail-open-shim.md (1800 bytes)
- docs/analysis/concepts/rjm/dual-format-shim.md (1738 bytes)
- docs/analysis/concepts/rjm/iteration-paradox.md (2454 bytes)
- docs/analysis/concepts/rjm/push-guard-framework.md (1664 bytes)
- docs/analysis/concepts/rjm/canonical-source-mirror-discipline.md (1803 bytes)
- docs/analysis/concepts/rjm/bot-batching-protocol.md (1674 bytes)
- docs/analysis/concepts/rjm/recursive-failure.md (1796 bytes)
- docs/analysis/concepts/rjm/trust-incident.md (1714 bytes)
- docs/analysis/concepts/rjm/drift-inversion.md (1685 bytes)
- docs/analysis/concepts/rjm/source-of-truth.md (2524 bytes)
- docs/analysis/concepts/rjm/silent-defaults.md (1994 bytes)
- docs/analysis/concepts/rjm/verdict-laundering.md (1716 bytes)
- docs/analysis/concepts/rjm/settled-battles.md (1926 bytes)
- docs/analysis/concepts/rjm/fossils-of-incidents.md (1673 bytes)
- docs/analysis/concepts/rjm/major-incidents-table.md (1703 bytes)
- docs/analysis/concepts/rjm/settled-battles-list.md (1864 bytes)
- docs/analysis/concepts/rjm/launcher-level-fail-open-wrapper.md (1807 bytes)
- docs/analysis/concepts/rjm/self-referential-tests.md (1792 bytes)
- docs/analysis/concepts/rjm/copilot-cli-plugin-root-env-contract.md (1950 bytes)
- docs/analysis/concepts/rjm/session-file-merge-conflicts.md (1777 bytes)
- docs/analysis/concepts/rjm/threshold-based-detectors.md (1815 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-99.md (5982 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (30 PASS, 0 FAIL)
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-99 --model "Gemini 3.8 Flash" --effort high, exit code 0 (30 cards stamped, 36 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-99 authored and stamped.
- Concepts span external claims verification and anti-patterns (`file-conservative`, `reporting-without-acting`, `round-number-trust`, `summary-as-source`, `vendor-doc-as-runtime-truth`, `paraphrased-repo-cross-claim`, `naming-a-gate-you-did-not-walk`, `trusting-a-stake-holder-s-self-favorable-stat`), failure archaeology, chronicled incidents, and architectural lessons (`customer-wedge`, `fail-open-shim`, `dual-format-shim`, `iteration-paradox`, `push-guard-framework`, `canonical-source-mirror-discipline`, `bot-batching-protocol`, `recursive-failure`, `trust-incident`, `drift-inversion`, `source-of-truth`, `silent-defaults`, `verdict-laundering`, `settled-battles`, `fossils-of-incidents`, `major-incidents-table`, `settled-battles-list`), and decided architectural rulings and operational constraints (`launcher-level-fail-open-wrapper`, `self-referential-tests`, `copilot-cli-plugin-root-env-contract`, `session-file-merge-conflicts`, `threshold-based-detectors`).
- All 30 cards pass byte-exact quotation verification via `quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 8 source files and 8 citing inventory cards; approximate tokens of output written: ~18,000 tokens across 30 concept cards and this unit report.
