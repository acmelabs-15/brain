---
package: rjm
name: claude-mem-context
slug: claude-mem-context
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/commands/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/skills/adr-review/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/skills/adr-review/scripts/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/skills/chaos-experiment/scripts/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/skills/codeql-scan/scripts/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .claude/skills/merge-resolver/scripts/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: .codeql/scripts/CLAUDE.md, sha256: 67da10a2206ee4898ab705c1a2634b2cb3bbccc98b8ebf240fd0e61e3c961896}
  - {path: scripts/github_core/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
  - {path: scripts/hook_utilities/CLAUDE.md, sha256: dbfec62ab652ff1014cf72310231c16dbb548f4434582da34abc5e9d9be9961d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# claude-mem-context

## Definition — verbatim
(used, not defined)

> "<claude-mem-context>" — .claude/agents/CLAUDE.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/commands/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/skills/adr-review/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/skills/adr-review/scripts/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/skills/chaos-experiment/scripts/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/skills/codeql-scan/scripts/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .claude/skills/merge-resolver/scripts/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| .codeql/scripts/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| scripts/github_core/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |
| scripts/hook_utilities/CLAUDE.md | 1 | used here | Opening XML tag delineating auto-generated claude-mem context cache section. |

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
Non-lifecycle concept; an XML container tag automatically injected by claude-mem into repository instruction files to delineate cached recent activity sections.
