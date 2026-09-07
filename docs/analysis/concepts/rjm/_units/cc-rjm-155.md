---
unit: cc-rjm-155
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-155

## Files assigned
- [x] sources/rjm/.claude/skills/observability/SKILL.md
- [x] sources/rjm/.claude/skills/observability/references/prometheus-recording-rules.md
- [x] sources/rjm/.claude/skills/observability/references/three-pillars-reference.md
- [x] sources/rjm/.claude/skills/observability/schema.json
- [x] sources/rjm/.claude/skills/observability/scripts/query_logs.py
- [x] sources/rjm/scripts/validation/instruction_budget.py
- [x] sources/rjm/scripts/validation/passive_context_budget.py

## Outputs produced
- docs/analysis/concepts/rjm/node-io-stall-rate.md (1110 bytes)
- docs/analysis/concepts/rjm/node-tcp-retransmissions-scaled.md (1188 bytes)
- docs/analysis/concepts/rjm/range-vector-window.md (1118 bytes)
- docs/analysis/concepts/rjm/scrape-interval.md (1136 bytes)
- docs/analysis/concepts/rjm/onboarding-checklist.md (1117 bytes)
- docs/analysis/concepts/rjm/pillar-1-logs.md (1069 bytes)
- docs/analysis/concepts/rjm/pillar-2-metrics.md (1087 bytes)
- docs/analysis/concepts/rjm/pillar-3-traces.md (1081 bytes)
- docs/analysis/concepts/rjm/correlation-matrix.md (1094 bytes)
- docs/analysis/concepts/rjm/opentelemetry-unification.md (1136 bytes)
- docs/analysis/concepts/rjm/slo-sli-sla.md (1111 bytes)
- docs/analysis/concepts/rjm/agent-observability-event.md (1064 bytes)
- docs/analysis/concepts/rjm/timestamp.md (961 bytes)
- docs/analysis/concepts/rjm/event-type.md (967 bytes)
- docs/analysis/concepts/rjm/tool-call.md (1107 bytes)
- docs/analysis/concepts/rjm/metric.md (1086 bytes)
- docs/analysis/concepts/rjm/session-id.md (967 bytes)
- docs/analysis/concepts/rjm/trace-id.md (955 bytes)
- docs/analysis/concepts/rjm/level.md (937 bytes)
- docs/analysis/concepts/rjm/duration-ms.md (973 bytes)
- docs/analysis/concepts/rjm/additionalproperties.md (1033 bytes)
- docs/analysis/concepts/rjm/agent-observability-log-query-utility.md (1171 bytes)
- docs/analysis/concepts/rjm/parse-event.md (1059 bytes)
- docs/analysis/concepts/rjm/load-events.md (1041 bytes)
- docs/analysis/concepts/rjm/filter-events.md (1027 bytes)
- docs/analysis/concepts/rjm/summarize-session.md (1079 bytes)
- docs/analysis/concepts/rjm/summarize-tools.md (1069 bytes)
- docs/analysis/concepts/rjm/format-table.md (1327 bytes)
- docs/analysis/concepts/rjm/argparse.md (1028 bytes)
- docs/analysis/concepts/rjm/jsondecodeerror.md (887 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-155.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-155 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-155 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-155.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
