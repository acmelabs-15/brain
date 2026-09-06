---
package: addy
name: Readability & Simplicity
slug: readability-simplicity
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Readability & Simplicity

## Definition — verbatim
> "Can another engineer (or agent) understand this code without the author explaining it?" — skills/code-review-and-quality/SKILL.md:38

## Also called — verbatim
`Readability & Simplicity` — skills/code-review-and-quality/SKILL.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 36 | defined here | Second axis of the five-axis review evaluating naming, control flow, line count, and abstraction weight |

## Consumes
Source code files, function and variable names, module structure, and abstractions.

## Produces
Review observations and feedback on code clarity, line conciseness, and elimination of dead code or speculative abstractions.

## When applied
Evaluated as the second axis during every code review pass.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Readability & Simplicity constitutes the second axis of the Five-Axis Review. It asks whether another engineer or agent can comprehend the change without external explanation, challenging unnecessary complexity, bloated line counts, speculative generalizations, and tangled control flows.
