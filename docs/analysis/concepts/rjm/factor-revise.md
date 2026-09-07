---
package: rjm
name: Factor+Revise
slug: factor-revise
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Factor+Revise

## Definition — verbatim
> "For longform generation, add an explicit cross-check step between verification and final response." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:346

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 344 | defined here | Section heading and method definition introducing an explicit cross-check turn into factored verification. |

## Consumes
Baseline response text and factored verification Q&A pairs.

## Produces
An explicit list of detected factual inconsistencies, followed by an accurately revised response.

## When applied
When verifying longform generations where complex inconsistencies must be systematically identified prior to final revision.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A multi-turn verification technique that inserts an intermediate cross-checking step (Turn 3.5) between factored verification and final generation. By requiring the model to explicitly list all inconsistencies between the baseline and verified facts before revising, Factor+Revise achieves superior factual accuracy on complex longform texts.
