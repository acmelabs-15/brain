---
package: matt
name: index
slug: index
kind: pattern
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

# index

## Definition — verbatim
> "The map is an **index**, not a store." — skills/engineering/wayfinder/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 23 | defined here | Establishes that the wayfinder map serves as an index pointing to tickets rather than an exhaustive data store. |

## Consumes
Resolved decision tickets with closed statuses and resolution comments.

## Produces
Brief gist summaries and issue tracker links organized within the map's `Decisions so far` section.

## When applied
Applied when authoring and updating the wayfinder parent map issue.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
An architectural design pattern governing the wayfinder map. By acting strictly as an index containing links and one-line summaries rather than duplicating full conversation transcripts or decision rationale, it keeps the map compact enough to be loaded at low resolution in fresh context windows.
