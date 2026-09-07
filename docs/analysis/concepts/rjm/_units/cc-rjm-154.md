---
unit: cc-rjm-154
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-154

## Files assigned
- [x] sources/rjm/.claude/skills/observability/SKILL.md
- [x] sources/rjm/.claude/skills/observability/references/otel-migration-reference.md
- [x] sources/rjm/.claude/skills/observability/references/otel-semantic-conventions.md
- [x] sources/rjm/.claude/skills/observability/references/prometheus-recording-rules.md
- [x] sources/rjm/.claude/skills/observability/references/three-pillars-reference.md

## Outputs produced
- docs/analysis/concepts/rjm/otel-semantic-conventions-v1-39.md (1187 bytes)
- docs/analysis/concepts/rjm/updowncounter.md (1119 bytes)
- docs/analysis/concepts/rjm/observablegauge.md (1130 bytes)
- docs/analysis/concepts/rjm/w3c-trace-context.md (1350 bytes)
- docs/analysis/concepts/rjm/head-based-sampling.md (1183 bytes)
- docs/analysis/concepts/rjm/tail-based.md (1147 bytes)
- docs/analysis/concepts/rjm/k8sattributesprocessor.md (1242 bytes)
- docs/analysis/concepts/rjm/resourcedetection.md (1222 bytes)
- docs/analysis/concepts/rjm/dimensionality-regression-risk.md (1169 bytes)
- docs/analysis/concepts/rjm/otel-collector.md (1247 bytes)
- docs/analysis/concepts/rjm/three-pillars-reference-md.md (1204 bytes)
- docs/analysis/concepts/rjm/vendor-neutral-observability.md (1169 bytes)
- docs/analysis/concepts/rjm/resource.md (1135 bytes)
- docs/analysis/concepts/rjm/attribute-namespaces.md (1123 bytes)
- docs/analysis/concepts/rjm/http.md (1106 bytes)
- docs/analysis/concepts/rjm/db.md (1093 bytes)
- docs/analysis/concepts/rjm/k8s.md (1090 bytes)
- docs/analysis/concepts/rjm/stable-versus-experimental.md (1159 bytes)
- docs/analysis/concepts/rjm/interop-contract.md (1158 bytes)
- docs/analysis/concepts/rjm/recording-rule.md (1153 bytes)
- docs/analysis/concepts/rjm/promql.md (1144 bytes)
- docs/analysis/concepts/rjm/instance-type.md (1107 bytes)
- docs/analysis/concepts/rjm/cpu-arch.md (1080 bytes)
- docs/analysis/concepts/rjm/container-cpu-throttle-ratio.md (1170 bytes)
- docs/analysis/concepts/rjm/node-disk-read-latency-seconds.md (1182 bytes)
- docs/analysis/concepts/rjm/node-disk-write-latency-seconds.md (1188 bytes)
- docs/analysis/concepts/rjm/node-load-average-scaled.md (1146 bytes)
- docs/analysis/concepts/rjm/pressure-stall-psi.md (1120 bytes)
- docs/analysis/concepts/rjm/node-cpu-stall-rate.md (1116 bytes)
- docs/analysis/concepts/rjm/node-memory-stall-rate.md (1134 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-154.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-154 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-154 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-154.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
