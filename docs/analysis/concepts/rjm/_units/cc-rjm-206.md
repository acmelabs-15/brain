---
unit: cc-rjm-206
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-206

## Files assigned
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md
- [x] sources/rjm/.claude/skills/slo-designer/SKILL.md
- [x] sources/rjm/.claude/skills/slo-designer/references/slo-design-patterns.md
- [x] sources/rjm/.claude/skills/slo-designer/templates/slo-config-template.yaml
- [x] sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] sources/rjm/docs/SKILL-AUTHORING.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md
- [x] docs/analysis/inventory/rjm/docs-skill-authoring-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-references-slo-design-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-templates-slo-config-template-yaml.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md

## Outputs produced
- docs/analysis/concepts/rjm/portable-script-invocations.md (1532 bytes)
- docs/analysis/concepts/rjm/model-context-doctrine.md (1054 bytes)
- docs/analysis/concepts/rjm/slo-design-patterns.md (1386 bytes)
- docs/analysis/concepts/rjm/google-sre-best-practices.md (1381 bytes)
- docs/analysis/concepts/rjm/pattern-selection-guide.md (1467 bytes)
- docs/analysis/concepts/rjm/service-type.md (924 bytes)
- docs/analysis/concepts/rjm/primary-slis.md (937 bytes)
- docs/analysis/concepts/rjm/typical-target.md (942 bytes)
- docs/analysis/concepts/rjm/error-budget.md (1696 bytes)
- docs/analysis/concepts/rjm/consumer-api.md (1369 bytes)
- docs/analysis/concepts/rjm/internal-api.md (1394 bytes)
- docs/analysis/concepts/rjm/data-pipeline.md (1408 bytes)
- docs/analysis/concepts/rjm/real-time-system.md (1354 bytes)
- docs/analysis/concepts/rjm/batch-processing.md (1348 bytes)
- docs/analysis/concepts/rjm/consumer-facing-api-pattern.md (1361 bytes)
- docs/analysis/concepts/rjm/latency-p99.md (1436 bytes)
- docs/analysis/concepts/rjm/latency-p50.md (1202 bytes)
- docs/analysis/concepts/rjm/internal-api-pattern.md (1353 bytes)
- docs/analysis/concepts/rjm/data-pipeline-pattern.md (1341 bytes)
- docs/analysis/concepts/rjm/freshness.md (1253 bytes)
- docs/analysis/concepts/rjm/real-time-system-pattern.md (1316 bytes)
- docs/analysis/concepts/rjm/dependency-chain-patterns.md (1449 bytes)
- docs/analysis/concepts/rjm/chain-reliability-calculation.md (1394 bytes)
- docs/analysis/concepts/rjm/circuit-breakers.md (1235 bytes)
- docs/analysis/concepts/rjm/fallbacks.md (1251 bytes)
- docs/analysis/concepts/rjm/retries-with-backoff.md (1254 bytes)
- docs/analysis/concepts/rjm/bulkheads.md (1414 bytes)
- docs/analysis/concepts/rjm/anti-patterns-to-avoid.md (1339 bytes)
- docs/analysis/concepts/rjm/error-budget-policy.md (1534 bytes)
- docs/analysis/concepts/rjm/burn-rate-reference.md (1293 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-206.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/portable-script-invocations.md docs/analysis/concepts/rjm/model-context-doctrine.md docs/analysis/concepts/rjm/slo-design-patterns.md docs/analysis/concepts/rjm/google-sre-best-practices.md docs/analysis/concepts/rjm/pattern-selection-guide.md docs/analysis/concepts/rjm/service-type.md docs/analysis/concepts/rjm/primary-slis.md docs/analysis/concepts/rjm/typical-target.md docs/analysis/concepts/rjm/error-budget.md docs/analysis/concepts/rjm/consumer-api.md docs/analysis/concepts/rjm/internal-api.md docs/analysis/concepts/rjm/data-pipeline.md docs/analysis/concepts/rjm/real-time-system.md docs/analysis/concepts/rjm/batch-processing.md docs/analysis/concepts/rjm/consumer-facing-api-pattern.md docs/analysis/concepts/rjm/latency-p99.md docs/analysis/concepts/rjm/latency-p50.md docs/analysis/concepts/rjm/internal-api-pattern.md docs/analysis/concepts/rjm/data-pipeline-pattern.md docs/analysis/concepts/rjm/freshness.md docs/analysis/concepts/rjm/real-time-system-pattern.md docs/analysis/concepts/rjm/dependency-chain-patterns.md docs/analysis/concepts/rjm/chain-reliability-calculation.md docs/analysis/concepts/rjm/circuit-breakers.md docs/analysis/concepts/rjm/fallbacks.md docs/analysis/concepts/rjm/retries-with-backoff.md docs/analysis/concepts/rjm/bulkheads.md docs/analysis/concepts/rjm/anti-patterns-to-avoid.md docs/analysis/concepts/rjm/error-budget-policy.md docs/analysis/concepts/rjm/burn-rate-reference.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-206 authors 30 concept cards:
  1. Cross-platform execution portability doctrine (`portable-script-invocations`) and context optimization doctrine file reference (`model-context-doctrine`) from `docs/SKILL-AUTHORING.md` and `slashcommandcreator/SKILL.md`.
  2. SLO architectural patterns (`slo-design-patterns`, `google-sre-best-practices`, `pattern-selection-guide`, `consumer-api`, `internal-api`, `data-pipeline`, `real-time-system`, `batch-processing`, `consumer-facing-api-pattern`, `internal-api-pattern`, `data-pipeline-pattern`, `real-time-system-pattern`) from `slo-design-patterns.md`.
  3. Metric definitions and target thresholds (`latency-p99`, `latency-p50`, `freshness`, `error-budget`, `error-budget-policy`, `burn-rate-reference`).
  4. Dependency chain resilience patterns and compounding reliability (`dependency-chain-patterns`, `chain-reliability-calculation`, `circuit-breakers`, `fallbacks`, `retries-with-backoff`, `bulkheads`) across `slo-design-patterns.md` and `release-it.md`.
  5. Reliability design anti-patterns (`anti-patterns-to-avoid`).
- Non-lifecycle concepts representing reference paths and table column headers (`model-context-doctrine`, `service-type`, `primary-slis`, `typical-target`) were authored with `kind: name-only` per D-023.
- All 36 occurrences recorded in `facts/cc-rjm-206.txt` are faithfully mapped in the Where used tables.
- Defect classifications from inventory entries (`orphan`, `missing-path`, `doc-drift`, `cross-file-contradiction`, `internal-contradiction`, `exit-code-mismatch`) were propagated into `Implementation status`.
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` with zero FAILs and zero MISSING sources.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 authored concept cards and 1 work-unit report.
