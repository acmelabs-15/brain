---
package: rjm
name: Security Flagging
slug: security-flagging
kind: gate
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security Flagging

## Definition — verbatim
> "If you encounter security-sensitive code during implementation, flag immediately:" — .claude/agents/implementer.md:681

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 679 | defines | Section heading establishing mandatory immediate escalation protocol when touching security-sensitive code. |
| templates/agents/implementer.shared.md | 668 | defines | Section heading establishing cross-platform security escalation protocol during implementation. |

## Consumes
Implementation code touching sensitive boundaries (auth, secrets, crypto, input validation, external APIs, query construction).

## Produces
SECURITY_FLAG: [what, where, risk] notification returned to orchestrator requesting security agent PIV.

## When applied
Immediately upon encountering security-sensitive boundaries during implementation rather than implementing silently.

## Sub-concepts
self-assessment-triggers

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Implements an immediate circuit breaker in rjm's execution flow. When an implementer touches high-risk surfaces such as authentication, encryption, or query construction, it must halt and surface a formal flag to the orchestrator rather than proceeding silently, ensuring mandatory review by the security specialist before code merges.
