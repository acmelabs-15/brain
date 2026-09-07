---
package: matt
name: gate
slug: gate
kind: gate
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

# gate

## Definition — verbatim
(used, not defined)
> "A quiz is a gate, not a formality" — external/teach.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 39 | used here | Describes assessment quizzes in the teach skill as mandatory gates that prevent advancing until mastery is demonstrated. |

## Consumes
A completed lesson and an active assessment quiz or drill.

## Produces
A passing verification enabling the learner to proceed to the next lesson, or refusal to advance while the drill remains incomplete.

## When applied
At the conclusion of a teaching lesson when evaluating learner comprehension through interactive quiz questions.

## Sub-concepts
drill

## Part of
teach

## Implementation status
defects: orphan, doc-drift, missing-path

## Design notes
A gate in the teach skill functions as an unyielding checkpoint rather than a conversational formality. By refusing to advance the curriculum until the user passes an interactive quiz drill, the gate prevents false feelings of mastery (fluency) and enforces active recall (storage strength).
