---
package: rjm
name: Escalation
slug: escalation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Escalation

## Definition — verbatim
> "If you find a fundamental disagreement that you cannot resolve through findings, escalate to orchestrator with:" — templates/agents/critic.shared.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/critic.shared.md | 198 | defines | Section heading and protocol defining when and how reviewing agents escalate unresolvable disagreements to the orchestrator. |

## Consumes
Unresolvable fundamental architectural, planning, or convention conflicts between agent deliverables and governing standards.

## Produces
A structured escalation message detailing the conflict, cited evidence, available options, and recommended resolution.

## When applied
Invoked when a reviewer encounters a fundamental policy or design disagreement that cannot be settled by local findings alone.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A structured conflict resolution mechanism that routes fundamental disagreements to the orchestrator with concrete evidence and options rather than avoiding a verdict.
