---
package: matt
name: grounding machinery
slug: grounding-machinery
kind: pattern
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

# grounding machinery

## Definition — verbatim
> "The grounding machinery (<code class=\"ah-code-inline\">RESOURCES.md</code>, citations in every lesson, one recommended primary source per lesson) exists to make verification cheap, not to remove the need for it." — external/teach.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 50 | defined here | Defined as the set of artifacts (RESOURCES.md, citations, primary source recommendations) that make verification cheap against LLM hallucination. |

## Consumes
High-trust external documentation, primary reference sources, and community knowledge.

## Produces
RESOURCES.md, explicit in-lesson source citations, and primary source reading recommendations.

## When applied
Throughout the teaching workspace lifecycle, curated prior to lesson drafting and cited within every lesson file.

## Sub-concepts
resources-md

## Part of
teach

## Implementation status
defects: orphan, doc-drift, missing-path

## Design notes
Grounding machinery refers to the architectural safeguards that counter untrusted LLM parametric memory in the teach skill. By gathering trusted resources into RESOURCES.md, embedding exact source citations in each lesson, and directing users to authoritative primary sources, it makes factual verification fast and cheap, ensuring learners do not internalize hallucinations.
