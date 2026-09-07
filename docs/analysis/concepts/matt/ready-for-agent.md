---
package: matt
name: ready-for-agent
slug: ready-for-agent
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ready-for-agent

## Definition — verbatim
> "- `ready-for-agent`: fully specified, ready for an AFK agent" — skills/engineering/triage/SKILL.md:35

## Also called — verbatim
> "agent-ready" — docs/engineering/to-tickets.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-spec.md | 42 | used here | Explains why specs receive the ready-for-agent label to denote completeness, noting hazards with AFK pollers. |
| docs/engineering/triage.md | 35 | defined here | State role table entry defining ready-for-agent as fully specified with an agent brief attached. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Setup table defining ready-for-agent as one of five canonical triage labels. |
| external/to-spec.md | 42 | defined here | External catalog explanation of why to-spec applies the ready-for-agent label. |
| external/triage.md | 36 | defined here | External documentation defining ready-for-agent state role. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 9 | used here | Maps canonical role ready-for-agent to the repository issue tracker label string. |
| skills/engineering/to-spec/SKILL.md | 19 | used here | Specifies that published specs must receive the ready-for-agent label. |
| skills/engineering/to-tickets/SKILL.md | 63 | used here | Applies ready-for-agent triage label to published tickets without requiring extra triage. |
| skills/engineering/triage/AGENT-BRIEF.md | 3 | used here | Template for agent briefs generated when transitioning an issue to ready-for-agent. |
| skills/engineering/triage/SKILL.md | 35 | defined here | Defines ready-for-agent state role as fully specified, ready for an AFK agent. |

## Consumes
An issue or ticket with complete specification, clear acceptance criteria, and an attached agent brief.

## Produces
A categorized work item eligible for autonomous execution by an AFK coding agent.

## When applied
Applied during triage by `triage`, upon spec publication by `to-spec`, or upon ticket breakdown by `to-tickets`.

## Sub-concepts
none

## Part of
triage-role, triage

## Implementation status
clean

## Design notes
`ready-for-agent` is a foundational state role in Matt's triage and planning workflow. It signifies that a task or issue is completely specified with unambiguous acceptance criteria and context briefs, allowing an autonomous or "away-from-keyboard" (AFK) agent to execute the work without human intervention. In `to-spec` and `to-tickets`, applying this status marks items as executable directly from the frontier without manual re-triage.
