---
package: rjm
name: session-start checklist
slug: session-start-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session-start checklist

## Definition — verbatim
(used, not defined)

> "blocking session-start checklist and the opus reasoning tier that a skill" — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 74 | used here | Describes the blocking pre-flight checklist executed by the orchestrator at session initiation. |

## Consumes
Repository working tree state, git branches, environment configuration, prior session memory logs.

## Produces
Verified session setup and readiness confirmation allowing or blocking further agent execution.

## When applied
Executed immediately at the beginning of each session before decomposing or dispatching tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A blocking pre-flight checklist executed by coordinator agents at session startup to verify working tree cleanliness, active git branch, environment variables, and persistent memory context, preventing out-of-order or contaminated execution.
