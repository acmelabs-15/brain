---
unit: inv-matt-41
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-41

## Files assigned
- [x] sources/matt/skills/engineering/tdd/agents/openai.yaml (87 bytes, 4 lines)
- [x] sources/matt/skills/engineering/tdd/mocking.md (1481 bytes, 60 lines)
- [x] sources/matt/skills/engineering/tdd/SKILL.md (3549 bytes, 39 lines)
- [x] sources/matt/skills/engineering/tdd/tests.md (2214 bytes, 78 lines)
- [x] sources/matt/skills/engineering/to-spec/agents/openai.yaml (135 bytes, 6 lines)
- [x] sources/matt/skills/engineering/to-spec/SKILL.md (3043 bytes, 76 lines)
- [x] sources/matt/skills/engineering/to-tickets/agents/openai.yaml (146 bytes, 6 lines)
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md (5671 bytes, 106 lines)
- [x] sources/matt/skills/engineering/triage/AGENT-BRIEF.md (7942 bytes, 208 lines)
- [x] sources/matt/skills/engineering/triage/agents/openai.yaml (135 bytes, 6 lines)
- [x] sources/matt/skills/engineering/triage/OUT-OF-SCOPE.md (4667 bytes, 106 lines)
- [x] sources/matt/skills/engineering/triage/SKILL.md (6557 bytes, 113 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-tdd-agents-openai-yaml.md (1690 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md (2493 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-skill-md.md (4531 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-tests-md.md (2077 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-spec-agents-openai-yaml.md (1867 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-spec-skill-md.md (4121 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-tickets-agents-openai-yaml.md (1886 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-tickets-skill-md.md (4567 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-agent-brief-md.md (3848 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-agents-openai-yaml.md (1723 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-out-of-scope-md.md (3304 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-skill-md.md (5062 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-41.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `tdd` (`SKILL.md`, `tests.md`, `mocking.md`): Functions as a model-invoked reference skill rather than an active driver. It defines strict red-to-green vertical-slice progression, bans refactoring from the inner implementation cycle (delegating refactoring to `code-review`), restricts mocks strictly to external system boundaries via dependency injection and narrow SDK interfaces, and mandates testing exclusively at pre-agreed seams. Interface design questions defer to `codebase-design`.
- `to-spec` (`SKILL.md`): Synthesizes conversation history into a structured specification issue tagged `ready-for-agent`. Explicitly forbids re-interviewing the user, but forces pre-agreement on testing seams (ideally one high-level seam) before drafting specification sections, establishing the binding testing contract for downstream skills.
- `to-tickets` (`SKILL.md`): Splits plans or specs into vertical-slice tracer-bullet tickets each declaring blocking dependencies. Defines the "frontier" of tickets unblocked for parallel agent consumption, and specifies an expand-contract sequence for wide refactors where vertical slices cannot maintain green builds.
- `triage` (`SKILL.md`, `AGENT-BRIEF.md`, `OUT-OF-SCOPE.md`): Implements an inbound on-ramp for external issues and PRs (treating PRs as issues with attached code). Employs a 2D state machine (one category: bug/enhancement; one state: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Out-of-scope enhancement rejections are permanently recorded in `.out-of-scope/<concept>.md` for deduplication, while agent briefs provide durable, pathless contracts for AFK execution.
- Dual-harness metadata (`agents/openai.yaml`): Model-invoked `tdd` leaves implicit invocation permitted; user-invoked `to-spec`, `to-tickets`, and `triage` enforce `policy.allow_implicit_invocation: false`, aligning with Claude Code's `disable-model-invocation: true`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~8,900 tokens (35,627 bytes across 12 files).
Approximate output tokens written: ~9,300 tokens (37,169 bytes across 12 cards and unit report).
