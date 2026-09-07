---
unit: cc-rjm-102
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-102

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-research-frontier/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-research-methodology/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-validation-and-qa/SKILL.md
- [x] sources/rjm/.claude/skills/business-strategy/references/made-to-stick.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/SKILL.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md
- [x] sources/rjm/.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
- [x] sources/rjm/.claude/skills/codebase-documenter/SKILL.md
- [x] sources/rjm/.claude/skills/cva-analysis/SKILL.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py
- [x] sources/rjm/.claude/skills/decision-critic/SKILL.md
- [x] sources/rjm/.claude/skills/decision-critic/scripts/decision-critic.py
- [x] sources/rjm/.claude/skills/doc-accuracy/SKILL.md
- [x] sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py
- [x] sources/rjm/.claude/skills/fix-markdown-fences/SKILL.md
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/filters.py
- [x] sources/rjm/.claude/skills/pre-mortem/SKILL.md
- [x] sources/rjm/.claude/skills/prose-self-check/SKILL.md
- [x] sources/rjm/.claude/skills/review/references/decision-rigor.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/.claude/skills/validation-authority/SKILL.md
- [x] sources/rjm/scripts/ci/artifact_write_summary.py
- [x] sources/rjm/scripts/eval/eval-e2e-delivery.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-prompt-change.py
- [x] sources/rjm/scripts/eval/eval-suite.py
- [x] sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] sources/rjm/scripts/normalize_line_endings.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/skill_contract_test_baseline.txt

## Outputs produced
- docs/analysis/concepts/rjm/context-reading-failure.md (2071 bytes)
- docs/analysis/concepts/rjm/kill-budgets.md (1904 bytes)
- docs/analysis/concepts/rjm/contract-tests.md (2088 bytes)
- docs/analysis/concepts/rjm/detect-log-graduate.md (1952 bytes)
- docs/analysis/concepts/rjm/budding.md (2197 bytes)
- docs/analysis/concepts/rjm/growing.md (2094 bytes)
- docs/analysis/concepts/rjm/mature.md (2059 bytes)
- docs/analysis/concepts/rjm/proficient.md (2120 bytes)
- docs/analysis/concepts/rjm/inert.md (2179 bytes)
- docs/analysis/concepts/rjm/harmful.md (2132 bytes)
- docs/analysis/concepts/rjm/calibration-gate.md (1978 bytes)
- docs/analysis/concepts/rjm/auto-proposal.md (2011 bytes)
- docs/analysis/concepts/rjm/idea-lifecycle.md (2021 bytes)
- docs/analysis/concepts/rjm/eval-baseline.md (1918 bytes)
- docs/analysis/concepts/rjm/adr-debate.md (1871 bytes)
- docs/analysis/concepts/rjm/post-ship-monitoring.md (1876 bytes)
- docs/analysis/concepts/rjm/evidence-bar.md (2250 bytes)
- docs/analysis/concepts/rjm/rca.md (1831 bytes)
- docs/analysis/concepts/rjm/decision-critic.md (5980 bytes)
- docs/analysis/concepts/rjm/doc-accuracy.md (4486 bytes)
- docs/analysis/concepts/rjm/predict-numbers-before-running.md (1974 bytes)
- docs/analysis/concepts/rjm/dry-run.md (3393 bytes)
- docs/analysis/concepts/rjm/contradiction-log.md (2200 bytes)
- docs/analysis/concepts/rjm/capability-gate.md (1950 bytes)
- docs/analysis/concepts/rjm/ai-agents-change-control.md (2137 bytes)
- docs/analysis/concepts/rjm/event.md (1484 bytes)
- docs/analysis/concepts/rjm/calibrated-gate.md (1923 bytes)
- docs/analysis/concepts/rjm/retro-mining.md (1919 bytes)
- docs/analysis/concepts/rjm/user-corrections.md (1926 bytes)
- docs/analysis/concepts/rjm/incident-postmortems.md (2002 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-102.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md` (all 30 cards, exit code 0, 32 PASS, 0 FAIL)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-102 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 card(s) stamped (67 input(s)))

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-102 covers research frontier and research methodology concepts in rjm:
  1. Research frontier mechanisms (`context-reading-failure`, `kill-budgets`, `contract-tests`, `detect-log-graduate`, `calibration-gate`, `auto-proposal`) establishing the shift from advisory prompting to verification-based enforcement and multi-harness contract testing.
  2. Guard maturity lifecycle tiers (`budding`, `growing`, `mature`, `proficient`, `inert`, `harmful`) and legacy telemetry formatting (`event`), noting the historical retirement of the `push_guard_base.py` emitter and tier classifier under ADR-084.
  3. Research methodology and the 7-stage idea lifecycle (`idea-lifecycle`, `contradiction-log`, `capability-gate`, `eval-baseline`, `adr-debate`, `calibrated-gate`, `post-ship-monitoring`, `ai-agents-change-control`) governing how speculative hunches mature through empirical probes, evaluation baselines, multi-agent debate, and calibrated enforcement.
  4. Epistemological and experimental disciplines (`evidence-bar`, `rca`, `predict-numbers-before-running`, `retro-mining`, `user-corrections`, `incident-postmortems`) institutionalizing singular-mechanism explanations, pre-registered predictions, and root-cause mining from past incidents.
  5. Cross-cutting operational skills and command-line flags (`decision-critic` with 15 citations, `doc-accuracy` with 10 citations, and `--dry-run` with 8 citations) establishing adversarial review, code-as-truth doc audits, and zero-spend execution modes.
- All 68 occurrences across 31 source files recorded in `facts/cc-rjm-102.txt` are represented in the Where used tables of the 30 concept cards.
- Non-lifecycle identifiers (`--dry-run`, `EVENT=`) are classified as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 31 cited source files and inventory cards.
Approximate tokens of output written: ~18,000 tokens across 30 concept cards and 1 unit report.
