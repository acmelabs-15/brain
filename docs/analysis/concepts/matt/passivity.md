---
package: matt
name: passivity
slug: passivity
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# passivity

## Definition — verbatim
> "The failure mode is **passivity**: answering \"agreed, agreed, agreed\" for forty questions and coming out with a plan the agent wrote and you nodded at." — docs/productivity/grill-me.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grill-me.md | 25 | defined here | Defines passivity as the failure mode of blindly agreeing to grilling questions. |
| external/grill-me.md | 39 | defined here | Describes the failure mode of nodding through forty questions without steering. |

## Consumes
An active grilling session where the human acts as an uncritical rubber stamp.

## Produces
A plan written entirely by the agent carrying unearned certainty.

## When applied
When an engineer abdicates active steering during an interactive inquiry session.

## Sub-concepts
none

## Part of
grill-me

## Implementation status
clean

## Design notes
Passivity is an anti-pattern in Matt Pocock's grilling skills where the human abdicates critical judgement and simply nods along to automated questions. The grilling philosophy posits that the value of an interview tracks the quality and resistance of human answers rather than the sheer count of questions; without active human pushback, the resulting artifact acquires a false sense of certainty.
