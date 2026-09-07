---
package: matt
name: input pile
slug: input-pile
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# input pile

## Definition — verbatim
> "Treat it as the input pile: anything from a tidy list of fragments to a wall of unstructured prose to a transcript. The format does not matter." — skills/in-progress/writing-shape/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 9 | defined here | Defined as the read-only collection of raw notes, fragments, or transcripts passed to writing-shape for mining into an article. |

## Consumes
Unstructured prose, raw fragments from an explore session, interview transcripts, or author notes.

## Produces
Read-only source material mined to populate paragraphs and narrative moves during article shaping.

## When applied
At the start of writing-shape; must be read end-to-end before beginning article assembly.

## Sub-concepts
none

## Part of
writing-shape

## Implementation status
clean

## Design notes
The input pile represents the complete corpus of raw authoring material supplied to the exploit phase. Kept strictly read-only, it decouples raw ideation from structured drafting, serving as a quarry that the agent mines to construct cohesive article paragraphs without altering original notes.
