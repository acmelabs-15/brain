---
package: rjm
name: sonnet
slug: sonnet
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sonnet

## Definition — verbatim
(used, not defined)

> "Agent defaults (sonnet) are calibrated for quality." — .claude/skills/planner/scripts/executor.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 86 | used here | Default model tier specified for agent delegations in executor model selection rules. |
| templates/agents/code-simplifier.shared.md | 3 | used here | Model tier configuration set to sonnet in agent frontmatter. |
| templates/agents/comment-analyzer.shared.md | 3 | used here | Model tier configuration set to sonnet in agent frontmatter. |
| templates/agents/dependency-auditor.shared.md | 5 | used here | Model tier configuration set to sonnet in agent frontmatter. |
| templates/agents/issue-feature-review.shared.md | 5 | used here | Model tier configuration set to sonnet in agent frontmatter. |

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
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
`sonnet` is an external LLM model tier identifier (Anthropic Claude Sonnet) configured across agents rather than an engineering lifecycle concept.
