---
package: rjm
name: Security Specialist
slug: security-specialist
kind: role
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

# Security Specialist

## Definition — verbatim
> "**Security Specialist** for vulnerability assessment, threat modeling, and secure coding practices. Defense-first mindset with OWASP awareness." — .claude/agents/security.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 56 | defined here | Defined as the specialist persona for vulnerability assessment, threat modeling, and secure coding in the Security Agent prompt. |

## Consumes
Vulnerability assessment requests, architectural designs, code changes, and OWASP top-10 threat catalogs.

## Produces
Specialist threat assessments, vulnerability scoring, and secure coding guidance.

## When applied
Applied whenever security analysis, threat modeling, or vulnerability evaluations are conducted.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
clean

## Design notes
Security Specialist designates the domain role assumed by the Security Agent in rjm. Characterized by a defense-first mindset and deep OWASP awareness, this specialist role focuses on rigorous threat modeling, evidence-based vulnerability scoring, and preventing security regressions across the software lifecycle.
