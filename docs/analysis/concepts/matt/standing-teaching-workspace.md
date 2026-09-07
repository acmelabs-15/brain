---
package: matt
name: standing teaching workspace
slug: standing-teaching-workspace
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# standing teaching workspace

## Definition — verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 3 | defined here | Defines the persistent directory structure created by teach to maintain learning state. |
| external/teach.md | 25 | defined here | Describes transforming the execution directory into a standing workspace across sessions. |

## Consumes
A dedicated directory where the user intends to learn a subject over multiple sessions.

## Produces
An organized workspace containing MISSION.md, RESOURCES.md, lessons, reference files, and learning records.

## When applied
When `/teach` is executed to establish long-term educational infrastructure.

## Sub-concepts
resources-md, mission-md, lessons, reference, learning-records, assets, notes-md

## Part of
teach

## Implementation status
defects: script-bug, missing-path (relative path resolution placing workspace files into ~/.claude/skills)

## Design notes
A standing teaching workspace provides file-backed statefulness for educational journeys. By persisting the learning mission, vetted resources, generated HTML lessons, and ADR-like learning records directly in the workspace directory, multi-session learning can resume seamlessly without relying on transient conversational context.
