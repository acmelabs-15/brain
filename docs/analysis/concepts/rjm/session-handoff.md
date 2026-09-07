---
package: rjm
name: Session Handoff
slug: session-handoff
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session Handoff

## Definition — verbatim
> "At session end, create a handoff document:" — .agents/AGENT-SYSTEM.md:1189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1185 | defines | Establishes the session handoff specification and HANDOFF.md template for cross-session continuity. |

## Consumes
Completed tasks, context for the next session, pending backlog items, decisions made, and modified file lists from the completed session.

## Produces
A structured markdown handoff document (`HANDOFF.md` or per-issue continuity records under `.agents/sessions/handoffs/`).

## When applied
> "At session end, create a handoff document:" — .agents/AGENT-SYSTEM.md:1189

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A standardized markdown handoff document generated at the conclusion of every work session. By explicitly documenting work completed, context required by subsequent sessions, pending tasks, decisions with rationale, and modified files, it guarantees operational continuity across agent restarts and context boundaries without relying on conversational memory.
