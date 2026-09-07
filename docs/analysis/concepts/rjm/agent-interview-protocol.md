---
package: rjm
name: Agent Interview Protocol
slug: agent-interview-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Interview Protocol

## Definition — verbatim
> "This protocol provides a standardized process for discovering and documenting agent capabilities." — .agents/governance/agent-interview-protocol.md:5

## Also called — verbatim
> "Interview Protocol" — docs/agent-governance.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 1 | defines | Defined as the standardized capability discovery process and questionnaire for all agents. |

## Consumes
Agent definitions, system prompts, operational history, and architectural specifications.

## Produces
Completed interview response documents stored in `.agents/governance/interviews/[agent]-interview.md`.

## When applied
> "Before release" — .agents/governance/agent-interview-protocol.md:11 for new agents, before deployment for capability changes, and quarterly or on routing failures.

## Sub-concepts
- 8-standardized-questions
- interview-process
- quality-assurance-checklist
- interview-cadence

## Part of
- agent-system-governance

## Implementation status
defects: missing-path, doc-drift (specified archive directory .agents/governance/interviews/archive/ does not exist per .agents/governance/agent-interview-protocol.md:182; Capabilities Matrix mentioned at line 188 is marked unmaintained with no path)

## Design notes
The Agent Interview Protocol provides an empirical discovery and validation mechanism for establishing agent boundaries in rjm. By subjecting each agent to an eight-question standardized interrogation, it extracts concrete capabilities, explicit limitations, pairing preferences, and failure modes directly from the agent persona. Without this protocol, agent capabilities would remain undocumented or drift from their actual runtime behavior, degrading orchestrator routing accuracy.
