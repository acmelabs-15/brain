---
package: rjm
name: Circuit Breakers and Bulkheads
slug: circuit-breakers-and-bulkheads
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Circuit Breakers and Bulkheads

## Definition — verbatim
> "### 3. Circuit Breakers and Bulkheads" — .claude/skills/review/references/reliability.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 72 | defined here | Reliability focus area checklist evaluating circuit breaker tripping and bulkhead pool isolation. |

## Consumes
Integration point architectures, worker pool allocations, and dependency call sites.

## Produces
Review findings on missing fail-fast trip mechanisms and unisolated critical/non-critical execution flows.

## When applied
Applied during PR review when examining integration points subject to recurring dependency failures.

## Sub-concepts
circuit-breaker

## Part of
reliability

## Implementation status
clean

## Design notes
`Circuit Breakers and Bulkheads` is a reliability review checklist item assessing whether systems fail fast when remote dependencies crash and isolate resource pools to prevent cross-component exhaustion.
