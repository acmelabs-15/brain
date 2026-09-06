---
package: matt
name: CLAUDE.md
slug: claude-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CLAUDE.md

## Definition — verbatim
(used, not defined)

> "`CLAUDE.md` is standing context about the project, loaded into every session whether it's relevant or not." — docs/productivity/handoff.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 17 | used here | Cited as part of the repository configuration affected if skills/ were restructured for Codex. |
| .changeset/remove-em-dashes-repo-wide.md | 5 | used here | Listed among the documentation and skill files stripped of em-dashes. |
| docs/productivity/handoff.md | 56 | used here | Section heading distinguishing temporary handoff notes from standing project context in CLAUDE.md. |
| docs/productivity/wait-what.md | 23 | used here | Notes that the skill reuses domain and technical vocabulary defined in global CLAUDE.md. |
| docs/productivity/writing-for-agents.md | 3 | used here | Identifies CLAUDE.md as a primary agent-facing reference document to write against. |
| external/grilling.md | 42 | used here | References CLAUDE.md as a repository context document. |
| external/handoff.md | 52 | used here | Distinguishes transient handoff documents from standing project context kept in CLAUDE.md. |
| external/setup-matt-pocock-skills.md | 27 | used here | References CLAUDE.md during workspace and skill setup instructions. |
| external/tdd.md | 31 | used here | References CLAUDE.md for testing commands and project guidelines. |
| external/wait-what.md | 35 | used here | Notes reuse of vocabulary from CLAUDE.md during explanation re-pitching. |
| external/wayfinder.md | 33 | used here | References CLAUDE.md for repository structure and context. |
| external/writing-for-agents.md | 25 | used here | Notes that writing-for-agents governs how documents like CLAUDE.md should be written. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 24 | used here | Instructs the agent to inspect CLAUDE.md during repository onboarding and skill setup. |
| skills/in-progress/retro/SKILL.md | 41 | used here | Mentions updating project rules or learnings in CLAUDE.md during retrospectives. |
| skills/productivity/README.md | 20 | used here | Cites CLAUDE.md in the summary of the writing-for-agents skill. |
| skills/productivity/writing-for-agents/SKILL.md | 6 | used here | Identifies CLAUDE.md as an agent-consumed document governed by the writing-for-agents reference. |

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
defects: [missing-path, other, doc-drift, orphan] in citing files

## Design notes
CLAUDE.md is the standard file name for persistent Claude Code workspace instructions and project configuration rather than an operational lifecycle concept.
