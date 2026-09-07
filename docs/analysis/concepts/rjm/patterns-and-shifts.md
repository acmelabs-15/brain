---
package: rjm
name: Patterns and Shifts
slug: patterns-and-shifts
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Patterns and Shifts

## Definition — verbatim
> "### Activity: Patterns and Shifts" — .claude/skills/retrospective/references/frameworks.md:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 83 | defined here | Phase 1 activity analyzing multi-session longitudinal trends. |
| .claude/skills/retrospective/references/frameworks.md | 279 | defined here | Framework activity definition for detecting patterns and shifts across executions. |
| .claude/skills/retrospective/SKILL.md | 104 | used here | Skill instruction directing use of Patterns and Shifts for multi-session trend analysis. |
| templates/agents/retrospective.shared.md | 408 | defined here | Shared template defining Patterns and Shifts analysis. |

## Consumes
Historical retrospective data across multiple sessions or PRs.

## Produces
Trend identifications, longitudinal shifts in error frequencies, and evolutionary patterns.

## When applied
Applied during Phase 1 (Generate Insights) during multi-session reviews or milestone retrospectives.

## Sub-concepts
none

## Part of
generate-insights, retrospective

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Patterns and Shifts evaluates longitudinal trends across multiple agent sessions. Rather than treating each execution in isolation, this technique uncovers systemic drift, recurring regression vectors, and the delayed secondary effects of earlier changes.
