---
unit: cc-rjm-176
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-176

## Files assigned
- [x] sources/rjm/.claude/skills/prompt-engineer/SKILL.md
- [x] sources/rjm/.claude/skills/prose-self-check/SKILL.md
- [x] sources/rjm/.claude/skills/prose-self-check/scripts/burstiness.py
- [x] sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-burstiness-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-prose-lint-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-skill-md.md

## Outputs produced
- docs/analysis/concepts/rjm/behavioral-clarity.md (1346 bytes)
- docs/analysis/concepts/rjm/appropriate-scope.md (1385 bytes)
- docs/analysis/concepts/rjm/grounded-changes.md (1399 bytes)
- docs/analysis/concepts/rjm/visual-card-template.md (1353 bytes)
- docs/analysis/concepts/rjm/simple-prompts.md (1211 bytes)
- docs/analysis/concepts/rjm/complex-prompts.md (1310 bytes)
- docs/analysis/concepts/rjm/core-quality-principles.md (943 bytes)
- docs/analysis/concepts/rjm/visual-card-format.md (1308 bytes)
- docs/analysis/concepts/rjm/trigger-condition.md (1325 bytes)
- docs/analysis/concepts/rjm/stacking-compatibility.md (1313 bytes)
- docs/analysis/concepts/rjm/emphasis-markers.md (1226 bytes)
- docs/analysis/concepts/rjm/burstiness.md (1262 bytes)
- docs/analysis/concepts/rjm/concreteness.md (1220 bytes)
- docs/analysis/concepts/rjm/flat-rhythm-cv-threshold.md (979 bytes)
- docs/analysis/concepts/rjm/min-sentences-for-rhythm.md (958 bytes)
- docs/analysis/concepts/rjm/prosestats.md (905 bytes)
- docs/analysis/concepts/rjm/sentence-count.md (895 bytes)
- docs/analysis/concepts/rjm/word-count.md (869 bytes)
- docs/analysis/concepts/rjm/mean-sentence-length.md (916 bytes)
- docs/analysis/concepts/rjm/stddev-sentence-length.md (927 bytes)
- docs/analysis/concepts/rjm/coefficient-of-variation.md (958 bytes)
- docs/analysis/concepts/rjm/flat-rhythm-warning.md (964 bytes)
- docs/analysis/concepts/rjm/concreteness-count.md (924 bytes)
- docs/analysis/concepts/rjm/layer-1.md (1289 bytes)
- docs/analysis/concepts/rjm/layer-2.md (1250 bytes)
- docs/analysis/concepts/rjm/burstiness-py.md (1079 bytes)
- docs/analysis/concepts/rjm/layer-3.md (1175 bytes)
- docs/analysis/concepts/rjm/layer-4.md (1231 bytes)
- docs/analysis/concepts/rjm/voice-rule.md (1274 bytes)
- docs/analysis/concepts/rjm/unterminated-fence.md (1780 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-176.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/behavioral-clarity.md docs/analysis/concepts/rjm/appropriate-scope.md docs/analysis/concepts/rjm/grounded-changes.md docs/analysis/concepts/rjm/visual-card-template.md docs/analysis/concepts/rjm/simple-prompts.md docs/analysis/concepts/rjm/complex-prompts.md docs/analysis/concepts/rjm/core-quality-principles.md docs/analysis/concepts/rjm/visual-card-format.md docs/analysis/concepts/rjm/trigger-condition.md docs/analysis/concepts/rjm/stacking-compatibility.md docs/analysis/concepts/rjm/emphasis-markers.md docs/analysis/concepts/rjm/burstiness.md docs/analysis/concepts/rjm/concreteness.md docs/analysis/concepts/rjm/flat-rhythm-cv-threshold.md docs/analysis/concepts/rjm/min-sentences-for-rhythm.md docs/analysis/concepts/rjm/prosestats.md docs/analysis/concepts/rjm/sentence-count.md docs/analysis/concepts/rjm/word-count.md docs/analysis/concepts/rjm/mean-sentence-length.md docs/analysis/concepts/rjm/stddev-sentence-length.md docs/analysis/concepts/rjm/coefficient-of-variation.md docs/analysis/concepts/rjm/flat-rhythm-warning.md docs/analysis/concepts/rjm/concreteness-count.md docs/analysis/concepts/rjm/layer-1.md docs/analysis/concepts/rjm/layer-2.md docs/analysis/concepts/rjm/burstiness-py.md docs/analysis/concepts/rjm/layer-3.md docs/analysis/concepts/rjm/layer-4.md docs/analysis/concepts/rjm/voice-rule.md docs/analysis/concepts/rjm/unterminated-fence.md` (exit code 0, 35 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-176 authors 30 concept cards derived from two core skills in rjm: `prompt-engineer` and `prose-self-check` (including helper scripts `burstiness.py` and `prose_lint.py`).
- Concepts from `prompt-engineer` span prompt optimization quality criteria (`behavioral-clarity`, `appropriate-scope`, `grounded-changes`), planning templates (`visual-card-template`, `visual-card-format`), complexity triage (`simple-prompts`, `complex-prompts`), and gating checkpoints (`trigger-condition`, `stacking-compatibility`, `emphasis-markers`). `core-quality-principles` is a documentation heading and classified as `kind: name-only` per D-023.
- Concepts from `prose-self-check` span statistical and distributional analysis (`burstiness`, `concreteness`), script constants and dataclass metrics in `burstiness.py` (`flat-rhythm-cv-threshold`, `min-sentences-for-rhythm`, `prosestats`, `sentence-count`, `word-count`, `mean-sentence-length`, `stddev-sentence-length`, `coefficient-of-variation`, `flat-rhythm-warning`, `concreteness-count` — all classified as `kind: name-only` per D-023), multi-tiered validation layers (`layer-1`, `layer-2`, `layer-3`, `layer-4`), script file identification (`burstiness-py` as `kind: name-only`), external governance references (`voice-rule`), and fail-closed syntax gates (`unterminated-fence`).
- Multi-occurrence concepts: `burstiness.py` (2 occurrences) and `unterminated fence` (3 occurrences) have all occurrences represented in their Where used tables.
- Inventory defects were carried over to `Implementation status` (`clean` for prompt-engineer and burstiness.py; `defects: script-bug, doc-drift, other` for prose_lint.py; `defects: script-bug, doc-drift, other, missing-path` for unterminated-fence).
- All 30 cards pass quote-check with zero failures (35 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 4 source files and 4 inventory entries.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
