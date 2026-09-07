---
package: rjm
name: Tool Use Directive
slug: tool-use-directive
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tool Use Directive

## Definition — verbatim
(used, not defined)

> "## Tool Use Directive" — .claude/agents/code-simplifier.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 26 | defines | Section heading prescribing full-scope read tool usage prior to suggesting refactoring. |
| .claude/agents/comment-analyzer.md | 24 | defines | Section heading mandating reading underlying code prior to evaluating comments. |
| templates/agents/code-simplifier.shared.md | 35 | defines | Shared template section heading specifying read tool pre-conditions for refactoring. |
| templates/agents/comment-analyzer.shared.md | 35 | defines | Shared template section heading specifying code inspection requirements before comment evaluation. |

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
defects: doc-drift

## Design notes
A recurring prompt section heading instructing support agents on prerequisite read tool operations, not an independent lifecycle concept.
