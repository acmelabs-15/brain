---
package: addy
name: Spec files
slug: spec-files
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Spec files

## Definition — verbatim
(used, not defined)
> "Keep specs updated so agents build the right thing" — skills/documentation-and-adrs/SKILL.md:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 255 | used here | Highlighted as key documentation artifacts that must remain current so agents build correct functionality. |

## Consumes
Feature requirements, product goals, architectural constraints, and user interface designs.

## Produces
Accurate, authoritative specification documents guiding engineers and agents during implementation.

## When applied
Maintained and updated whenever product features, requirements, or architecture evolve.

## Sub-concepts
none

## Part of
documentation-for-agents

## Implementation status
clean

## Design notes
`Spec files` define product requirements and behavioral contracts, serving as the ground truth that autonomous agents reference to ensure implementation matches intended functionality.
