---
package: rjm
name: Security Review (Recursive)
slug: security-review-recursive
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security Review (Recursive)

## Definition — verbatim
> "- The security agent evaluates vulnerabilities, security best practices, and compliance" — docs/autonomous-issue-development.md:53

## Also called — verbatim
> "| 4c. Security Review | Check vulnerabilities | Security | Approval or feedback |" — docs/autonomous-issue-development.md:148

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 51 | defined here | Sub-phase 4c specifying iterative security analysis by the security agent until full approval. |

## Consumes
Critic- and QA-approved code diffs, configuration files, and script changes.

## Produces
Vulnerability reports, OWASP/CWE compliance checks, and final security approval.

## When applied
Final review gate in Phase 4 of autonomous issue development before retrospective and PR creation.

## Sub-concepts
none

## Part of
recursive-review-cycles

## Implementation status
defects: missing-path

## Design notes
The final gate in the recursive review cycle where a security specialist agent audits changes for vulnerabilities (injection, path traversal, permission escalation) and compliance standards, preventing security defects from reaching pull requests.
