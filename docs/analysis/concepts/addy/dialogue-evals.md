---
package: addy
name: dialogue evals
slug: dialogue-evals
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dialogue evals

## Definition — verbatim
> "full stream-json trace; dialogue evals need no fixture and grade the" — scripts/run-evals.js:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 23 | defined here | Implements conversational behavioral evaluations that grade dialogue turns rather than workspace file mutations. |

## Consumes
Conversational turn expectations and user prompts in `evals/cases/<skill>.json`

## Produces
LLM-graded verdict assessing agent conversational outputs against rubric criteria

## When applied
Used to test conversational and advisory skills that produce verbal guidance rather than code changes.

## Sub-concepts
none

## Part of
Tier 3

## Implementation status
clean

## Design notes
A behavioral evaluation technique for skills whose primary artifact is the conversation itself (such as mentoring, code review, or planning) rather than file modifications. Unlike execution evals, dialogue evals require no pre-baked workspace fixtures.
