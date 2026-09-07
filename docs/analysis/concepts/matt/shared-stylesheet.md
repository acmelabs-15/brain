---
package: matt
name: shared stylesheet
slug: shared-stylesheet
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shared stylesheet

## Definition — verbatim
> "The shared stylesheet is the first component every workspace earns; it is what stops the output being a pile of one-offs." — external/teach.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 43 | defined here | Defined as the foundational visual component in assets/ that unifies generated HTML lessons into a coherent course. |

## Consumes
The creation of a standing teaching workspace and the generation of the initial lesson.

## Produces
A reusable CSS stylesheet stored in assets/ referenced by all subsequent HTML lesson documents.

## When applied
Authored during the initial lesson creation and read by the agent before authoring any subsequent lesson.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: orphan, doc-drift, missing-path

## Design notes
The shared stylesheet is the foundational reusable asset generated in a teach workspace's assets/ directory. It establishes consistent styling across all self-contained HTML lessons, preventing generated documents from degenerating into disjointed, disparate one-off files and giving the workspace the feel of a cohesive course.
