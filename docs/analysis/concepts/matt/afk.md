---
package: matt
name: AFK
slug: afk
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# AFK

## Definition — verbatim
> "Every ticket is either **HITL** (human in the loop, worked _with_ a human who speaks for themselves) or **AFK**, driven by the agent alone." — skills/engineering/wayfinder/SKILL.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 202 | defined here | Defines HITL and AFK ticket classification for wayfinder planning tickets. |
| docs/engineering/research.md | 61 | used here | Explains that research tickets run AFK via background subagents without human intervention. |
| docs/engineering/to-spec.md | 42 | used here | Notes that AFK polling agents may mistakenly treat parent spec issues as implementation work orders. |
| docs/engineering/triage.md | 35 | used here | Defines the ready-for-agent state as indicating an issue is ready for an AFK agent. |
| docs/engineering/wayfinder.md | 44 | used here | Classifies wayfinder decision tickets into HITL or AFK execution modes. |
| docs/productivity/writing-for-agents.md | 13 | used here | Recommends applying writing guidance to system and AFK prompts read by agents. |
| external/research.md | 51 | used here | Documents that wayfinder fires AFK research subagents in parallel on disposable branches. |
| external/to-spec.md | 43 | used here | Discusses risk of AFK agents picking up parent specs labelled ready-for-agent. |
| external/triage.md | 36 | used here | Explains that ready-for-agent marks issues fully specified for AFK agent pickup. |
| external/wayfinder.md | 46 | used here | Summarizes the four ticket types categorized by HITL or AFK mode. |
| external/writing-for-agents.md | 30 | used here | Lists AFK prompts among critical agent-read documents requiring ruthless editing. |
| skills/engineering/wayfinder/SKILL.md | 75 | defined here | Establishes the binary classification of tickets as either HITL or AFK. |

## Consumes
A fully specified work item, ticket, or research question ready for unassisted agent execution.

## Produces
Completed research findings, draft code commits, or autonomous task resolutions without human intervention.

## When applied
Applied when executing research tickets in wayfinder or running autonomous batch agents on issues labelled ready-for-agent.

## Sub-concepts
none

## Part of
wayfinder, triage

## Implementation status
defects: doc-drift, orphan (AFK agents polling for ready-for-agent misinterpret parent specs as execution work orders in to-spec; research subagents open PRs on throwaway branches per #576)

## Design notes
An execution mode classification distinguishing autonomous agent tasks from human-in-the-loop interactions, allowing agents to burn down research tickets and well-specified implementation slices without human intervention.
