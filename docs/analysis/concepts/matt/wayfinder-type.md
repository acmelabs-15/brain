---
package: matt
name: wayfinder:<type>
slug: wayfinder-type
kind: name-only
package_phase: cross-phase
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

# wayfinder:<type>

## Definition — verbatim
(used, not defined)

> "Each ticket carries a `wayfinder:<type>` label, one of `research`, `prototype`, `grilling`, `task`" — skills/engineering/wayfinder/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 65 | defined here | Defines the tracker label namespace applied to child decision tickets to classify their ticket type. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
child-issue

## Implementation status
defects: other

## Design notes
Issue tracker label convention used in wayfinder to categorize child decision tickets into research, prototype, grilling, or task; recorded as a name-only card because it represents a tracker label namespace rather than an independent lifecycle concept.
