---
package: rjm
name: Customer Validation
slug: customer-validation
kind: phase
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

# Customer Validation

## Definition — verbatim
> "4. **Customer Validation: sell by hand.** The founder sells, in person, to" — .claude/skills/business-strategy/references/four-steps.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 44 | defined here | Step 4 of the Customer Development process proving a repeatable sales model by personally closing strangers. |

## Consumes
Validated customer problem, rough solution prototype or pilot offering, and initial sales script.

## Produces
Signed orders, paid pilots from strangers, refined sales roadmap, and verified purchase intent.

## When applied
Step 4 of the Four Steps methodology when attempting to close early paid agreements before investing in marketing scale.

## Sub-concepts
none

## Part of
four-steps-to-the-epiphany, customer-development

## Implementation status
clean

## Design notes
The second major milestone in Steve Blank's Customer Development methodology in rjm. It tests whether the product can actually be sold by forcing founders to personally secure orders or paid commitments from strangers, proving that a repeatable sales process exists before scaling.
