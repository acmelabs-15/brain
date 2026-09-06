---
package: matt
name: context pointer
slug: context-pointer
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# context pointer

## Definition — verbatim
> "A **context pointer** is a reference held in the agent's context that names some out-of-context material and encodes the condition for reaching it." — skills/productivity/writing-for-agents/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 58 | defined here | Explains linking implementation issues to exploratory prototype branches via context pointers. |
| docs/engineering/prototype.md | 30 | used here | Describes referencing throwaway branches from tracking issues without polluting the main branch. |
| docs/engineering/research.md | 61 | used here | Explains linking research ticket findings on branches back to parent tracking tickets. |
| external/prototype.md | 41 | used here | Documents the use of context pointers on implementation issues to locate unmerged prototype branches. |
| external/research.md | 51 | used here | Mentions context pointers connecting tickets to throwaway research branches. |
| skills/engineering/prototype/SKILL.md | 26 | defined here | Mandates recording a context pointer on the tracking issue pointing to the prototype branch. |
| skills/engineering/wayfinder/SKILL.md | 125 | defined here | Instructs the agent to append a context pointer to the map's Decisions-so-far section when resolving a ticket. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 93 | defined here | Directs adding a context pointer in `CLAUDE.md`/`AGENTS.md` referencing package boundary documentation. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 9 | used here | Frames a skill's description as an always-loaded top-level context pointer. |
| skills/productivity/writing-for-agents/SKILL.md | 12 | defined here | Definitional statement detailing what a context pointer is and how its wording regulates activation. |

## Consumes
Out-of-context documentation, branch, ticket, or artifact.

## Produces
A concise in-context reference encoding the condition and trigger branches for reading the target.

## When applied
When designing agent instructions, linking external artifacts, or managing knowledge across sessions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean (in skills/engineering/wayfinder/, skills/productivity/writing-for-agents/, skills/in-progress/setup-ts-deep-modules/); defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Context pointers are the foundational knowledge retrieval primitive in Matt's design: compact, trigger-encoded in-context references that allow agents to discover and read out-of-context material on demand without paying permanent token costs.
