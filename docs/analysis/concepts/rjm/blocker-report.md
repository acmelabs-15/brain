---
package: rjm
name: Blocker Report
slug: blocker-report
kind: template
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

# Blocker Report

## Definition — verbatim
> "## Blocker Report" — .agents/AGENT-SYSTEM.md:1708

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1708 | defines | Standard template defining task identifier, blocker classification, attempted alternatives, and recommendations. |

## Consumes
Task identifier, description of blocking condition, blocker type categorization, and trial records of alternative approaches.

## Produces
A structured blocker report artifact enabling rapid orchestrator or human triage.

## When applied
When an executing agent cannot proceed on a task due to an unresolvable dependency or failure.

## Sub-concepts
none

## Part of
blocked-tasks

## Implementation status
clean

## Design notes
A structured markdown template capturing blocked task context: Task ID, Blocker Description, Type (External, Technical, Missing Info), Alternatives Attempted (with specific results), and Recommendation (wait for dependency, pivot to alternative task, or escalate to agent/user).
