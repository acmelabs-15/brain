---
package: rjm
name: deliberately naive
slug: deliberately-naive
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deliberately naive

## Definition — verbatim
(used, not defined)

> "Same response shape as agent so scoring is symmetric. Any lift the agent shows is attributable to the system prompt's specialization, not to the task framing." — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:371

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 371 | used here | Specified as the baseline prompt design property to isolate prompt specialization lift from task framing. |

## Consumes
Evaluation task requirements and expected model output response schema.

## Produces
An unspecialized, generic baseline prompt devoid of domain-specific vocabulary or persona framing.

## When applied
Applied when designing comparative baseline prompts in offline evaluation spikes.

## Sub-concepts
none

## Part of
eval-agent-vs-baseline

## Implementation status
clean

## Design notes
`deliberately naive` is a prompt engineering design technique in rjm's evaluation harness. By deliberately omitting domain vocabulary (e.g. "security", "vulnerability") and role assignments from the baseline prompt while maintaining an identical response shape, the harness ensures that any measured performance lift in the agent is strictly attributable to prompt specialization rather than task description bias.
