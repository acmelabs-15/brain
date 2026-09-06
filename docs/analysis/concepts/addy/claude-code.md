---
package: addy
name: Claude Code
slug: claude-code
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Claude Code

## Definition — verbatim
(used, not defined)
> "# Hosts that validate hook output (Codex CLI, Claude Code) reject other shapes." — hooks/session-start.sh:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| external/documentation-and-adrs.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| external/doubt-driven-development.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| external/frontend-ui-engineering.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| external/shipping-and-launch.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| external/source-driven-development.md | 15 | used here | Listed as a supported AI coding agent under Setup. |
| hooks/sdd-cache-post.sh | 37 | used here | Referenced in hook comment detailing WebFetch tool_response payload schema. |
| hooks/sdd-cache-pre.sh | 6 | used here | Referenced in PreToolUse hook comment regarding deliverable caching. |
| hooks/session-start.sh | 7 | used here | Referenced in session-start hook comment regarding hook output validation. |

## Consumes
Skills and hooks.

## Produces
Agent execution environment.

## When applied
When running agent-skills via Claude Code CLI.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift

## Design notes
Anthropic's terminal-based AI coding agent, serving as a primary target environment and execution host for addy's skills and hooks.
