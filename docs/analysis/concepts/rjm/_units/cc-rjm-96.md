---
unit: cc-rjm-96
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-96

## Files assigned
- [x] sources/rjm/.claude/skills/CLAUDE.md
- [x] sources/rjm/.claude/skills/ai-agents-config-catalog/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-debugging-playbook/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md
- [x] sources/rjm/.claude/skills/ai-agents-research-methodology/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py
- [x] sources/rjm/.claude/skills/golden-principles/SKILL.md
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/_constants.py
- [x] sources/rjm/.claude/skills/skillforge/scripts/frontmatter.py
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/.claude/skills/stuck-detection/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/validation/check_push_lock_before_commit.py
- [x] sources/rjm/scripts/validation/command_size.py
- [x] sources/rjm/scripts/validation/skill_size.py

## Outputs produced
- docs/analysis/concepts/rjm/config-catalog.md
- docs/analysis/concepts/rjm/escape-hatches.md
- docs/analysis/concepts/rjm/lsp-first.md
- docs/analysis/concepts/rjm/skip-tests.md
- docs/analysis/concepts/rjm/git-config-count.md
- docs/analysis/concepts/rjm/serena-project-root.md
- docs/analysis/concepts/rjm/skip-push-lock-commit-guard.md
- docs/analysis/concepts/rjm/ai-agents-pytest-full-suite-locally.md
- docs/analysis/concepts/rjm/ai-agents-pytest-workers.md
- docs/analysis/concepts/rjm/orphan-ref-ignore.md
- docs/analysis/concepts/rjm/orphan-ref-ignore-file.md
- docs/analysis/concepts/rjm/size-exception.md
- docs/analysis/concepts/rjm/plugin-manifest-version-prohibition.md
- docs/analysis/concepts/rjm/hook-registration-surfaces.md
- docs/analysis/concepts/rjm/how-to-add-a-new-flag.md
- docs/analysis/concepts/rjm/guard.md
- docs/analysis/concepts/rjm/discriminating-experiment.md
- docs/analysis/concepts/rjm/markdown-autofix.md
- docs/analysis/concepts/rjm/markdown-check.md
- docs/analysis/concepts/rjm/stuck-detection.md
- docs/analysis/concepts/rjm/sections-to-compare.md
- docs/analysis/concepts/rjm/failure-modes-md.md
- docs/analysis/concepts/rjm/empirical-probe.md
- docs/analysis/concepts/rjm/description-budget.md
- docs/analysis/concepts/rjm/description-max-length.md
- docs/analysis/concepts/rjm/skill-size.md
- docs/analysis/concepts/rjm/orphan-references.md
- docs/analysis/concepts/rjm/golden-principles.md
- docs/analysis/concepts/rjm/agent-remediation.md
- docs/analysis/concepts/rjm/drift-gates-as-measurements.md
- docs/analysis/concepts/rjm/_units/cc-rjm-96.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts ` across all 30 concept cards (exit code 0, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-96 authors 30 concept cards across core configuration catalog axes, failure triage playbooks, and diagnostic measurement instruments:
  1. Configuration axes and escape hatches (`config-catalog`, `escape-hatches`, `lsp-first`, `skip-tests`, `git-config-count`, `serena-project-root`, `skip-push-lock-commit-guard`, `ai-agents-pytest-full-suite-locally`, `ai-agents-pytest-workers`, `orphan-ref-ignore`, `orphan-ref-ignore-file`, `size-exception`, `plugin-manifest-version-prohibition`, `hook-registration-surfaces`, `how-to-add-a-new-flag`).
  2. Failure triage, debugging methodology, and guardrails (`guard`, `discriminating-experiment`, `markdown-autofix`, `markdown-check`, `stuck-detection`, `sections-to-compare`, `failure-modes-md`, `empirical-probe`).
  3. Diagnostic instruments, budgets, and principles (`description-budget`, `description-max-length`, `skill-size`, `orphan-references`, `golden-principles`, `agent-remediation`, `drift-gates-as-measurements`).
- Non-lifecycle concepts (such as configuration flag names, headings, or file names) are classified as `kind: name-only` per METHOD.md R6 and D-023: `skip-tests`, `git-config-count`, `serena-project-root`, `sections-to-compare`, and `failure-modes-md`.
- All 54 occurrences from facts/cc-rjm-96.txt are mapped in the respective cards' Where used tables.
- Defect annotations from citing inventory cards are properly reflected in Implementation status.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 19 source files and citing inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 unit report.
