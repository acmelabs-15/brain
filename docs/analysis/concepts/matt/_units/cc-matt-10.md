---
unit: cc-matt-10
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-10

## Files assigned
- [x] CONTEXT.md
- [x] docs/engineering/ask-matt.md
- [x] docs/engineering/code-review.md
- [x] docs/engineering/codebase-design.md
- [x] docs/engineering/diagnosing-bugs.md
- [x] docs/engineering/domain-modeling.md
- [x] docs/engineering/grill-with-docs.md
- [x] docs/engineering/implement.md
- [x] docs/engineering/improve-codebase-architecture.md
- [x] docs/engineering/prototype.md
- [x] docs/engineering/research.md
- [x] docs/engineering/resolving-merge-conflicts.md
- [x] docs/engineering/setup-matt-pocock-skills.md
- [x] docs/engineering/tdd.md
- [x] docs/engineering/to-spec.md
- [x] docs/engineering/to-tickets.md
- [x] docs/engineering/triage.md
- [x] docs/engineering/wayfinder.md
- [x] docs/engineering/wizard.md
- [x] docs/productivity/grill-me.md
- [x] docs/productivity/grilling.md
- [x] docs/productivity/handoff.md
- [x] docs/productivity/teach.md
- [x] docs/productivity/to-questionnaire.md
- [x] docs/productivity/wait-what.md
- [x] docs/productivity/writing-for-agents.md
- [x] external/ask-matt.md
- [x] external/code-review.md
- [x] external/diagnosing-bugs.md
- [x] external/domain-modeling.md
- [x] external/grill-me.md
- [x] external/grilling.md
- [x] external/handoff.md
- [x] external/implement.md
- [x] external/improve-codebase-architecture.md
- [x] external/prototype.md
- [x] external/research.md
- [x] external/resolving-merge-conflicts.md
- [x] external/setup-matt-pocock-skills.md
- [x] external/tdd.md
- [x] external/teach.md
- [x] external/to-questionnaire.md
- [x] external/to-spec.md
- [x] external/to-tickets.md
- [x] external/triage.md
- [x] external/wait-what.md
- [x] external/wayfinder.md
- [x] external/writing-for-agents.md
- [x] skills/engineering/ask-matt/PHASE-BOUNDARIES.md
- [x] skills/engineering/ask-matt/SKILL.md
- [x] skills/engineering/code-review/SKILL.md
- [x] skills/engineering/codebase-design/DESIGN-IT-TWICE.md
- [x] skills/engineering/domain-modeling/CONTEXT-FORMAT.md
- [x] skills/engineering/improve-codebase-architecture/SKILL.md
- [x] skills/engineering/prototype/SKILL.md
- [x] skills/engineering/prototype/agents/openai.yaml
- [x] skills/engineering/wayfinder/SKILL.md
- [x] skills/engineering/wizard/template.sh
- [x] skills/in-progress/retro/SKILL.md
- [x] skills/productivity/README.md
- [x] skills/productivity/grilling/SKILL.md
- [x] skills/productivity/handoff/SKILL.md
- [x] skills/productivity/handoff/agents/openai.yaml
- [x] skills/productivity/to-questionnaire/SKILL.md
- [x] skills/productivity/writing-for-agents/SKILL-MECHANICS.md
- [x] skills/productivity/writing-for-agents/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/relationships.md (1158 bytes)
- docs/analysis/concepts/matt/flagged-ambiguities.md (969 bytes)
- docs/analysis/concepts/matt/backlog.md (1148 bytes)
- docs/analysis/concepts/matt/session.md (5540 bytes)
- docs/analysis/concepts/matt/agent.md (6092 bytes)
- docs/analysis/concepts/matt/main-flow.md (1827 bytes)
- docs/analysis/concepts/matt/context.md (4582 bytes)
- docs/analysis/concepts/matt/phase-boundary.md (1780 bytes)
- docs/analysis/concepts/matt/flow.md (1727 bytes)
- docs/analysis/concepts/matt/prototype.md (4127 bytes)
- docs/analysis/concepts/matt/on-ramps.md (1717 bytes)
- docs/analysis/concepts/matt/standalones.md (1696 bytes)
- docs/analysis/concepts/matt/subagents.md (1779 bytes)
- docs/analysis/concepts/matt/clear.md (2364 bytes)
- docs/analysis/concepts/matt/handoff.md (3480 bytes)
- docs/analysis/concepts/matt/away-from-the-keyboard.md (1631 bytes)
- docs/analysis/concepts/matt/compact.md (2372 bytes)
- docs/analysis/concepts/matt/portability.md (2060 bytes)
- docs/analysis/concepts/matt/plan-mode.md (1700 bytes)
- docs/analysis/concepts/matt/model.md (4604 bytes)
- docs/analysis/concepts/matt/writing-for-agents.md (2708 bytes)
- docs/analysis/concepts/matt/standalone-router.md (1613 bytes)
- docs/analysis/concepts/matt/secondary-source.md (2157 bytes)
- docs/analysis/concepts/matt/fixed-point.md (2025 bytes)
- docs/analysis/concepts/matt/standards.md (1757 bytes)
- docs/analysis/concepts/matt/sub-agent.md (2406 bytes)
- docs/analysis/concepts/matt/coding-standards-md.md (1222 bytes)
- docs/analysis/concepts/matt/contributing-md.md (1199 bytes)
- docs/analysis/concepts/matt/docs-agents-issue-tracker-md.md (1109 bytes)
- docs/analysis/concepts/matt/smell-baseline.md (2053 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-10.md (4700 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (38 PASS, 0 FAIL)
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts --quiet, exit code 0 (coverage: clean)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Five terms in this unit (`Relationships`, `Flagged ambiguities`, `CODING_STANDARDS.md`, `CONTRIBUTING.md`, `docs/agents/issue-tracker.md`) represent structural markdown headings or repository file paths rather than development lifecycle concepts; they have been designated as `kind: name-only` per D-023.
- `backlog` represents a retired/deprecated domain concept explicitly marked in `CONTEXT.md:29` as replaced by `Issue tracker`, recorded with `deprecated: true`.
- `subagents` and `sub-agent` exist as distinct inventory concepts due to orthographic hyphenation divergence; each received its own concept card referencing the alternate spelling in `Also called`.
- Several high-occurrence operational concepts (`agent`, `session`, `context`, `model`) span across virtually all engineering and productivity skills, serving as foundational architecture for matt's session and phase-boundary model.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~120,000 tokens across 66 source files and citing inventory cards; approximate tokens of output written: ~18,000 tokens across 30 concept cards and this unit report.
