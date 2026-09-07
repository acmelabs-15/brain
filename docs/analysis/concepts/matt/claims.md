---
package: matt
name: claims
slug: claims
kind: technique
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

# claims

## Definition — verbatim
> "A session **claims** a ticket by assigning it to the dev driving the map, **first**, before any work, so concurrent sessions skip it." — skills/engineering/wayfinder/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 67 | defined here | Defines the claiming convention where assigning a ticket establishes session ownership before work begins. |

## Consumes
An open, unblocked, unclaimed child decision ticket on the frontier.

## Produces
An assigned ticket that communicates active ownership and prevents duplicate concurrent work across sessions.

## When applied
At the very beginning of a session working through the map, before any substantive work or investigation begins.

## Sub-concepts
assignee

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
The coordination technique used in wayfinder to avoid collision between concurrent agent sessions. By assigning the ticket to the current session driver prior to starting work, unclaimed frontier tickets are immediately distinguishable from in-progress tickets, allowing multiple sessions to safely work the frontier in parallel.
