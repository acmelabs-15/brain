---
package: matt
name: agent brief
slug: agent-brief
kind: artifact
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent brief

## Definition — verbatim
> "An agent brief is a structured comment posted on a GitHub issue or PR when it moves to `ready-for-agent`. It is the authoritative specification that an AFK agent will work from." — skills/engineering/triage/AGENT-BRIEF.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 57 | defined here | Defined as the durable contract posted when an issue moves to ready-for-agent. |
| external/triage.md | 36 | defined here | External guide description of the structured specification comment created during triage. |
| skills/engineering/triage/AGENT-BRIEF.md | 3 | defined here | Defined as the authoritative specification comment on an issue or PR for AFK agent execution. |
| skills/engineering/triage/AGENT-BRIEF.md | 42 | defined here | Markdown template heading for the structured agent brief artifact. |
| skills/engineering/triage/SKILL.md | 79 | used here | Directive to post an agent brief comment when setting an issue to ready-for-agent. |

## Consumes
Reproduced bug details, verified test assertions, or fully refined enhancement requirements.

## Produces
A durable, self-contained markdown comment on the issue tracker serving as an autonomous work order.

## When applied
Applied when transitioning an issue or external PR to the ready-for-agent state.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift (from skills-engineering-triage-agent-brief-md.md: mentions GitHub issue or PR specifically, whereas SKILL.md and design support alternative trackers)

## Design notes
An `agent brief` is the primary output artifact of the triage process. Unlike conversational comments or vague bug reports, a brief acts as an immutable specification contract naming types, interfaces, expected behaviors, and verification tests without fragile line numbers, enabling AFK agents to implement changes reliably even weeks after triage.
