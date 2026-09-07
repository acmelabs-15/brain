---
package: rjm
name: CI Environment Security Testing
slug: ci-environment-security-testing
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CI Environment Security Testing

## Definition — verbatim
> "These checks reproduce the CI environment locally and catch security issues" — .claude/agents/security.md:439

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 437 | defined here | Step in PIV requesting local CI security script execution from the caller/implementer without direct shell access. |
| templates/agents/security.shared.md | 405 | defined here | Shared template specification for requesting local CI security test execution during PIV. |

## Consumes
CI environment simulation script blocks and execution output returned by caller or implementer.

## Produces
Verified CI test results validating security assertions before pull request submission.

## When applied
Step 3 of the Post-Implementation Verification protocol prior to issuing a final security verdict.

## Sub-concepts
none

## Part of
post-implementation-verification-piv-protocol

## Implementation status
clean

## Design notes
A protocol pattern reconciling the security agent's strict no-shell constraint with the requirement for CI environment security validation: the security agent provides the exact CI script block and requires the caller or implementer to run it and report back results.
