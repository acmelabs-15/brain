---
package: matt
name: assignee
slug: assignee
kind: role
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

# assignee

## Definition — verbatim
> "That assignee _is_ the claim: an open, unassigned ticket is unclaimed." — skills/engineering/wayfinder/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 67 | defined here | Establishes the tracker issue assignee as the definitive marker of active ticket ownership. |

## Consumes
A developer or agent identifier driving a wayfinder session.

## Produces
An assigned issue metadata field communicating ownership across sessions.

## When applied
When claiming an unblocked ticket at the start of a wayfinder session.

## Sub-concepts
none

## Part of
wayfinder, child-issue

## Implementation status
defects: other

## Design notes
The issue tracker role that functions as the explicit claim mechanism in wayfinder. Rather than requiring custom claim databases or locks, wayfinder leverages the issue's native assignee field so that an assigned ticket is visibly claimed and an unassigned ticket is unclaimed.
