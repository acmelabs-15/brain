---
package: rjm
name: Post-Consolidation Checklist
slug: post-consolidation-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-Consolidation Checklist

## Definition — verbatim
(used, not defined)

> "### Post-Consolidation Checklist" — .agents/governance/agent-consolidation-process.md:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 207 | defined here | Checklist verifying functionality, documentation, metrics, and cleanup after completing agent consolidation. |

## Consumes
Completed agent consolidation execution and telemetry data.

## Produces
Verification record confirming clean completion across functionality, documentation, metrics, and cleanup.

## When applied
Evaluated in Phase 5 Validation following agent consolidation execution.

## Sub-concepts
none

## Part of
agent-consolidation-process

## Implementation status
defects: missing-path

## Design notes
A verification checklist in rjm governance confirming that an agent consolidation has not broken agent chains, left orphan references, degraded metrics, or omitted documentation updates across platforms.
