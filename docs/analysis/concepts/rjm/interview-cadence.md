---
package: rjm
name: Interview Cadence
slug: interview-cadence
kind: reference
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

# Interview Cadence

## Definition — verbatim
(used, not defined)

> "## Interview Cadence" — .agents/governance/agent-interview-protocol.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 161 | defined here | Tabular specification defining the frequency and trigger events for interviewing new, core, and specialized agents. |

## Consumes
Agent lifecycle status events (creation, major version bump, capability addition, routing failure).

## Produces
Scheduled review triggers and re-interview tasks.

## When applied
Applied across the agent lifecycle to trigger re-interviews before first release, quarterly for core agents, semi-annually for specialized agents, and on-demand following routing failures.

## Sub-concepts
none

## Part of
- agent-interview-protocol

## Implementation status
defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix)

## Design notes
Interview Cadence establishes the maintenance schedule for keeping agent documentation synchronized with code evolution. By mapping distinct review frequencies to agent tiers and operational triggers (such as routing failures or major version increments), it prevents capability drift. Without a defined cadence, interview documents would quickly become stale historical records.
