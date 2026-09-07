---
package: rjm
name: Bullseye method
slug: bullseye-method
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/traction.md, sha256: 2f8e8bcb6eb1f87e80aee296179b4ce681a9ea641bac43930d093f9c0d369f2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Bullseye method

## Definition — verbatim
> "The Bullseye method runs in five steps." — .claude/skills/business-strategy/references/traction.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 34 | defined here | Five-step operational sequence for ranking, testing, and optimizing traction channels. |

## Consumes
Comprehensive channel brainstorming and parallel testing capability.

## Produces
Selection and optimization of a single winning traction channel at the center of the bullseye.

## When applied
Executed in iterative cycles whenever growth stalls or new customer acquisition streams are required.

## Sub-concepts
outer-ring, middle-ring, inner-ring

## Part of
bullseye-channel-selection

## Implementation status
clean

## Design notes
The Bullseye method executes a 5-step loop: brainstorm all 19 channels, rank into three rings, run cheap concurrent tests on the inner ring, focus on the single winner, and repeat when returns flatten. In rjm, treating traction as an ongoing loop prevents complacency and manages channel saturation.
