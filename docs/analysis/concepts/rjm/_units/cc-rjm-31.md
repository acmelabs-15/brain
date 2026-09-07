---
unit: cc-rjm-31
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-31

## Files assigned
- [x] .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md
- [x] .agents/architecture/ADR-063-memory-skill-decomposition.md
- [x] .agents/architecture/ADR-064-commands-to-skills-migration.md
- [x] .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md
- [x] .agents/architecture/ADR-072-jtbd-plugin-architecture.md
- [x] .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md
- [x] .agents/critique/ADR-045-debate-log.md
- [x] .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
- [x] .claude/commands/spec.md
- [x] .claude/skills/adr-review/references/agent-prompts.md
- [x] .claude/skills/adr-review/references/artifacts.md
- [x] .claude/skills/ai-agents-research-methodology/SKILL.md
- [x] .claude/skills/autoplan/SKILL.md
- [x] .claude/skills/security-scan/SKILL.md
- [x] .claude/skills/software-engineering-library/references/philosophy-of-software-design.md
- [x] AGENTS.md
- [x] scripts/validation/git_hook_policy.py

## Outputs produced
- docs/analysis/concepts/rjm/hard-block.md (1666 bytes)
- docs/analysis/concepts/rjm/surgical.md (1689 bytes)
- docs/analysis/concepts/rjm/kill-switch.md (1609 bytes)
- docs/analysis/concepts/rjm/buy-vs-build.md (1894 bytes)
- docs/analysis/concepts/rjm/user-sovereignty.md (2283 bytes)
- docs/analysis/concepts/rjm/decompose-the-memory-skill-into-focused-sub-skills.md (1020 bytes)
- docs/analysis/concepts/rjm/four-tier-memory.md (1569 bytes)
- docs/analysis/concepts/rjm/semantic.md (1431 bytes)
- docs/analysis/concepts/rjm/episodic.md (1491 bytes)
- docs/analysis/concepts/rjm/causal.md (1516 bytes)
- docs/analysis/concepts/rjm/memory-first-gate.md (2047 bytes)
- docs/analysis/concepts/rjm/progressive-disclosure-architecture.md (1646 bytes)
- docs/analysis/concepts/rjm/router-pattern.md (1519 bytes)
- docs/analysis/concepts/rjm/ask-first.md (1904 bytes)
- docs/analysis/concepts/rjm/thin-router.md (1565 bytes)
- docs/analysis/concepts/rjm/split-by-operation-not-by-tier.md (1673 bytes)
- docs/analysis/concepts/rjm/when-to-use-matrix.md (1461 bytes)
- docs/analysis/concepts/rjm/no-behavior-change-for-callers.md (1615 bytes)
- docs/analysis/concepts/rjm/deep-vs-shallow-module.md (1717 bytes)
- docs/analysis/concepts/rjm/reversibility-and-kill-criteria.md (972 bytes)
- docs/analysis/concepts/rjm/vendor-lock-in.md (2380 bytes)
- docs/analysis/concepts/rjm/user-invocable.md (1818 bytes)
- docs/analysis/concepts/rjm/information-leakage.md (1906 bytes)
- docs/analysis/concepts/rjm/canonical-authoring-surface.md (1594 bytes)
- docs/analysis/concepts/rjm/command-to-skill.md (1679 bytes)
- docs/analysis/concepts/rjm/skills-pattern-superiority.md (1573 bytes)
- docs/analysis/concepts/rjm/copilot-cli-frontmatter-compatibility.md (1622 bytes)
- docs/analysis/concepts/rjm/prohibition-guard.md (1511 bytes)
- docs/analysis/concepts/rjm/information-hiding-by-naming.md (1635 bytes)
- docs/analysis/concepts/rjm/atomic-commit.md (1595 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-31.md (4661 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts <30 cards>` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 30 concept cards were created for unit cc-rjm-31 covering core navigation controls, memory architecture decomposition, cross-harness command/skill transformations, and architectural governance principles.
- Concepts representing document headings rather than active lifecycle operations were authored with `kind: name-only` per D-023: `decompose-the-memory-skill-into-focused-sub-skills` and `reversibility-and-kill-criteria`.
- Concepts belonging to the excluded memory implementation subsystem (`four-tier-memory`, `semantic`, `episodic`, `causal`, `memory-first-gate`) were designated with `implementation_in_scope: false` per METHOD.md §1.2.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~140,000 tokens across 17 source files and citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
