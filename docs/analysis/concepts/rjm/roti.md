---
package: rjm
name: ROTI
slug: roti
kind: technique
package_phase: rjm:retrospective
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

# ROTI

## Definition — verbatim
> "Measure if retrospective was worth the effort." — .claude/skills/retrospective/references/frameworks.md:435

## Also called — verbatim
"Return on Time Invested" — .claude/skills/retrospective/references/frameworks.md:433

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 118 | used here | Listed as third closing activity in Phase 6 workflow hierarchy. |
| .claude/skills/retrospective/references/frameworks.md | 433 | defined here | Activity specification detailing 0-4 scoring rubric and corresponding actions. |
| .claude/skills/retrospective/SKILL.md | 154 | used here | Referenced in retrospective skill instructions as mandatory closing activity. |
| templates/agents/retrospective.shared.md | 1283 | defined here | Shared agent template specifying ROTI scoring table and evaluation actions. |

## Consumes
Time spent across retrospective phases, quality of insights generated, and agent utility assessment.

## Produces
A numerical score from 0 (wasted cycles) to 4 (exceptional return), with corresponding action triggers (stop, modify, keep, or template).

## When applied
Executed during Phase 6 (Close the Retrospective) to gauge whether the retrospective delivered sufficient value.

## Sub-concepts
none

## Part of
close-the-retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
ROTI (Return on Time Invested) acts as an efficiency circuit-breaker for retrospective reflection. By scoring the value gained relative to time spent on a 0-4 scale, it forces agents and teams to abandon low-yield retrospective practices and preserve high-yield ones, preventing reflection from turning into an unscrutinized productivity tax.
