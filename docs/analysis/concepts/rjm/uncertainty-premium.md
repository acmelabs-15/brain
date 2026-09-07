---
package: rjm
name: uncertainty premium
slug: uncertainty-premium
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# uncertainty premium

## Definition — verbatim
(used, not defined)

> "| Story Points | Higher for Complex (uncertainty premium) |" — .claude/skills/cynefin-classifier/references/software-applications.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/software-applications.md | 189 | used here | Applied to story point estimation for Complex domain backlog items to buffer against unknowable emergence. |

## Consumes
Cynefin story domain classification, baseline complexity estimation, sprint capacity.

## Produces
Adjusted story point estimates reflecting non-linear risks, realistic sprint commitments.

## When applied
During sprint planning and story estimation when sizing stories classified under the Complex domain.

## Sub-concepts
none

## Part of
integration-with-agile

## Implementation status
clean

## Design notes
The uncertainty premium is an estimation modifier that inflates story points for tasks classified in the Complex Cynefin domain. Because complex work inherently encounters unanticipated interactions and emergent requirements that cannot be predicted during planning, adding an uncertainty premium prevents sprint overcommitment and timeline slippage.
