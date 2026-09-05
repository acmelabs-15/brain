---
unit: inv-matt-9
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-9

## Files assigned
- [x] sources/matt/docs/productivity/to-questionnaire.md (7828 bytes, 79 lines)
- [x] sources/matt/docs/productivity/wait-what.md (3528 bytes, 37 lines)
- [x] sources/matt/docs/productivity/writing-for-agents.md (7784 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-productivity-to-questionnaire-md.md (4279 bytes)
- docs/analysis/inventory/matt/docs-productivity-wait-what-md.md (3382 bytes)
- docs/analysis/inventory/matt/docs-productivity-writing-for-agents-md.md (5142 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-9.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `to-questionnaire.md` provides the inverse of `grill-me`: where `grill-me` interviews the user to sharpen their own internal ideas, `to-questionnaire` drafts a static discovery questionnaire targeting an external stakeholder who holds missing business/domain knowledge.
- `wait-what.md` is a minimalist 3-line conversational repair mechanism keyed on the listener-state word "wait", prompting the agent to step back, restore missing context, and speak in Simplified Technical English using domain vocabulary from `CONTEXT.md`.
- `writing-for-agents.md` serves as the foundational style reference for all agent-facing text in the repository (`AGENTS.md`, `CLAUDE.md`, specs, tickets, skills, prompts), balancing context load on the model against cognitive load on the human user, and establishing the empirical "no-op test" for instruction pruning.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~4,800 tokens (19,140 bytes across 3 files).
Approximate output tokens: ~3,200 tokens (12,803 bytes across 3 inventory cards and unit report).
