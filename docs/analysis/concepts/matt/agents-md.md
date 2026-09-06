---
package: matt
name: AGENTS.md
slug: agents-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
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

# AGENTS.md

## Definition — verbatim
> "the reference you write agent-facing documents against: a skill, an `AGENTS.md` / `CLAUDE.md`" — docs/productivity/writing-for-agents.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/remove-em-dashes-repo-wide.md | 5 | used here | Identified as a repository steering file instructing agents against introducing em-dashes. |
| docs/productivity/writing-for-agents.md | 3 | used here | Listed as an agent-facing steering document governed by writing-for-agents principles. |
| external/grilling.md | 50 | used here | Discusses agent instructions and context loading constraints. |
| external/setup-matt-pocock-skills.md | 33 | used here | Notes AGENTS.md configuration during repository skill setup. |
| external/wayfinder.md | 33 | used here | Mentions reading agent conventions from repository steering files. |
| external/writing-for-agents.md | 25 | used here | References AGENTS.md as an always-loaded steering file incurring context load. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 24 | used here | Checks for AGENTS.md presence when inspecting repo agent configuration. |
| skills/in-progress/retro/SKILL.md | 41 | used here | Evaluates possible improvements to AGENTS.md rules after work sessions. |
| skills/productivity/README.md | 20 | used here | References AGENTS.md authoring guidance in productivity tools. |
| skills/productivity/writing-for-agents/SKILL.md | 6 | used here | Names editing AGENTS.md as an automatic trigger for writing-for-agents. |

## Consumes
Repository rules, coding conventions, architectural invariants, and agent behavior guidelines.

## Produces
An always-loaded steering document providing persistent instructions for coding agents across sessions.

## When applied
Read automatically by agent harnesses at session start; edited when repository conventions evolve.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An agent steering configuration artifact placed at the repository root. It defines persistent conventions, behavioral guardrails, and project-specific instructions that are injected into an agent's context window on every turn.
