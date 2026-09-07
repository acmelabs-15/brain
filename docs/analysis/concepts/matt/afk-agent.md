---
package: matt
name: AFK agent
slug: afk-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AFK agent

## Definition — verbatim
> "It is the authoritative specification that an AFK agent will work from." — skills/engineering/triage/AGENT-BRIEF.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/AGENT-BRIEF.md | 3 | defined here | Identifies the AFK agent as the consumer of the authoritative agent brief contract. |
| skills/engineering/triage/SKILL.md | 35 | used here | Describes the ready-for-agent state as fully specified and prepared for autonomous AFK agent pickup. |

## Consumes
An issue or PR transitioned to `ready-for-agent` containing an authoritative agent brief.

## Produces
An implemented bug fix, feature enhancement, or updated pull request diff without human supervision.

## When applied
Applied when issues or PRs enter the `ready-for-agent` state for autonomous background execution.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift, missing-path

## Design notes
An execution role describing an autonomous coding agent operating "away from the keyboard" without human interaction. In matt's triage workflow, tasks prepared for an AFK agent require self-contained, durable specifications with complete acceptance criteria and explicit scope boundaries, enabling the agent to execute to completion without needing to ask clarifying questions.
