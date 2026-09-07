---
package: rjm
name: opus
slug: opus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# opus

## Definition — verbatim
(used, not defined)

> "| Upgrade to opus | YES | Challenging tasks need reasoning |" — .claude/skills/planner/scripts/executor.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 91 | used here | High-reasoning model tier permitted for upgrading challenging delegation tasks. |
| templates/agents/critic.shared.md | 3 | used here | Model tier configuration set to opus in critic agent frontmatter. |
| templates/agents/negotiation.shared.md | 3 | used here | Model tier configuration set to opus in negotiation specialist frontmatter. |

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
`opus` is an external LLM model tier identifier (Anthropic Claude Opus) configured for high-reasoning agent tasks rather than an engineering lifecycle concept.
