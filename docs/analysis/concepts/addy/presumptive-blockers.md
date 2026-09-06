---
package: addy
name: Presumptive blockers
slug: presumptive-blockers
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Presumptive blockers

## Definition — verbatim
> "**Presumptive blockers:** surface and propose the simpler design for each of these; escalate to Required only when the change actively makes structure worse:" — skills/code-review-and-quality/SKILL.md:396

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 396 | defined here | Identifies architectural anti-patterns that trigger redesign proposals and potential escalation to merge blockers. |

## Consumes
Code changes exhibiting architectural complexity relocation, boundary expansion without decomposition, shared-module contamination, duplicate helper creation, or silent fallbacks.

## Produces
Constructive simpler design proposals that escalate to Required merge-blocking findings if the change actively degrades overall codebase structure.

## When applied
During the final verification step of code review when assessing systemic architectural health.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A review classification pattern targeting subtle architectural anti-patterns (such as relocating complexity rather than reducing it, bloating shared files, or adding silent fallbacks) by defaulting to proposing simpler designs and escalating to hard blockers if structural health degrades.
