---
package: rjm
name: leave the building
slug: leave-the-building
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# leave the building

## Definition — verbatim
> "Leave the building. Interview 15 to" — .claude/skills/business-strategy/references/four-steps.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 37 | defined here | Core operational directive mandating face-to-face buyer interviews over office-bound assumptions. |

## Consumes
Internal assumptions and unverified business model guesses.

## Produces
Direct, unvarnished observational data and firsthand customer feedback.

## When applied
Applied whenever testing business model assumptions or investigating customer workflows and pain points.

## Sub-concepts
none

## Part of
customer-discovery, four-steps-to-the-epiphany

## Implementation status
clean

## Design notes
Steve Blank's foundational imperative in rjm that there are no facts inside the building, only opinions. It compels founders to physically or directly engage real prospective buyers, testing guesses against live market realities rather than internal company consensus.
