---
unit: cc-rjm-44
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-44

## Files assigned
- [x] .agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md
- [x] .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md
- [x] .agents/architecture/ADR-TEMPLATE.md
- [x] .claude/agents/backlog-generator.md
- [x] .claude/agents/code-reviewer.md
- [x] .claude/agents/devops.md
- [x] .claude/agents/high-level-advisor.md
- [x] .claude/agents/independent-thinker.md
- [x] .claude/agents/merge-resolver.md
- [x] .claude/agents/qa.md
- [x] .claude/agents/retrospective.md
- [x] .claude/agents/security.md
- [x] .claude/agents/task-decomposer.md
- [x] .claude/skills/adr-generator/SKILL.md
- [x] .claude/skills/adr-generator/references/adr-template.md
- [x] .claude/skills/ai-agents-debugging-playbook/SKILL.md
- [x] .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md
- [x] .claude/skills/autoplan/SKILL.md
- [x] .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
- [x] .claude/skills/cva-analysis/SKILL.md
- [x] .claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] .claude/skills/skillforge/references/script-integration-framework.md
- [x] CONTRIBUTING.md
- [x] scripts/ci/enforce_pr_validation.py
- [x] scripts/ci/update_needs_split_label.py
- [x] scripts/eval/panels/owner-copilot-cli.json
- [x] scripts/validation/pr_commit_count.py
- [x] templates/agents/architect.shared.md
- [x] templates/agents/backlog-generator.shared.md
- [x] templates/agents/code-reviewer.shared.md
- [x] templates/agents/devops.shared.md
- [x] templates/agents/high-level-advisor.shared.md
- [x] templates/agents/independent-thinker.shared.md
- [x] templates/agents/qa.shared.md
- [x] templates/agents/retrospective.shared.md
- [x] templates/agents/security.shared.md
- [x] templates/agents/task-decomposer.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/copilot-dispatcher.md (935 bytes)
- docs/analysis/concepts/rjm/invoke-dispatch-claude-py.md (994 bytes)
- docs/analysis/concepts/rjm/re-accretion-ratchet.md (1175 bytes)
- docs/analysis/concepts/rjm/tool-use-hook-bar-md.md (928 bytes)
- docs/analysis/concepts/rjm/test-installed-plugin-hooks-py.md (954 bytes)
- docs/analysis/concepts/rjm/agent-role-metadata-replaces-the-tier-hierarchy.md (1024 bytes)
- docs/analysis/concepts/rjm/four-tier-agent-hierarchy.md (1339 bytes)
- docs/analysis/concepts/rjm/expert.md (1215 bytes)
- docs/analysis/concepts/rjm/manager.md (1168 bytes)
- docs/analysis/concepts/rjm/builder.md (1525 bytes)
- docs/analysis/concepts/rjm/integration.md (1389 bytes)
- docs/analysis/concepts/rjm/tier.md (1098 bytes)
- docs/analysis/concepts/rjm/handoff-protocol.md (4389 bytes)
- docs/analysis/concepts/rjm/role.md (1092 bytes)
- docs/analysis/concepts/rjm/agent-coordination.md (947 bytes)
- docs/analysis/concepts/rjm/descriptive-metadata.md (1201 bytes)
- docs/analysis/concepts/rjm/aggregation-weight.md (1266 bytes)
- docs/analysis/concepts/rjm/invocation-rank.md (1136 bytes)
- docs/analysis/concepts/rjm/prior-art-investigation.md (1732 bytes)
- docs/analysis/concepts/rjm/standing-dissent.md (1206 bytes)
- docs/analysis/concepts/rjm/re-evaluation-triggers.md (1205 bytes)
- docs/analysis/concepts/rjm/commit-count-block.md (1221 bytes)
- docs/analysis/concepts/rjm/commit-limit-bypass-label.md (958 bytes)
- docs/analysis/concepts/rjm/push-ref-policy.md (1114 bytes)
- docs/analysis/concepts/rjm/main-merge-relief.md (1155 bytes)
- docs/analysis/concepts/rjm/commit-limit-bypass.md (1197 bytes)
- docs/analysis/concepts/rjm/needs-split.md (1815 bytes)
- docs/analysis/concepts/rjm/stacked-branch.md (1180 bytes)
- docs/analysis/concepts/rjm/advisory-label.md (1210 bytes)
- docs/analysis/concepts/rjm/needs-split-step.md (917 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-44.md (6618 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to unit cc-rjm-44 authored as concept cards in `docs/analysis/concepts/rjm/`.
- The concepts map across three major architectural transition milestones in the `rjm` repository:
  - Hook Latency and Dispatcher Retirement (ADR-097): authored `copilot-dispatcher` (name-only), `invoke_dispatch_claude.py` (name-only), `re-accretion-ratchet` (gate), `tool-use-hook-bar.md` (name-only), and `test_installed_plugin_hooks.py` (name-only).
  - Agent Role Metadata Migration (ADR-098): authored `agent-role-metadata-replaces-the-tier-hierarchy` (name-only), `four-tier-agent-hierarchy` (pattern), `expert` (role), `manager` (role), `builder` (pattern), `integration` (pattern), `tier` (name-only), `handoff-protocol` (pattern), `role` (name-only), `agent-coordination` (name-only), `descriptive-metadata` (pattern), `aggregation-weight` (technique), `invocation-rank` (pattern), `prior-art-investigation` (technique), `standing-dissent` (pattern), and `re-evaluation-triggers` (checklist).
  - PR Commit Limit Gate Removal (ADR-099): authored `commit-count-block` (gate), `commit-limit-bypass-label` (name-only), `push-ref-policy` (gate), `main-merge-relief` (technique), `commit-limit-bypass` (name-only), `needs-split` (name-only), `stacked-branch` (technique), `advisory-label` (pattern), and `needs-split-step` (name-only).
- `handoff-protocol` captures 22 separate occurrences across ADR-098, CONTRIBUTING.md, 10 agent specifications in `.claude/agents/`, and 10 shared agent templates in `templates/agents/`, uniformly asserting that subagents cannot delegate downward and must return structured findings to the orchestrator.
- Non-lifecycle concepts (identifiers, filenames, section headings, labels) are marked `kind: name-only` per D-023 with mandatory single-sentence design notes.
- All 30 cards pass byte-exact quotation checks via `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~95,000 tokens across 38 assigned source files and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
