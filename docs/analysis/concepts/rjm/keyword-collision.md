---
package: rjm
name: Keyword collision
slug: keyword-collision
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

# Keyword collision

## Definition — verbatim
> "| **Keyword collision** | Overlapping keywords across skills | ≥40% unique keywords per skill |" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 203 | defined here | Defined in the failure modes table as overlapping keywords across skills causing retrieval ambiguity. |

## Consumes
Index entries with shared or generic keywords across multiple skills.

## Produces
Ambiguous retrieval results and incorrect skill selections by LLMs.

## When applied
Evaluated during index creation and keyword density testing in CI.

## Sub-concepts
none

## Part of
activation-vocabulary

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Keyword collision occurs when multiple skills in a domain share excessive trigger keywords, confusing the model during lexical retrieval. rjm mitigates this by requiring at least 40% unique keywords per skill.
