---
package: rjm
name: CONDITIONAL
slug: conditional
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CONDITIONAL

## Definition — verbatim
> "- **CONDITIONAL**: At most 3 MEDIUM findings remain with documented mitigations the implementer commits to land in a follow-up issue. Cite the follow-up issue number in the verdict." — .claude/agents/security.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 222 | defined here | Security review verdict permitting PR merge when at most 3 MEDIUM findings remain with documented mitigations committed to follow-up issues. |
| scripts/eval/eval-knowledge-integration.py | 366 | defined here | Kill gate verdict in knowledge integration evaluation where 60% of skills improve >= 0.5, allowing progression only for improving skills. |

## Consumes
Security findings with documented remediations, or benchmark evaluation score deltas across skills.

## Produces
Non-blocking progression verdict conditioned on tracked follow-up remediation or skill-scoped rollout.

## When applied
Applied when minor non-blocking defects or partial skill improvements exist that do not warrant halting delivery but require explicit tracking.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
defects: doc-drift

## Design notes
CONDITIONAL is an intermediate gating verdict in rjm that prevents minor non-blocking defects from halting development while ensuring they are not forgotten. In security reviews, it permits up to 3 mitigated MEDIUM findings if bound to an explicit follow-up issue; in evaluation kill gates, it allows rollouts only for skills that met the improvement threshold. Without this gate, teams would either block velocity for minor items or allow unaddressed technical debt to escape without tracking.
