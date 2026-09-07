---
package: rjm
name: Pivot or proceed
slug: pivot-or-proceed
kind: gate
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

# Pivot or proceed

## Definition — verbatim
> "5. **Pivot or proceed.** If the evidence contradicts a hypothesis, pivot that one" — .claude/skills/business-strategy/references/four-steps.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 48 | defined here | Decision gate governing whether to revise an invalid hypothesis or proceed to scale based on stranger payment. |

## Consumes
Customer discovery interview results, prototype feedback, and validated sales transactions with strangers.

## Produces
Decision verdict to either revise a disproven hypothesis and re-test or proceed to scaling operations.

## When applied
"Proceed only when problem and solution both pass and a stranger has paid." — .claude/skills/business-strategy/references/four-steps.md:49-50

## Sub-concepts
pivoting

## Part of
four-steps-to-the-epiphany, customer-development

## Implementation status
clean

## Design notes
Pivot or proceed is the central decision gate in Customer Development that regulates progression from customer validation to scaling. It prevents premature scaling by enforcing that a team may only advance once both problem and solution hypotheses are empirically proven and at least one stranger has executed a financial transaction.
