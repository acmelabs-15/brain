---
package: rjm
name: Judge Invariant Usefulness
slug: judge-invariant-usefulness
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

# Judge Invariant Usefulness

## Definition — verbatim
> "4. **Judge Invariant Usefulness** (Rate 1-10):" — .claude/agents/type-design-analyzer.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 40 | defined here | Evaluation dimension evaluating practical bug prevention and business alignment on a 1-10 scale. |
| templates/agents/type-design-analyzer.shared.md | 50 | defined here | Shared template dimension evaluating invariant usefulness and balance. |

## Consumes
Business requirements, domain error classes, and operational failure scenarios.

## Produces
Quantitative score (1, 3, 5, 7, 10) assessing whether invariants prevent real bugs without being overly restrictive or permissive.

## When applied
Applied during type analysis to judge whether modeled invariants deliver concrete business and maintenance value.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Judge Invariant Usefulness is an evaluation dimension assessing whether defined invariants prevent real bugs, align with domain requirements, clarify reasoning, and strike an appropriate balance between restriction and permissiveness.
