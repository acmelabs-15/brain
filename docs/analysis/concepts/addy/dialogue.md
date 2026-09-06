---
package: addy
name: dialogue
slug: dialogue
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dialogue

## Definition — verbatim
> "`dialogue` is reserved for skills whose deliverable is the conversation itself; it needs no fixture, and the grader judges the assistant's conversational turns without requiring file edits or commands." — evals/README.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/constraint-driven-development.json | 44 | defined here | Sets eval case kind to dialogue for conversational constraint setup. |
| evals/cases/idea-refine.json | 32 | defined here | Sets eval case kind to dialogue for interactive idea refinement. |
| evals/cases/interview-me.json | 32 | defined here | Sets eval case kind to dialogue for conversational user interview. |
| evals/README.md | 36 | defined here | Documents the dialogue behavioral artifact kind in Tier 3 evaluation framework. |

## Consumes
User prompts and requirements presented in interactive conversation.

## Produces
Conversational responses, clarifications, structured recommendations, and diagnostic interview turns.

## When applied
When evaluating or executing skills whose primary output is the conversation itself rather than file edits or shell commands.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
dialogue identifies skills whose primary artifact is the interaction itself—such as interviews, constraint elicitation, or idea refinement. By classifying these separately from execution skills, the framework enables evaluation runners to judge conversational quality, pushback, and guidance without requiring artificial file modifications or tool calls.
