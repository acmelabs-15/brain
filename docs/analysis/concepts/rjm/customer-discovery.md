---
package: rjm
name: Customer Discovery
slug: customer-discovery
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

# Customer Discovery

## Definition — verbatim
> "2. **Customer Discovery: test the problem.** Leave the building. Interview 15 to" — .claude/skills/business-strategy/references/four-steps.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 37 | defined here | Step 2 of the Customer Development process testing whether customer pain is genuine, urgent, and pervasive. |

## Consumes
Hypothesized customer profiles, problem statements, and current alternative costs.

## Produces
Interview qualitative findings confirming or invalidating whether the target customer problem is real and severe.

## When applied
Step 2 of the Four Steps methodology, requiring founders to interview 15 to 30 target buyers without pitching.

## Sub-concepts
leave-the-building

## Part of
four-steps-to-the-epiphany, customer-development

## Implementation status
clean

## Design notes
The initial qualitative discovery phase of Blank's Customer Development framework in rjm. It obligates founders to leave the building and conduct open-ended interviews with target buyers to verify that a hypothesized problem is urgent and severe before investing in product development.
