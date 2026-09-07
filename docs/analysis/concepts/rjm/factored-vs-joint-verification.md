---
package: rjm
name: Factored vs. Joint Verification
slug: factored-vs-joint-verification
kind: pattern
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

# Factored vs. Joint Verification

## Definition — verbatim
> "When verification questions are answered with the baseline response in context, the model tends to confirm its own hallucinations rather than correct them." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 269 | defined here | Section comparing factored and joint verification architectures to mitigate hallucination copying. |

## Consumes
Baseline candidate response and planned verification questions.

## Produces
An architectural design choice between isolated, clean-context verification execution (factored) and inline verification (joint).

## When applied
When designing self-verification pipelines to prevent models from attending to and confirming their own draft errors.

## Sub-concepts
factored-cove, 2-step-cove

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
An architectural design pattern in self-verification prompt design that contrasts factored verification against joint verification. Joint verification answers questions with the initial draft in context, triggering hallucination copying; factored verification isolates questions in a fresh context, boosting accuracy by preventing the model from reinforcing its own mistakes.
