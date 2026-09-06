---
package: matt
name: claude plugins install mattpocock-skills
slug: claude-plugins-install-mattpocock-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# claude plugins install mattpocock-skills

## Definition — verbatim
(used, not defined)

> "claude plugins install mattpocock-skills" — .agents/install-block.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 32 | used here | Noted as the documented CLI installation route after acceptance into Claude Code's official marketplace. |
| .agents/install-block.md | 12 | used here | Specified as the canonical shell command for installing the skill plugin in Claude Code. |

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
clean

## Design notes
claude plugins install mattpocock-skills is a shell CLI command for installing the plugin package rather than an operational lifecycle concept.
