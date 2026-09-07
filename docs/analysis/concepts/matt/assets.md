---
package: matt
name: assets
slug: assets
kind: artifact
package_phase: matt:productivity
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

# assets

## Definition — verbatim
> "Lessons are built from reusable **components**, stored in `./assets/`: stylesheets, quiz widgets, simulators, diagram helpers, and anything else a second lesson could reuse." — skills/productivity/teach/SKILL.md:63-65

## Also called — verbatim
components — skills/productivity/teach/SKILL.md:65

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 35 | defined here | Lists assets/* as reusable components such as shared stylesheets. |
| external/teach.md | 34 | defined here | Lists assets directory holding reusable stylesheets and widgets across lessons. |
| skills/productivity/teach/SKILL.md | 19 | defined here | Defines assets directory for reusable components shared across lessons. |
| skills/productivity/teach/SKILL.md | 63 | defined here | Heading and section explaining reuse rules for assets, widgets, and styles. |

## Consumes
Shared CSS styling, JavaScript quiz logic, simulators, and diagramming utilities.

## Produces
Reusable component files in `./assets/` linked by multiple HTML lessons.

## When applied
Maintained and expanded whenever a component can be shared across multiple lessons.

## Sub-concepts
none

## Part of
standing-teaching-workspace

## Implementation status
defects: script-bug, missing-path (path ambiguity resolving ./ against skill directory)

## Design notes
The assets directory functions as the shared component library for a teaching workspace. By centralizing stylesheets, quiz widgets, and interactive simulators in `./assets/`, the workspace maintains aesthetic and functional coherence across dozens of lessons while preventing code duplication.
