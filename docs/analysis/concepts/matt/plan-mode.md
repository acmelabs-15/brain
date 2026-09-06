---
package: matt
name: plan mode
slug: plan-mode
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# plan mode

## Definition — verbatim
(used, not defined)
> "Plan mode primes the agent to rush toward producing a plan, which is the opposite of staying in inquiry." — docs/productivity/grill-me.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 60 | used here | Explains that questions about using plan mode are answered by model inference rather than router documentation. |
| docs/productivity/grill-me.md | 19 | used here | Warns developers to leave plan mode off during grilling to avoid premature closure. |
| external/ask-matt.md | 51 | used here | External catalog documentation on plan mode model behaviors. |
| external/grill-me.md | 36 | used here | External guide advising against enabling plan mode during inquiry phases. |

## Consumes
Agent harness execution mode toggle.

## Produces
A behavioral bias toward structured task planning rather than open inquiry.

## When applied
When an agent or developer decides whether to activate plan-generation constraints in the harness.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A built-in operational mode in agent harnesses (such as Claude Code's plan mode) that biases the model toward formulating sequential execution plans. In matt's lifecycle, plan mode is explicitly discouraged during early inquiry and grilling phases because it predisposes the agent to formulate premature plans rather than probing edge cases and uncovering hidden assumptions.
