---
package: matt
name: unblocked
slug: unblocked
kind: gate
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# unblocked

## Definition — verbatim
> "A ticket is **unblocked** when every ticket blocking it is closed; the **frontier** is the open, unblocked, unclaimed children, the edge of the known." — skills/engineering/wayfinder/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 69 | defined here | Defines the condition under which a child decision ticket has no open blocking dependencies. |

## Consumes
A child decision ticket and the resolution/closure of all predecessor tickets blocking it.

## Produces
Readiness of the child decision ticket to enter the frontier of actionable work items.

## When applied
Continuously evaluated across the issue tracker as blocking predecessor tickets are resolved and closed.

## Sub-concepts
none

## Part of
wayfinder, frontier

## Implementation status
defects: other

## Design notes
The readiness gate in wayfinder dependency tracking. A ticket becomes unblocked only when every blocking dependency ticket is fully resolved and closed, ensuring agent sessions only undertake decisions whose prerequisite facts and architectural choices have already been established.
