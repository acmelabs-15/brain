---
package: rjm
name: Examine Invariant Enforcement
slug: examine-invariant-enforcement
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Examine Invariant Enforcement

## Definition — verbatim
> "5. **Examine Invariant Enforcement** (Rate 1-10):" — .claude/agents/type-design-analyzer.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 46 | defined here | Evaluation dimension rating construction-time checks, mutation guards, and runtime checks on a 1-10 scale. |
| templates/agents/type-design-analyzer.shared.md | 56 | defined here | Shared template dimension evaluating invariant enforcement at construction and mutation points. |

## Consumes
Constructors, factory methods, setters, mutating methods, and runtime validation checks.

## Produces
Quantitative score (1, 3, 5, 7, 10) evaluating construction validation, mutation guarding, and impossibility of invalid states.

## When applied
Applied during type analysis to verify that invalid instances cannot be constructed and state mutations are guarded.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Examine Invariant Enforcement evaluates whether invariants are checked at construction time, all mutation points are guarded, invalid state creation is impossible, and runtime assertions are comprehensive.
