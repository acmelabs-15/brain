---
package: rjm
name: Middle ring
slug: middle-ring
kind: pattern
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

# Middle ring

## Definition — verbatim
> "Middle ring: possible." — .claude/skills/business-strategy/references/traction.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 43 | defined here | Intermediate ranking tier holding plausible channels staged for future experimentation. |

## Consumes
Brainstormed channel hypotheses assessed as viable but secondary to immediate priorities.

## Produces
Reserve pipeline of promising channels ready for promotion into active testing.

## When applied
Established during Step 2 ranking and reviewed when inner ring channels tap out.

## Sub-concepts
none

## Part of
bullseye-method, bullseye-channel-selection

## Implementation status
clean

## Design notes
The Middle Ring stages channels that show strong potential but are not among the top two or three immediate contenders. In rjm, it maintains an active bench of pre-evaluated distribution hypotheses that can be promoted quickly once primary experiments conclude.
