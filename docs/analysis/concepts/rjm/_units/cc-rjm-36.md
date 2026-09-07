---
unit: cc-rjm-36
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-36

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-074-security-review-quick-pass-mode.md
- [x] sources/rjm/.agents/architecture/ADR-075-form-factor-eval-methodology.md
- [x] sources/rjm/.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md
- [x] sources/rjm/.claude/agents/security.md
- [x] sources/rjm/.claude/agents/security/references/powershell-security-checklist.md
- [x] sources/rjm/.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-procedure.md
- [x] sources/rjm/.claude/skills/observability/schema.json
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/security-review/SKILL.md
- [x] sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py
- [x] sources/rjm/README.md
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/templates/agents/security.shared.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-074-security-review-quick-pass-mode-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-075-form-factor-eval-methodology-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-requirements-req-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-powershell-security-checklist-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-diagnostics-toolkit-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-procedure-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-observability-schema-json.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-spec-generator-scripts-validate-spec-frontmatter-py.md
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-invoke-security-retrospective-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/diff-scope-classifier.md (1481 bytes)
- docs/analysis/concepts/rjm/classify-diff-scope.md (1034 bytes)
- docs/analysis/concepts/rjm/threat-model-protocol.md (1422 bytes)
- docs/analysis/concepts/rjm/piv-verdict-gate.md (2061 bytes)
- docs/analysis/concepts/rjm/budget-exceeded.md (1381 bytes)
- docs/analysis/concepts/rjm/quick-pass.md (1533 bytes)
- docs/analysis/concepts/rjm/needs-deep-review.md (1435 bytes)
- docs/analysis/concepts/rjm/cwe-77.md (1747 bytes)
- docs/analysis/concepts/rjm/cwe-798.md (1363 bytes)
- docs/analysis/concepts/rjm/asi01.md (1463 bytes)
- docs/analysis/concepts/rjm/progress-reporting.md (1507 bytes)
- docs/analysis/concepts/rjm/canonical-source-mirror-rule.md (1650 bytes)
- docs/analysis/concepts/rjm/form-factor-evaluation-methodology.md (1625 bytes)
- docs/analysis/concepts/rjm/agent-vs-skill.md (1040 bytes)
- docs/analysis/concepts/rjm/agent-eval-discipline.md (1426 bytes)
- docs/analysis/concepts/rjm/content-baseline.md (1392 bytes)
- docs/analysis/concepts/rjm/form-factor-question.md (1274 bytes)
- docs/analysis/concepts/rjm/subagent-isolation.md (1486 bytes)
- docs/analysis/concepts/rjm/recall-parity.md (1255 bytes)
- docs/analysis/concepts/rjm/three-variant-eval.md (1398 bytes)
- docs/analysis/concepts/rjm/baseline.md (2539 bytes)
- docs/analysis/concepts/rjm/agent.md (1989 bytes)
- docs/analysis/concepts/rjm/eval-agent-vs-baseline-py.md (1430 bytes)
- docs/analysis/concepts/rjm/prefer-skill-form.md (1471 bytes)
- docs/analysis/concepts/rjm/prefer-agent-form.md (1357 bytes)
- docs/analysis/concepts/rjm/inconclusive.md (1620 bytes)
- docs/analysis/concepts/rjm/equivalence-margin.md (1494 bytes)
- docs/analysis/concepts/rjm/cost-accounting.md (1312 bytes)
- docs/analysis/concepts/rjm/content-controlled-confirmatory-rerun.md (1704 bytes)
- docs/analysis/concepts/rjm/content-confound.md (1315 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-36.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/diff-scope-classifier.md docs/analysis/concepts/rjm/classify-diff-scope.md docs/analysis/concepts/rjm/threat-model-protocol.md docs/analysis/concepts/rjm/piv-verdict-gate.md docs/analysis/concepts/rjm/budget-exceeded.md docs/analysis/concepts/rjm/quick-pass.md docs/analysis/concepts/rjm/needs-deep-review.md docs/analysis/concepts/rjm/cwe-77.md docs/analysis/concepts/rjm/cwe-798.md docs/analysis/concepts/rjm/asi01.md docs/analysis/concepts/rjm/progress-reporting.md docs/analysis/concepts/rjm/canonical-source-mirror-rule.md docs/analysis/concepts/rjm/form-factor-evaluation-methodology.md docs/analysis/concepts/rjm/agent-vs-skill.md docs/analysis/concepts/rjm/agent-eval-discipline.md docs/analysis/concepts/rjm/content-baseline.md docs/analysis/concepts/rjm/form-factor-question.md docs/analysis/concepts/rjm/subagent-isolation.md docs/analysis/concepts/rjm/recall-parity.md docs/analysis/concepts/rjm/three-variant-eval.md docs/analysis/concepts/rjm/baseline.md docs/analysis/concepts/rjm/agent.md docs/analysis/concepts/rjm/eval-agent-vs-baseline-py.md docs/analysis/concepts/rjm/prefer-skill-form.md docs/analysis/concepts/rjm/prefer-agent-form.md docs/analysis/concepts/rjm/inconclusive.md docs/analysis/concepts/rjm/equivalence-margin.md docs/analysis/concepts/rjm/cost-accounting.md docs/analysis/concepts/rjm/content-controlled-confirmatory-rerun.md docs/analysis/concepts/rjm/content-confound.md` (exit code 0, 42 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-36 covers 30 concepts across two primary architectural domains:
  1. Security review quick-pass mode and gate governance (ADR-074): `diff-scope classifier`, `classify_diff_scope`, `threat-model protocol`, `PIV verdict gate`, `budget_exceeded`, `QUICK_PASS`, `NEEDS_DEEP_REVIEW`, `CWE-77`, `CWE-798`, `ASI01`, `progress reporting`, and `canonical-source-mirror rule`.
  2. Form-factor evaluation methodology and comparative benchmarking (ADR-075): `Form-Factor Evaluation Methodology`, `Agent vs Skill`, `agent eval discipline`, `content baseline`, `form-factor question`, `subagent-isolation`, `Recall parity`, `three-variant eval`, `baseline`, `agent`, `eval-agent-vs-baseline.py`, `prefer-skill-form`, `prefer-agent-form`, `inconclusive`, `equivalence margin`, `Cost accounting`, `Content-controlled confirmatory rerun`, and `content confound`.
- All 30 cards were authored from scratch to achieve 100% coverage of cc-rjm-36.
- Non-lifecycle concepts were classified as `kind: name-only` per D-023:
  - `classify_diff_scope` (Python function signature)
  - `Agent vs Skill` (ADR-075 document subtitle)
  - `eval-agent-vs-baseline.py` (eval harness script filename)
- Verdict tokens (`budget_exceeded`, `QUICK_PASS`, `NEEDS_DEEP_REVIEW`, `prefer-skill-form`, `prefer-agent-form`, `inconclusive`) and gate mechanisms (`PIV verdict gate`, `Recall parity`) were classified as `kind: gate`.
- Security vulnerability standards and classification schemas (`CWE-77`, `CWE-798`, `ASI01`) were classified as `kind: reference`.
- Core architectural methodologies and protocols (`diff-scope classifier`, `threat-model protocol`, `progress reporting`, `Form-Factor Evaluation Methodology`, `agent eval discipline`, `three-variant eval`, `equivalence margin`, `Cost accounting`, `Content-controlled confirmatory rerun`) were classified as `kind: technique`.
- Patterns and principles (`canonical-source-mirror rule`, `content baseline`, `form-factor question`, `subagent-isolation`, `baseline`, `content confound`) were classified as `kind: pattern`.
- `agent` was classified as `kind: role`.
- Multi-occurrence concepts spanning multiple files (`PIV verdict gate` with 3 occurrences, `CWE-77` with 4 occurrences, `CWE-798` with 2 occurrences, `ASI01` with 3 occurrences, `canonical-source-mirror rule` with 2 occurrences, `baseline` with 8 occurrences, `agent` with 5 occurrences, `eval-agent-vs-baseline.py` with 4 occurrences, and `inconclusive` with 2 occurrences) document all citations in their `Where used` tables.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~42,000 tokens across 21 source files and 21 inventory cards.
Approximate tokens of output written: ~13,800 tokens across 30 authored concept cards and 1 unit report.
