---
package: rjm
name: retrospective agent
slug: retrospective-agent
kind: role
package_phase: rjm:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retrospective agent

## Definition — verbatim
> "**Senior Analytical Reviewer** diagnosing agent performance, extracting learnings, and transforming insights into improved strategies using structured retrospective frameworks." — .claude/agents/retrospective.md:13

## Also called — verbatim
Retrospective Agent (Reflector) — .claude/agents/retrospective.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 564 | used here | Recommended as the owning role for quarterly review of PROJECT-CONSTRAINTS.md. |
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 231 | used here | Assigned responsibility for auto-extracting episodes and populating reflexion memories at session end. |
| .agents/governance/PROJECT-CONSTRAINTS.md | 254 | used here | Listed as document owner conducting quarterly governance reviews aligned with agent consolidation. |
| .claude/agents/retrospective.md | 9 | defined here | Primary agent definition file detailing core identity, frameworks, and review methodology. |

## Consumes
Session transcripts, git commit logs, PR reviews, error outputs, and handoff summaries.

## Produces
Structured retrospective reports, Five Whys analyses, updated memory episodes, and governance improvement recommendations.

## When applied
Invoked at session close, after major milestone delivery, or following significant execution failures.

## Sub-concepts
none

## Part of
agent-team, session-protocol

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
The Retrospective Agent is a specialist role responsible for extracting systemic learnings from completed sessions and incidents. Utilizing structured frameworks (such as Five Whys, timeline analysis, and learning matrices), the retrospective agent diagnoses failure patterns, quantifies process adherence, and transforms operational experience into persistent institutional memory.
