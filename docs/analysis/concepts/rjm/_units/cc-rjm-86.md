---
unit: cc-rjm-86
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-86

## Files assigned
- [x] sources/rjm/.claude/commands/plan.md
- [x] sources/rjm/.claude/commands/push-pr.md
- [x] sources/rjm/.claude/commands/research.md
- [x] sources/rjm/.claude/commands/retro.md
- [x] sources/rjm/.claude/commands/ship.md
- [x] sources/rjm/.claude/commands/spec.md
- [x] sources/rjm/.claude/skills/ai-agents-docs-of-record/SKILL.md
- [x] sources/rjm/.claude/skills/avoiding-manufactured-work/SKILL.md
- [x] sources/rjm/.claude/skills/execution-plans/SKILL.md
- [x] sources/rjm/.claude/skills/metrics/SKILL.md
- [x] sources/rjm/.claude/skills/metrics/collect_metrics.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/filters.py
- [x] sources/rjm/.claude/skills/panning-for-gold/SKILL.md
- [x] sources/rjm/.claude/skills/research-and-incorporate/SKILL.md
- [x] sources/rjm/.claude/skills/retrospective/scripts/run_retrospective.py
- [x] sources/rjm/.claude/skills/review/references/decision-rigor.md
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/docs/SKILL-AUTHORING.md
- [x] sources/rjm/scripts/new_validated_pr.py
- [x] sources/rjm/scripts/utils/markdown_parser.py
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json
- [x] sources/rjm/scripts/validation/spec_contradiction.py
- [x] sources/rjm/templates/agents/implementer.shared.md
- [x] docs/analysis/inventory/rjm/claude-commands-plan-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-push-pr-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-research-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-retro-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-ship-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-spec-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-docs-of-record-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-avoiding-manufactured-work-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-execution-plans-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-metrics-collect-metrics-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-metrics-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-filters-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-panning-for-gold-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-research-and-incorporate-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-retrospective-scripts-run-retrospective-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-decision-rigor-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/docs-skill-authoring-md.md
- [x] docs/analysis/inventory/rjm/scripts-new-validated-pr-py.md
- [x] docs/analysis/inventory/rjm/scripts-utils-markdown-parser-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-plugin-frontmatter-self-containment-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-spec-contradiction-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-implementer-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/front-gate.md
- docs/analysis/concepts/rjm/six-forcing-questions.md
- docs/analysis/concepts/rjm/front-gate-before-pipeline.md
- docs/analysis/concepts/rjm/evaluation-axes.md
- docs/analysis/concepts/rjm/scope-integrity.md
- docs/analysis/concepts/rjm/estimate-confidence.md
- docs/analysis/concepts/rjm/reversibility.md
- docs/analysis/concepts/rjm/push-pr-command.md
- docs/analysis/concepts/rjm/conventional-commit.md
- docs/analysis/concepts/rjm/secure-path-allocator.md
- docs/analysis/concepts/rjm/validate-spec-coverage.md
- docs/analysis/concepts/rjm/vendor-portability.md
- docs/analysis/concepts/rjm/research-and-incorporate-command.md
- docs/analysis/concepts/rjm/ultrathink.md
- docs/analysis/concepts/rjm/research-phase.md
- docs/analysis/concepts/rjm/analysis-phase.md
- docs/analysis/concepts/rjm/applicability-phase.md
- docs/analysis/concepts/rjm/memory-phase.md
- docs/analysis/concepts/rjm/action-phase.md
- docs/analysis/concepts/rjm/fallback-rules.md
- docs/analysis/concepts/rjm/stop-conditions.md
- docs/analysis/concepts/rjm/retro-command.md
- docs/analysis/concepts/rjm/retro-state.md
- docs/analysis/concepts/rjm/skeleton-pending-fill.md
- docs/analysis/concepts/rjm/post-pr-retrospective.md
- docs/analysis/concepts/rjm/unfilled-skeleton.md
- docs/analysis/concepts/rjm/mode-detection.md
- docs/analysis/concepts/rjm/vcs-host-detection.md
- docs/analysis/concepts/rjm/pr-ownership-and-existence-detection.md
- docs/analysis/concepts/rjm/branch-ownership.md
- docs/analysis/concepts/rjm/_units/cc-rjm-86.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/front-gate.md docs/analysis/concepts/rjm/six-forcing-questions.md docs/analysis/concepts/rjm/front-gate-before-pipeline.md docs/analysis/concepts/rjm/evaluation-axes.md docs/analysis/concepts/rjm/scope-integrity.md docs/analysis/concepts/rjm/estimate-confidence.md docs/analysis/concepts/rjm/reversibility.md docs/analysis/concepts/rjm/push-pr-command.md docs/analysis/concepts/rjm/conventional-commit.md docs/analysis/concepts/rjm/secure-path-allocator.md docs/analysis/concepts/rjm/validate-spec-coverage.md docs/analysis/concepts/rjm/vendor-portability.md docs/analysis/concepts/rjm/research-and-incorporate-command.md docs/analysis/concepts/rjm/ultrathink.md docs/analysis/concepts/rjm/research-phase.md docs/analysis/concepts/rjm/analysis-phase.md docs/analysis/concepts/rjm/applicability-phase.md docs/analysis/concepts/rjm/memory-phase.md docs/analysis/concepts/rjm/action-phase.md docs/analysis/concepts/rjm/fallback-rules.md docs/analysis/concepts/rjm/stop-conditions.md docs/analysis/concepts/rjm/retro-command.md docs/analysis/concepts/rjm/retro-state.md docs/analysis/concepts/rjm/skeleton-pending-fill.md docs/analysis/concepts/rjm/post-pr-retrospective.md docs/analysis/concepts/rjm/unfilled-skeleton.md docs/analysis/concepts/rjm/mode-detection.md docs/analysis/concepts/rjm/vcs-host-detection.md docs/analysis/concepts/rjm/pr-ownership-and-existence-detection.md docs/analysis/concepts/rjm/branch-ownership.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-86 authored all 30 concept cards to complete the deliverable set:
  1. Front-gate entry controls and anti-manufactured work patterns (`front-gate`, `six-forcing-questions`, `front-gate-before-pipeline`) establishing upfront problem justification and blocked-user verification before work decomposition.
  2. Plan evaluation axes and rigor dimensions (`evaluation-axes`, `scope-integrity`, `estimate-confidence`, `reversibility`) establishing discrete review criteria for execution plans and architectural decisions.
  3. Pull request publishing and CI verification gates (`push-pr-command`, `conventional-commit`, `secure-path-allocator`, `validate-spec-coverage`, `vendor-portability`) providing branch management, injection-safe PR body preparation, spec consistency checking, and vendor-portability dependency ratchets.
  4. Research command lifecycle and boundary controls (`research-and-incorporate-command`, `ultrathink`, `research-phase`, `analysis-phase`, `applicability-phase`, `memory-phase`, `action-phase`, `fallback-rules`, `stop-conditions`) orchestrating deep research into structured reports and long-term agent memories within strict token budgets.
  5. Retrospective authoring and placeholder state tracking (`retro-command`, `retro-state`, `skeleton-pending-fill`, `post-pr-retrospective`, `unfilled-skeleton`) governing on-demand and post-merge retrospective generation.
  6. Shipping reconnaissance and host/mode branching (`mode-detection`, `vcs-host-detection`, `pr-ownership-and-existence-detection`, `branch-ownership`) dynamically discovering VCS hosting platform and branch ownership semantics.
- Structural schema keys, comment markers, and banner strings (`retro-state`, `skeleton-pending-fill`, `unfilled-skeleton`) were classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 54 occurrences cited in `facts/cc-rjm-86.txt` were mapped to corresponding `Where used` table rows.
- Every card was verified using `bun scripts/synthesis/quote-check.ts` yielding 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 27 source files and 27 inventory cards. Approximate tokens of output written: ~16,000 tokens across 30 concept cards and this unit report.
