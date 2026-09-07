---
package: rjm
name: APPROVED
slug: approved
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# APPROVED

## Definition — verbatim
> "- **APPROVED**: All HIGH and CRITICAL findings are addressed in the diff, all MEDIUM findings have documented mitigations or accepted-risk justifications, all secrets and credentials are absent." — .claude/agents/security.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 221 | defined here | Terminal security review verdict emitted when all HIGH and CRITICAL findings are addressed, credentials are absent, and MEDIUM findings have documented mitigations. |
| docs/agent-governance.md | 64 | defined here | Formal approval lifecycle gate where an agent proposal is accepted by the steering committee to advance to active development. |
| templates/agents/critic.shared.md | 144 | defined here | Critic review verdict indicating that a plan is implementable as-is with all evaluation axes scoring 4 or higher and no critical gaps. |

## Consumes
Pull request diffs, security review reports, design specifications, and agent governance proposals.

## Produces
Authoritative progression verdict permitting implementation, branch merge, or production deployment.

## When applied
Applied when all critical security, architecture, or governance verification criteria are verified satisfied without blocking defects.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
clean

## Design notes
APPROVED is the terminal positive review verdict across rjm's multi-agent governance architecture. Emitted by the security agent when all critical and high findings are resolved with credentials absent, by the critic agent when a plan scores high without critical gaps, and in agent governance when an agent proposal transitions to active development. Without this gate, unverified changes or flawed agent definitions could enter production workflows without meeting quality standards.
