---
package: matt
name: components
slug: components
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# components

## Definition — verbatim
> "Lessons are built from **components** in `assets/`: stylesheets, quiz widgets, simulators, diagram helpers." — docs/productivity/teach.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 54 | defined here | Defines components as reusable assets in assets/ such as stylesheets, quiz widgets, and simulators. |
| external/teach.md | 43 | defined here | Explains that lessons are built from reusable components in assets/ to maintain consistency. |
| skills/productivity/teach/SKILL.md | 19 | defined here | Lists `./assets/*` as reusable components shared across lessons. |

## Consumes
Lesson design requirements and workspace styling specifications.

## Produces
Reusable CSS, JavaScript widgets, quiz runners, and diagram templates saved in `./assets/`.

## When applied
When authoring lessons to ensure visual consistency and interactive functionality across a course.

## Sub-concepts
none

## Part of
lesson, teach

## Implementation status
defects: script-bug, internal-contradiction

## Design notes
Modular UI building blocks in Matt's teaching workspaces that unify lesson presentation and interactive mechanics. Reusing components prevents lessons from degenerating into inconsistent, disconnected one-off pages.
