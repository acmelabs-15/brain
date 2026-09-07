---
unit: cc-rjm-152
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-152

## Files assigned
- [x] sources/rjm/.claude/skills/metrics/SKILL.md
- [x] sources/rjm/.claude/skills/metrics/collect_metrics.py
- [x] sources/rjm/.claude/skills/negotiation/SKILL.md
- [x] sources/rjm/.claude/skills/negotiation/references/skills.md

## Outputs produced
- docs/analysis/concepts/rjm/agent-metrics-collection-utility.md (1238 bytes)
- docs/analysis/concepts/rjm/agent-patterns.md (815 bytes)
- docs/analysis/concepts/rjm/infrastructure-patterns.md (869 bytes)
- docs/analysis/concepts/rjm/commit-type-patterns.md (851 bytes)
- docs/analysis/concepts/rjm/metric-1-invocation-rate.md (1187 bytes)
- docs/analysis/concepts/rjm/metric-2-coverage.md (1020 bytes)
- docs/analysis/concepts/rjm/metric-4-infrastructure-review.md (1229 bytes)
- docs/analysis/concepts/rjm/metric-5-distribution.md (1046 bytes)
- docs/analysis/concepts/rjm/metric-2-agent-coverage.md (1072 bytes)
- docs/analysis/concepts/rjm/metric-5-usage-distribution.md (1105 bytes)
- docs/analysis/concepts/rjm/sonnet-tier.md (1191 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-001-always-quantify-the-value-gap.md (1224 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-002-radar-protocol-sequence.md (1190 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-003-pcp-framing-before-anchoring.md (1220 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-004-time-control.md (1124 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-005-bundle-never-trade-one-dimension.md (1249 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-006-model-tier-routing-for-negotiation-tasks.md (1292 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-007-written-communication-signals.md (1228 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-008-anchor-first-only-with-information-advantage.md (1318 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-009-batna-discipline-pre-commit-the-walkaway.md (1299 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-010-close-with-specificity-reduce-buyer-remorse.md (1317 bytes)
- docs/analysis/concepts/rjm/time-control.md (1010 bytes)
- docs/analysis/concepts/rjm/batna-worksheet.md (1037 bytes)
- docs/analysis/concepts/rjm/anthropic-project-deal.md (1642 bytes)
- docs/analysis/concepts/rjm/phase-1-read.md (968 bytes)
- docs/analysis/concepts/rjm/phase-2-analyze.md (986 bytes)
- docs/analysis/concepts/rjm/phase-3-design.md (980 bytes)
- docs/analysis/concepts/rjm/phase-4-assess.md (980 bytes)
- docs/analysis/concepts/rjm/phase-5-review.md (980 bytes)
- docs/analysis/concepts/rjm/skill-negotiation-001.md (1053 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-152.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-152 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-152 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-152.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
