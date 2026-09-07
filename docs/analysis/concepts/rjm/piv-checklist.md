---
package: rjm
name: PIV Checklist
slug: piv-checklist
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PIV Checklist

## Definition — verbatim
(used, not defined)

> "Execute PIV Checklist" — .claude/agents/security.md:425

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 425 | defined here | Seven-item verification checklist executed by the security agent during post-implementation review. |

## Consumes
Implemented code changes and planned security controls.

## Produces
Item-by-item verification pass/fail status across planned controls, vulnerabilities, validation, error handling, secrets, dependencies, and test coverage.

## When applied
Step 2 of the Post-Implementation Verification (PIV) Protocol.

## Sub-concepts
none

## Part of
post-implementation-verification-piv-protocol

## Implementation status
clean

## Design notes
A standardized 7-point audit checklist that guides post-implementation verification, ensuring that security controls were actually coded and verified rather than merely discussed in design documents.
