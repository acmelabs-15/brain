---
package: matt
name: parametric knowledge
slug: parametric-knowledge
kind: reference
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

# parametric knowledge

## Definition — verbatim
> "[Parametric knowledge](https://www.aihero.dev/ai-coding-dictionary/parametric-knowledge) is treated as untrusted: before it teaches, it goes and finds high-trust resources, records them in `RESOURCES.md`, and cites them inside every lesson." — docs/productivity/teach.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 5 | defined here | Establishes model internal weights as untrusted, requiring empirical source citations. |
| external/teach.md | 26 | used here | Explains treating model parametric knowledge as untrusted prior to grounding in RESOURCES.md. |

## Consumes
The statistical pre-training weights of the large language model.

## Produces
A strict mandate to fetch external, vetted primary sources before attempting to teach.

## When applied
At all times during curriculum design and lesson authoring in the teach skill.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
Parametric knowledge refers to the ungrounded internal weights of the LLM. Matt's lifecycle design explicitly treats parametric recall as untrusted for educational purposes to prevent subtle hallucinations and outdated explanations, enforcing mandatory grounding in cited external resources.
