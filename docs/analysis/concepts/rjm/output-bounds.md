---
package: rjm
name: Output Bounds
slug: output-bounds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Output Bounds

## Definition — verbatim
(used, not defined)

> "## Output Bounds" — .claude/agents/code-simplifier.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 62 | defines | Section heading capping refactors at 10 items, 20 lines per before/after block, and 1-sentence rationales. |
| .claude/agents/comment-analyzer.md | 70 | defines | Section heading capping summary at 3 sentences, findings at 10 items, and descriptions at 1 sentence. |
| .claude/agents/orchestrator.md | 202 | defines | Section heading defining tabular output phase caps across plan, build, test, and ship phases. |
| src/claude/orchestrator.md | 202 | defines | Upstream source heading specifying tabular volume caps for orchestrator lifecycle phases. |
| templates/agents/code-simplifier.shared.md | 71 | defines | Shared template heading setting maximum quantitative boundaries for refactor outputs. |
| templates/agents/comment-analyzer.shared.md | 81 | defines | Shared template heading enforcing quantitative limits on comment findings and summary length. |
| templates/agents/orchestrator.shared.md | 213 | defines | Shared template heading specifying phase-level response limits and tabular caps. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A recurring section heading establishing quantitative response size and volume limits across multiple agents, not an independent lifecycle concept.
