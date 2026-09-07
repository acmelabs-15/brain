---
package: rjm
name: Diagnostic Priority Order
slug: diagnostic-priority-order
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Diagnostic Priority Order

## Definition — verbatim
> "### Diagnostic Priority Order" — .claude/skills/retrospective/references/diagnosis-and-actions.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 15 | defined here | Defines the six-step prioritization sequence for diagnosing findings during retrospective Phase 2. |

## Consumes
Diagnostic findings and execution events extracted from session logs.

## Produces
A prioritized sequence of findings starting with Critical Error Patterns and ending with Traceability Health.

## When applied
Applied during Phase 2 (Diagnosis) to prioritize extracted findings before root cause analysis and action planning.

## Sub-concepts
critical-error-patterns, success-analysis, near-misses, efficiency-opportunities, skill-gaps, traceability-health

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Diagnostic Priority Order establishes a strict 6-tier hierarchy ensuring that retrospective analysis prioritizes fatal progress-blocking failures over successes, near misses, efficiency gains, capability gaps, and specification health.
