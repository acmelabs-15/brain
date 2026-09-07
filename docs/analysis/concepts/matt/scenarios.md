---
package: matt
name: scenarios
slug: scenarios
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scenarios

## Definition — verbatim
> "4. **Guided walkthroughs**: a set of **scenarios**, one per tab. Each tab holds a short plain-language description of the scenario (the situation it sets up and what to watch for) and underneath it, the ordered **buttons to press** for that scenario." — skills/engineering/prototype/LOGIC.md:46

## Also called — verbatim
`Guided walkthroughs` — skills/engineering/prototype/LOGIC.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 46 | defined here | Defined as tabbed guided walkthroughs that demonstrate tricky edge cases, happy paths, and boundary conditions. |

## Consumes
Edge cases, happy paths, and illegal transition attempts that require evaluation.

## Produces
Tabbed walkthrough interfaces with pre-configured step-by-step action buttons and reset capabilities.

## When applied
Configured in step 3 of building a logic prototype to demonstrate specific edge cases to domain stakeholders.

## Sub-concepts
none

## Part of
logic-prototype

## Implementation status
clean

## Design notes
Pre-scripted interaction sequences presented in tabs within a logic prototype that walk stakeholders through tricky edge cases, happy paths, and boundary conditions by clicking an ordered series of real action buttons.
