---
package: rjm
path: .agents/governance/interview-response-template.md
type: agent
bytes: 4371
unit: inv-rjm-54
in_scope_via: .agents/governance/agent-interview-protocol.md
aliases: []
memo_inputs:
  - {path: .agents/governance/interview-response-template.md, sha256: ce90ef506e805f7ff9e945fb97ea609c0f56cfaa5fda3aac08c327770f3b680a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/interview-response-template.md

## Purpose — required, verbatim
> "What is your core specialty? (One sentence)" — .agents/governance/interview-response-template.md:17

(no explicit purpose statement)

## Design intent — required
Standardized questionnaire response template used to record the outputs of the Agent Interview Protocol (`.agents/governance/agent-interview-protocol.md`). Provides the structured schema for capturing metadata (agent name, interview date, interviewer, version, previous interview), responses to the 8 standard capability questions (core specialty, task examples with outputs, technical/scope/dependency/output limitations, pairing preferences with handoff artifacts, input expectations with good/insufficient examples, output delivery specifications, P0/P1/P2 priority invocation criteria, and misuse anti-patterns with alternatives), and validation notes covering tested capabilities, known issues, and cross-references.

## Phase — required
cross-phase

## Inputs — required
- Agent interview sessions executed according to `.agents/governance/agent-interview-protocol.md`
- Target agent documentation, prompt instructions, and observed operational behaviors
- Interviewer notes, capability examples, and verified limitations

## Outputs — required
- Completed agent interview documents stored in `.agents/governance/interviews/[agent]-interview.md`
- Structured capability data for consumption by orchestrator routing logic and multi-agent coordination

## Invokes — required
none

## Invoked by — required
- template .agents/governance/agent-interview-protocol.md — .agents/governance/agent-interview-protocol.md:130
- template .agents/governance/agent-interview-protocol.md — .agents/governance/agent-interview-protocol.md:187

## Concepts named — required, verbatim
- `Agent Interview Response Template` — .agents/governance/interview-response-template.md:1 — defined here
- `Core Specialty` — .agents/governance/interview-response-template.md:15 — used here
- `Specific Tasks` — .agents/governance/interview-response-template.md:25 — used here
- `Limitations` — .agents/governance/interview-response-template.md:39 — used here
- `Technical Limitations` — .agents/governance/interview-response-template.md:43 — defined here
- `Scope Limitations` — .agents/governance/interview-response-template.md:48 — defined here
- `Dependency Limitations` — .agents/governance/interview-response-template.md:53 — defined here
- `Output Limitations` — .agents/governance/interview-response-template.md:58 — defined here
- `Agent Pairings` — .agents/governance/interview-response-template.md:65 — used here
- `Handoff Artifact` — .agents/governance/interview-response-template.md:69 — defined here
- `Input Expectations` — .agents/governance/interview-response-template.md:77 — used here
- `Minimum Required Context` — .agents/governance/interview-response-template.md:81 — defined here
- `Output Format` — .agents/governance/interview-response-template.md:112 — used here
- `When to Use` — .agents/governance/interview-response-template.md:145 — used here
- `When NOT to Use` — .agents/governance/interview-response-template.md:169 — used here
- `Validation Notes` — .agents/governance/interview-response-template.md:193 — defined here

## Structure
- # Agent Interview Response Template
- ## Metadata
- ## Question 1: Core Specialty
- ## Question 2: Specific Tasks
- ## Question 3: Limitations
- ### Technical Limitations
- ### Scope Limitations
- ### Dependency Limitations
- ### Output Limitations
- ## Question 4: Agent Pairings
- ## Question 5: Input Expectations
- ### Minimum Required Context
- ### Preferred Format
- ### Optional but Helpful
- ### Example: Good Task Description
- ### Example: Insufficient Task Description
- ## Question 6: Output Format
- ### Primary Deliverable
- ### Output Structure
- ### Handoff Artifacts
- ## Question 7: When to Use
- ### P0 - Always Use
- ### P1 - Strongly Recommended
- ### P2 - Consider Using
- ## Question 8: When NOT to Use
- ### Use Different Agent Instead
- ### Prerequisites Not Met
- ### Common Misuse Patterns
- ## Validation Notes
- ### Verified Capabilities
- ### Known Issues
- ### Cross-Reference

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Forms the direct artifact pair with `agent-interview-protocol.md`, ensuring interviews across all agents produce identically formatted markdown documents.
- Includes granular distinction among 4 types of limitations: technical, scope, dependency, and output.
- Features explicit good vs. insufficient task description examples for input expectations.

## Context cost
4371 bytes, 212 lines, ~1100 tokens.
