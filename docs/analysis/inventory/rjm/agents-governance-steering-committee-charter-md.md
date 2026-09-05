---
package: rjm
path: .agents/governance/steering-committee-charter.md
type: agent
bytes: 5248
unit: inv-rjm-55
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/steering-committee-charter.md

## Purpose — required, verbatim
> "The Agent System Steering Committee governs the evolution of the multi-agent system, ensuring agents remain focused, non-overlapping, and effective. The committee reviews agent proposals, identifies consolidation opportunities, and maintains system health." — .agents/governance/steering-committee-charter.md:5

## Design intent — required
Establishes the governance charter, operational structure, decision criteria, and escalation workflows for the multi-agent steering committee. It defines five formal roles (Chair, Architect Representative, Security Representative, DevOps Representative, User Representative), a quorum rule (minimum 3 roles), meeting structures, objective criteria for approving new agents (e.g., <20% overlap, 30-second entry criteria, explicit limitations), and consolidation triggers (e.g., >20% overlap, <5% monthly usage). Without it, agent systems suffer uncontrolled proliferation ("agent sprawl"), boundary blurring, overlapping responsibilities, unmanaged maintenance burdens, and inconsistent retirement processes.

## Phase — required
cross-phase

## Inputs — required
- Architectural proposals: "Proposer submits ADR using ADR-TEMPLATE.md" — .agents/governance/steering-committee-charter.md:64
- Overlap candidate analysis: "Analyst identifies candidates using overlap analysis" — .agents/governance/steering-committee-charter.md:97
- Escalations from specialist agents: routing conflicts from Orchestrator, agent failures from QA, security concerns from Security, design conflicts from Architect, scope creep from Critic (.agents/governance/steering-committee-charter.md:133-137).
- System health and usage metrics: "Usage metrics, consolidation candidates, effectiveness" (.agents/governance/steering-committee-charter.md:30), invocation frequency under 5%, and routing errors exceeding 3 misroutes/month (.agents/governance/steering-committee-charter.md:90-91).

## Outputs — required
- Committee vote outcomes and action items: "+1 (Approve), 0 (Abstain), -1 (Reject with reason)" (.agents/governance/steering-committee-charter.md:76-78).
- Migration documentation: "30-day deprecation notice" (.agents/governance/steering-committee-charter.md:102) and capability mappings.
- Governance records: meeting minutes in `.agents/governance/minutes/`, decision logs in `.agents/governance/decisions/`, and quarterly health reports in `.agents/governance/reports/` (.agents/governance/steering-committee-charter.md:143-145).
- Maintained agent catalog in `CLAUDE.md`, capabilities matrix, design principles document, and charter (.agents/governance/steering-committee-charter.md:149-152).

## Invokes — required
- template ADR-TEMPLATE.md — .agents/governance/steering-committee-charter.md:64
- doc agent-design-principles.md — .agents/governance/steering-committee-charter.md:118
- doc CLAUDE.md — .agents/governance/steering-committee-charter.md:149
- doc agent-consolidation-process.md — .agents/governance/steering-committee-charter.md:167
- doc agent-interview-protocol.md — .agents/governance/steering-committee-charter.md:168

## Invoked by — required
- doc agent-governance.md — docs/agent-governance.md:12

## Concepts named — required, verbatim
- `Agent System Steering Committee Charter` — .agents/governance/steering-committee-charter.md:1 — defined here
- `Agent System Steering Committee` — .agents/governance/steering-committee-charter.md:5 — defined here
- `Committee Composition` — .agents/governance/steering-committee-charter.md:7 — defined here
- `Chair` — .agents/governance/steering-committee-charter.md:13 — defined here
- `Architect Representative` — .agents/governance/steering-committee-charter.md:14 — defined here
- `Security Representative` — .agents/governance/steering-committee-charter.md:15 — defined here
- `DevOps Representative` — .agents/governance/steering-committee-charter.md:16 — defined here
- `User Representative` — .agents/governance/steering-committee-charter.md:17 — defined here
- `Quorum` — .agents/governance/steering-committee-charter.md:19 — defined here
- `Meeting Cadence` — .agents/governance/steering-committee-charter.md:24 — defined here
- `Decision Criteria` — .agents/governance/steering-committee-charter.md:49 — defined here
- `New Agent Approval` — .agents/governance/steering-committee-charter.md:51 — defined here
- `Approval Workflow` — .agents/governance/steering-committee-charter.md:61 — defined here
- `Voting Rules` — .agents/governance/steering-committee-charter.md:72 — defined here
- `Consolidation Process` — .agents/governance/steering-committee-charter.md:83 — defined here
- `Migration Plan Requirements` — .agents/governance/steering-committee-charter.md:108 — defined here
- `Design Principles Enforcement` — .agents/governance/steering-committee-charter.md:116 — defined here
- `Escalation Path` — .agents/governance/steering-committee-charter.md:129 — defined here
- `Amendment Process` — .agents/governance/steering-committee-charter.md:154 — defined here

## Structure
- Agent System Steering Committee Charter
- Purpose
- Committee Composition
- Roles
- Quorum
- Meeting Cadence
- Regular Reviews
- Meeting Structure
- Decision Criteria
- New Agent Approval
- Approval Workflow
- Voting Rules
- Consolidation Process
- Triggers for Consolidation Review
- Consolidation Workflow
- Migration Plan Requirements
- Design Principles Enforcement
- Escalation Path
- Documentation Requirements
- Committee Produces
- Committee Maintains
- Amendment Process
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/governance/steering-committee-charter.md:143 · Specifies that meeting minutes are stored in `.agents/governance/minutes/`, but the directory does not exist in the repository.
- missing-path · .agents/governance/steering-committee-charter.md:144 · Specifies that the decision log is stored in `.agents/governance/decisions/`, but the directory does not exist in the repository.
- missing-path · .agents/governance/steering-committee-charter.md:145 · Specifies that quarterly health reports are stored in `.agents/governance/reports/`, but the directory does not exist in the repository.
- doc-drift · .agents/governance/steering-committee-charter.md:150 · Lists "Capabilities matrix (linked from capabilities)" under Committee Maintains without providing a concrete file path or valid hyperlink.

## Observations
- Human/Agent dual representation: The committee structure supports hybrid staffing where roles can be represented by specialized agents or human engineers (e.g. architect agent or human architect, security agent or security engineer).
- Quantitative anti-sprawl gates: Sets a strict <20% functional overlap threshold for new agent approval, coupled with active consolidation triggers when usage drops below 5% monthly or capability overlap exceeds 20%.
- Unanimous amendment threshold: Changing the committee charter requires a written proposal, a 2-week comment period, and unanimous committee approval.

## Context cost
5248 bytes, ~1300 tokens. References 5 architecture and governance documents.
