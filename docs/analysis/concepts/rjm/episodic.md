---
package: rjm
name: Episodic
slug: episodic
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Episodic

## Definition — verbatim
(used, not defined)

> "system (Tier 1 Semantic, Tier 2 Episodic, Tier 3 Causal, plus the BLOCKING" — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Also called — verbatim
Tier 2 Episodic — .agents/architecture/ADR-063-memory-skill-decomposition.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 31 | used here | Identified as Tier 2 in the four-tier memory system recording session events, tasks, and trajectories. |

## Consumes
Session execution logs, tool invocation records, test outcomes, and task completion summaries.

## Produces
Historical episodic records capturing past problem-solving attempts and outcomes.

## When applied
Queried during session startup and task planning to recall past approaches to similar problems.

## Sub-concepts
none

## Part of
four-tier-memory

## Implementation status
out-of-scope

## Design notes
Episodic memory serves as Tier 2 in rjm's memory architecture, capturing the temporal narrative of agent interactions, tasks, and problem-solving trajectories. By preserving concrete session episodes, the system enables agents to reference previous debugging sessions, avoid repeating flawed implementation paths, and maintain longitudinal continuity.
