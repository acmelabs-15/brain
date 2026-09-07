---
package: rjm
name: Token Scope Confusion
slug: token-scope-confusion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Scope Confusion

## Definition — verbatim
> "CRITICAL-NEW-002: Token Scope Confusion" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 141 | defined here | Documented as critical vulnerability CRITICAL-NEW-002 where inconsistent mixing of BOT_PAT and github.token creates privilege escalation opportunities. |

## Consumes
Workflow permission blocks, step secrets, and multiple GitHub authentication tokens.

## Produces
Privilege confusion, scope escalation risks, and inconsistent permission auditing.

## When applied
Audited during workflow security reviews when multiple authentication tokens (e.g. `BOT_PAT`, `github.token`) are present in a single workflow.

## Sub-concepts
none

## Part of
vulnerabilities

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Token Scope Confusion` describes an architectural flaw where workflows arbitrarily interchange differently scoped tokens, risking privilege escalation when low-privilege steps interact with high-privilege credentials.
