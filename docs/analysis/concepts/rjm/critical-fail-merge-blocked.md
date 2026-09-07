---
package: rjm
name: CRITICAL_FAIL (Merge Blocked)
slug: critical-fail-merge-blocked
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CRITICAL_FAIL (Merge Blocked)

## Definition — verbatim
> "### CRITICAL_FAIL (Merge Blocked)" — .claude/skills/review/references/security.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 154 | defined here | Verdict threshold section defining severe security vulnerabilities that strictly block pull request merging. |

## Consumes
Findings of severe security defects such as hardcoded credentials, remote shell or SQL injection, path traversal, or authentication bypass.

## Produces
A blocking CRITICAL_FAIL gate verdict preventing pull request merge until all identified issues are fixed.

## When applied
Emitted when any critical security condition is detected in code, workflow, or configuration pull requests.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction

## Design notes
A security review verdict threshold establishing non-negotiable merge blockers for severe vulnerabilities such as credential leaks, injection risks, and supply chain threats.
