---
package: rjm
name: The Contaminated Context
slug: the-contaminated-context
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

# The Contaminated Context

## Definition — verbatim
> "Including the original response when answering verification questions." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:617

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 615 | defined here | Documented as an anti-pattern causing models to attend to and copy baseline hallucinations during verification. |

## Consumes
Verification prompts that mistakenly include the unverified initial output.

## Produces
Confirmation bias and propagation of hallucinations from the initial draft.

## When applied
Identified when auditing verification pipelines to mandate clean-context factored questioning.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A verification anti-pattern where the draft response is included in context when answering verification questions. In rjm, this is recognized as triggering hallucination copying, where the model attends to its prior errors and confirms them rather than evaluating facts independently.
