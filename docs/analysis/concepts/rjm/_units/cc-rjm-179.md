---
unit: cc-rjm-179
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-179

## Files assigned
- [x] sources/rjm/.claude/skills/quality-grades/SKILL.md
- [x] sources/rjm/.claude/skills/quality-grades/scripts/grade_domains.py
- [x] sources/rjm/.claude/skills/reflect/references/decision-tree-and-examples.md
- [x] sources/rjm/.claude/skills/reflect/references/integration-and-design.md
- [x] sources/rjm/.claude/skills/reflect/references/phase2-signal-detection.md
- [x] sources/rjm/scripts/eval/examples/example-overlap-pairs.json
- [x] sources/rjm/scripts/eval/examples/overlap-pairs-issue-1949.json
- [x] docs/analysis/inventory/rjm/claude-skills-quality-grades-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-quality-grades-scripts-grade-domains-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-reflect-references-decision-tree-and-examples-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-reflect-references-integration-and-design-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-reflect-references-phase2-signal-detection-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-overlap-pairs-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-overlap-pairs-issue-1949-json.md

## Outputs produced
- docs/analysis/concepts/rjm/domaingrade.md (890 bytes)
- docs/analysis/concepts/rjm/score-to-grade.md (898 bytes)
- docs/analysis/concepts/rjm/detect-domains.md (1541 bytes)
- docs/analysis/concepts/rjm/compute-trend.md (961 bytes)
- docs/analysis/concepts/rjm/load-previous-grades.md (959 bytes)
- docs/analysis/concepts/rjm/grade-layers.md (1434 bytes)
- docs/analysis/concepts/rjm/grading-criteria.md (1212 bytes)
- docs/analysis/concepts/rjm/gap-severity.md (1203 bytes)
- docs/analysis/concepts/rjm/trend-tracking.md (1226 bytes)
- docs/analysis/concepts/rjm/git-fallback.md (1223 bytes)
- docs/analysis/concepts/rjm/insufficient-evidence.md (1371 bytes)
- docs/analysis/concepts/rjm/correction-detected.md (1276 bytes)
- docs/analysis/concepts/rjm/success-pattern.md (1241 bytes)
- docs/analysis/concepts/rjm/edge-case-discovery.md (1256 bytes)
- docs/analysis/concepts/rjm/code-review-skills.md (1185 bytes)
- docs/analysis/concepts/rjm/api-design-skills.md (1216 bytes)
- docs/analysis/concepts/rjm/testing-skills.md (1213 bytes)
- docs/analysis/concepts/rjm/documentation-skills.md (1224 bytes)
- docs/analysis/concepts/rjm/memory-skill.md (1140 bytes)
- docs/analysis/concepts/rjm/sidecar-naming.md (1207 bytes)
- docs/analysis/concepts/rjm/single-canonical-store.md (1312 bytes)
- docs/analysis/concepts/rjm/curating-memories.md (1521 bytes)
- docs/analysis/concepts/rjm/durable-continuity-integration.md (1347 bytes)
- docs/analysis/concepts/rjm/commit-convention.md (1229 bytes)
- docs/analysis/concepts/rjm/learning-signals.md (1332 bytes)
- docs/analysis/concepts/rjm/high-confidence-corrections.md (1183 bytes)
- docs/analysis/concepts/rjm/medium-confidence-success-patterns.md (1243 bytes)
- docs/analysis/concepts/rjm/medium-confidence-edge-cases.md (1226 bytes)
- docs/analysis/concepts/rjm/low-confidence-preferences.md (1232 bytes)
- docs/analysis/concepts/rjm/confidence-threshold.md (1218 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-179.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/domaingrade.md docs/analysis/concepts/rjm/score-to-grade.md docs/analysis/concepts/rjm/detect-domains.md docs/analysis/concepts/rjm/compute-trend.md docs/analysis/concepts/rjm/load-previous-grades.md docs/analysis/concepts/rjm/grade-layers.md docs/analysis/concepts/rjm/grading-criteria.md docs/analysis/concepts/rjm/gap-severity.md docs/analysis/concepts/rjm/trend-tracking.md docs/analysis/concepts/rjm/git-fallback.md docs/analysis/concepts/rjm/insufficient-evidence.md docs/analysis/concepts/rjm/correction-detected.md docs/analysis/concepts/rjm/success-pattern.md docs/analysis/concepts/rjm/edge-case-discovery.md docs/analysis/concepts/rjm/code-review-skills.md docs/analysis/concepts/rjm/api-design-skills.md docs/analysis/concepts/rjm/testing-skills.md docs/analysis/concepts/rjm/documentation-skills.md docs/analysis/concepts/rjm/memory-skill.md docs/analysis/concepts/rjm/sidecar-naming.md docs/analysis/concepts/rjm/single-canonical-store.md docs/analysis/concepts/rjm/curating-memories.md docs/analysis/concepts/rjm/durable-continuity-integration.md docs/analysis/concepts/rjm/commit-convention.md docs/analysis/concepts/rjm/learning-signals.md docs/analysis/concepts/rjm/high-confidence-corrections.md docs/analysis/concepts/rjm/medium-confidence-success-patterns.md docs/analysis/concepts/rjm/medium-confidence-edge-cases.md docs/analysis/concepts/rjm/low-confidence-preferences.md docs/analysis/concepts/rjm/confidence-threshold.md` (exit code 0; 31 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-179 authors 30 concept cards across quality grading (`quality-grades` skill and `grade_domains.py` script) and conversational reflection (`reflect` skill references and evaluation fixtures):
  1. Quality grading concepts (`domaingrade`, `score-to-grade`, `detect-domains`, `compute-trend`, `load-previous-grades`, `grade-layers`, `grading-criteria`, `gap-severity`, `trend-tracking`).
  2. Reflection decision tree, examples, and use cases (`git-fallback`, `insufficient-evidence`, `correction-detected`, `success-pattern`, `edge-case-discovery`, `code-review-skills`, `api-design-skills`, `testing-skills`, `documentation-skills`).
  3. Reflection integration and architectural design contracts (`memory-skill`, `sidecar-naming`, `single-canonical-store`, `curating-memories`, `durable-continuity-integration`, `commit-convention`).
  4. Conversational signal detection and threshold evaluation rules (`learning-signals`, `high-confidence-corrections`, `medium-confidence-success-patterns`, `medium-confidence-edge-cases`, `low-confidence-preferences`, `confidence-threshold`).
- Excluded memory skills (`memory-skill`, `curating-memories`) are explicitly authored with `implementation_in_scope: false` per METHOD §1.2.
- Python identifiers (`domaingrade`, `score-to-grade`, `compute-trend`, `load-previous-grades`) are marked `kind: name-only` per D-023.
- All 33 occurrence rows across the 30 concepts in `facts/cc-rjm-179.txt` are captured in the respective "Where used" tables.
- All cards verified byte-exactly against the sources with `quote-check.ts` resulting in 31 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
