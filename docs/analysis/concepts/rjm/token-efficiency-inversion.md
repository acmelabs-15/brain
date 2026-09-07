---
package: rjm
name: Token Efficiency Inversion
slug: token-efficiency-inversion
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Efficiency Inversion

## Definition — verbatim
> "The original ADR-005 rationale was token efficiency (agents wasted tokens generating Python then reimplementing in PowerShell). With Python as a prerequisite and AI/ML integration as a priority, this rationale has inverted." — .agents/architecture/ADR-042-python-migration-strategy.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 56 | defined here | Explains the architectural shift where Python adoption now conserves tokens compared to PowerShell. |

## Consumes
Ecosystem context requiring Python and token consumption metrics comparing PowerShell generation against native Python tooling.

## Produces
Architectural justification for superseding ADR-005 in favor of Python-first development.

## When applied
Evaluated during language architecture decisions when LLM token overhead in code translation exceeds runtime overhead.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Token Efficiency Inversion describes the reversal of token economics in agent tool generation: while LLMs previously expended tokens translating Python patterns into PowerShell, the dominance of Python-native AI libraries means agents now expend fewer tokens operating natively in Python.
