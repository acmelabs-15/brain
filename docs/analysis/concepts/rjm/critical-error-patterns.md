---
package: rjm
name: Critical Error Patterns
slug: critical-error-patterns
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Critical Error Patterns

## Definition — verbatim
> "Failures that blocked progress" — .claude/skills/retrospective/references/diagnosis-and-actions.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 87 | defined here | Top diagnostic category prioritizing progress-blocking failures. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 17 | defined here | Priority 1 diagnostic category addressing failures that blocked progress. |

## Consumes
Execution logs exhibiting task abortion, broken builds, test failures, or hard blockers.

## Produces
High-priority diagnostic items flagged for immediate remediation.

## When applied
Evaluated first in Phase 2 (Diagnostic Priority Order).

## Sub-concepts
none

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Critical Error Patterns represents the top diagnostic tier in retrospective analysis. By placing functionality-breaking failures and hard progress blockers at the top of the diagnostic order, it guarantees that catastrophic faults receive immediate root-cause mitigation before secondary optimizations are explored.
