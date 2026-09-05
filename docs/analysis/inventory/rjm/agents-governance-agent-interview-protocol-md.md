---
package: rjm
path: .agents/governance/agent-interview-protocol.md
type: agent
bytes: 5699
unit: inv-rjm-54
in_scope_via: .agents/governance/agent-design-principles.md
aliases: []
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/agent-interview-protocol.md

## Purpose — required, verbatim
> "This protocol provides a standardized process for discovering and documenting agent capabilities. It ensures all agents have consistent, complete documentation that enables accurate orchestrator routing and informed agent selection." — .agents/governance/agent-interview-protocol.md:5

## Design intent — required
Standardized discovery and elicitation protocol for evaluating and documenting agent capabilities to support orchestrator routing and multi-agent coordination. Establishes an 8-question interview framework covering core specialty, specific tasks, limitations (technical, scope, dependency, output), agent pairings (workflow relationships), input expectations, output format/structure, invocation scenarios (P0/P1/P2 priorities), and anti-patterns/when not to use. Defines a 4-step interview execution process (Prepare, Conduct, Validate, Document) along with a quality assurance checklist, archiving cadence, and update rules.

## Phase — required
cross-phase

## Inputs — required
- Existing agent definitions and documentation across platforms
- Historical usage data and orchestrator misrouting reports
- Question responses recorded via the standardized response template (`.agents/governance/interview-response-template.md`)

## Outputs — required
- Completed agent interview documentation stored in `.agents/governance/interviews/[agent]-interview.md`
- Annual/quarterly interview archives in `.agents/governance/interviews/archive/[agent]-interview-[YYYY-MM-DD].md`
- Updated routing algorithms and capability matrix entries

## Invokes — required
- template interview-response-template.md — .agents/governance/agent-interview-protocol.md:130
- template interview-response-template.md — .agents/governance/agent-interview-protocol.md:187
- agent agent-design-principles.md — .agents/governance/agent-interview-protocol.md:189

## Invoked by — required
- agent .agents/governance/agent-design-principles.md — .agents/governance/agent-design-principles.md:343
- agent .agents/governance/agent-consolidation-process.md — .agents/governance/agent-consolidation-process.md:307
- agent .agents/governance/steering-committee-charter.md — .agents/governance/steering-committee-charter.md:168

## Concepts named — required, verbatim
- `Agent Interview Protocol` — .agents/governance/agent-interview-protocol.md:1 — defined here
- `8 Standardized Questions` — .agents/governance/agent-interview-protocol.md:17 — defined here
- `Core Specialty` — .agents/governance/agent-interview-protocol.md:19 — defined here
- `Specific Tasks` — .agents/governance/agent-interview-protocol.md:27 — defined here
- `Limitations` — .agents/governance/agent-interview-protocol.md:39 — defined here
- `Agent Pairings` — .agents/governance/agent-interview-protocol.md:52 — defined here
- `Input Expectations` — .agents/governance/agent-interview-protocol.md:64 — defined here
- `Output Format` — .agents/governance/agent-interview-protocol.md:78 — defined here
- `When to Use` — .agents/governance/agent-interview-protocol.md:92 — defined here
- `When NOT to Use` — .agents/governance/agent-interview-protocol.md:104 — defined here
- `Interview Process` — .agents/governance/agent-interview-protocol.md:117 — defined here
- `Quality Assurance Checklist` — .agents/governance/agent-interview-protocol.md:148 — defined here
- `Interview Cadence` — .agents/governance/agent-interview-protocol.md:161 — defined here
- `Capabilities Matrix` — .agents/governance/agent-interview-protocol.md:188 — used here

## Structure
- # Agent Interview Protocol
- ## Purpose
- ## When to Use This Protocol
- ## The 8 Standardized Questions
- ### Question 1: Core Specialty
- ### Question 2: Specific Tasks
- ### Question 3: Limitations
- ### Question 4: Agent Pairings
- ### Question 5: Input Expectations
- ### Question 6: Output Format
- ### Question 7: When to Use
- ### Question 8: When NOT to Use
- ## Interview Process
- ### Step 1: Prepare
- ### Step 2: Conduct Interview
- ### Step 3: Validate
- ### Step 4: Document
- ## Quality Assurance Checklist
- ## Interview Cadence
- ## Maintenance
- ### Updating Interviews
- ### Archiving
- ## Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/governance/agent-interview-protocol.md:182 · Specified archive directory .agents/governance/interviews/archive/ does not exist.
- doc-drift · .agents/governance/agent-interview-protocol.md:188 · Mentions "Capabilities Matrix" across multiple validation steps but marks it "(not currently maintained)" with no file path.

## Observations
- Provides an operational mechanism to enforce Agent Design Principle 3 (Explicit Limitations) and Principle 2 (Clear Entry Criteria) by interviewing agents directly.
- Mandates interview cadence: before first release for new agents, quarterly for core agents, semi-annually for specialized agents, and on-demand following routing failures.
- Pairs directly with `interview-response-template.md` as the recording vehicle.

## Context cost
5699 bytes, 196 lines, ~1450 tokens.
