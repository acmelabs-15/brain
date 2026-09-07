---
package: matt
name: exercise directory structures
slug: exercise-directory-structures
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exercise directory structures

## Definition — verbatim
(used, not defined)

> "Create exercise directory structures with sections, problems, solutions, and explainers." — skills/misc/README.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Describes the output directory layout created by the scaffold-exercises skill. |

## Consumes
Curriculum plans specifying sections, exercises, and pedagogical variants.

## Produces
Standardized filesystem hierarchies containing section folders and exercise variant subfolders.

## When applied
When organizing educational course materials into standardized, automated-testing-friendly filesystem trees.

## Sub-concepts
sections, problems, solutions, explainers, exercises

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
Standardized filesystem layout convention for organizing course content. By establishing a predictable structure of numbered section directories and exercise variant folders, it enables automated tools to test, build, and lint educational repositories reliably.
