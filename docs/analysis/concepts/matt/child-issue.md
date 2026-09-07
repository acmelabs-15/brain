---
package: matt
name: child issue
slug: child-issue
kind: artifact
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

# child issue

## Definition — verbatim
> "Each ticket is a **child issue** of the map; the tracker's issue id is its identity." — skills/engineering/wayfinder/SKILL.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 57 | defined here | Defines decision tickets as child issues linked directly to the parent map issue on the tracker. |

## Consumes
The parent `wayfinder:map` issue and an identified open question or decision.

## Produces
An individual tracker issue sized to fit within a single 100K token agent session.

## When applied
Applied during map charting and when graduating fog of war into discrete tickets.

## Sub-concepts
question, wayfinder:type

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
An issue tracker representation of a single decision ticket within a wayfinder effort. Child issues maintain their own lifecycle, assignee claims, and dependency blocking, allowing discrete questions to be worked in parallel or sequentially across isolated agent sessions.
