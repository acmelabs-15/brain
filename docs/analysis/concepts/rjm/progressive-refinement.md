---
package: rjm
name: Progressive Refinement
slug: progressive-refinement
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Progressive Refinement

## Definition — verbatim
(used, not defined)

> "#### 3. Progressive Refinement" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 145 | defined here | Tabulated as a 3-tier retrieval sequence moving from cached domain routing to keyword identification and actionable content. |

## Consumes
Hierarchical indices and cached session state.

## Produces
Stepwise narrowing of context from broad domain to atomic instruction file.

## When applied
Applied during memory lookup sequences to retrieve operational skills without loading unneeded context.

## Sub-concepts
tiered-index-architecture

## Part of
token-efficiency

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Progressive refinement structures agent memory retrieval into cascading levels of increasing specificity, allowing the agent to commit minimal context until the exact skill file is identified.
