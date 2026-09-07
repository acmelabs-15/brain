---
package: rjm
name: Best Practices Enforcement
slug: best-practices-enforcement
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

# Best Practices Enforcement

## Definition — verbatim
(used, not defined)

> "Best Practices Enforcement" — .claude/agents/security.md:347

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 347 | defined here | Capability enforcing security best practices including input validation, error handling, logging, and cryptography. |
| templates/agents/security.shared.md | 318 | defined here | Shared template specification enforcing secure coding practices and defensive implementation rules. |

## Consumes
Source code implementations and security standards.

## Produces
Validation reports and review findings enforcing input validation, safe error handling, audit logging, and correct cryptographic routines.

## When applied
Applied during code review passes across all implementation changes.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
A security enforcement mechanism ensuring all authored code satisfies baseline defensive programming practices—such as input validation, sanitization, leak-free error handling, and robust cryptographic standards.
