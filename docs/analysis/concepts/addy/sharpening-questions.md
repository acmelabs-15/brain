---
package: addy
name: Sharpening questions
slug: sharpening-questions
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Sharpening questions

## Definition — verbatim
(used, not defined)
> "Sharpening questions are asked before converging" — evals/cases/idea-refine.json:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 36 | used here | Behavioral expectation requiring the agent to interrogate ambiguous ideas with sharpening questions before converging. |

## Consumes
A vague, ambiguous, or underspecified initial idea or feature request.

## Produces
Probing inquiries targeted at uncovering hidden assumptions, target user constraints, and core value drivers.

## When applied
At the beginning of an ideation session before proposing specific technical designs or product architectures.

## Sub-concepts
none

## Part of
- idea-refine

## Implementation status
clean

## Design notes
Sharpening questions force precision onto ambiguous product concepts. By interrogating who the user is, what the critical constraint is, and what failure looks like before converging on an approach, they prevent building the wrong solution.
