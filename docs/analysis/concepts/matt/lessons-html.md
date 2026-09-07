---
package: matt
name: ./lessons/*.html
slug: lessons-html
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ./lessons/*.html

## Definition — verbatim
> "A directory of lessons. A **lesson** is a single, self-contained HTML output that teaches one tightly-scoped thing tied to the mission. This is the primary unit of teaching in this workspace." — skills/productivity/teach/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 18 | defines | Defines the directory path and format for self-contained HTML lesson artifacts. |

## Consumes
Curated knowledge from `RESOURCES.md`, reusable components from `./assets/`, and target learning objectives from `MISSION.md`.

## Produces
Self-contained HTML lessons titled `0001-<dash-case-name>.html` in `./lessons/`.

## When applied
Created as the primary instructional vehicle during teaching sessions.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
The artifact path and packaging format for interactive lessons in Matt's teaching methodology. Lessons are authored as rich, standalone HTML files with embedded stylesheets, quizzes, and simulations rather than plain markdown, providing high typographic polish and immediate client-side interactivity.
