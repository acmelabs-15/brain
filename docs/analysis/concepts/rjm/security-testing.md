---
package: rjm
name: Security Testing
slug: security-testing
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security Testing

## Definition — verbatim
> "You are a security auditor performing OWASP Top 10 review. Assume every input is malicious. Reference CWE numbers for every finding." — .claude/commands/test.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 68 | defined here | Gate 3 in `/test` invoking `security-scan` and dispatching the security agent to evaluate injection, auth, secrets, input validation, and dependencies. |

## Consumes
Pull request diff, `security-scan` CWE pattern detection results, dependency manifests.

## Produces
Gate verdict (`PASS|WARN|CRITICAL_FAIL`) and structured findings array with explicit CWE numbers covering security vulnerabilities.

## When applied
Executed as Gate 3 of `/test` for CODE, WORKFLOW, and MIXED pull requests.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Security Testing establishes a zero-trust defensive audit gate prior to merge. Combining automated CWE static analysis via `security-scan` with an OWASP Top 10 audit by the security subagent, it ensures that vulnerabilities such as SQL/command injection, unauthenticated endpoints, committed secrets, and compromised dependencies are identified and resolved before code ships.
