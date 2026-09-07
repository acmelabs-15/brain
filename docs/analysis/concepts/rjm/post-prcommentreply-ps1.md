---
package: rjm
name: Post-PRCommentReply.ps1
slug: post-prcommentreply-ps1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-PRCommentReply.ps1

## Definition — verbatim
(used, not defined)

> "| gh | pr comment | .claude/skills/github/scripts/pr/Post-PRCommentReply.ps1 | ✅ |" — .agents/architecture/ADR-012-skill-catalog-mcp.md:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 201 | used here | Mapped in the capability mapping table as the executable skill implementation for gh pr comment. |

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
defects: missing-path, internal-contradiction

## Design notes
Post-PRCommentReply.ps1 is a concrete PowerShell script file path for posting PR comment responses rather than an operational lifecycle concept.
