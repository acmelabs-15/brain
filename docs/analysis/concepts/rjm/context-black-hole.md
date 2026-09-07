---
package: rjm
name: Context black hole
slug: context-black-hole
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context black hole

## Definition — verbatim
> "Context black hole" — docs/when-to-use.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 34 | defined here | Anti-pattern task shape representing vague, unbounded requests that require specification before building. |

## Consumes
Ambiguous feature suggestions and unbounded user requests.

## Produces
Bounded scope and testable acceptance criteria through /spec and /plan.

## When applied
Applied when confronting ill-defined or unbounded requests lacking concrete acceptance criteria.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
A task classification and anti-pattern in rjm for vague proposals, requiring strict restriction to specification and planning to prevent runaway execution before scope is bounded.
