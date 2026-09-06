---
package: addy
name: OWASP top ten
slug: owasp-top-ten
kind: reference
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# OWASP top ten

## Definition — verbatim
(used, not defined)
> "Is this login flow safe against the OWASP top ten?" — evals/cases/security-and-hardening.json:10

## Also called — verbatim
"OWASP Top 10" — README.md:270

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/security-and-hardening.json | 10 | used here | Positive trigger prompt evaluating security audit skill activation. |

## Consumes
Application source code, authentication logic, input handlers, and dependency trees.

## Produces
Audit findings and vulnerability mitigations mapped against standard security risk categories.

## When applied
Consulted during security reviews, threat modeling, and endpoint hardening audits.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
The `OWASP top ten` provides an industry-standard baseline of critical web application security risks (injection, broken authentication, SSRF, security misconfiguration). Addy embeds OWASP Top 10 awareness into the `security-and-hardening` skill and reference checklists to guide automated code audits and manual reviews. Without anchoring security reviews to this standard catalog, security assessments become idiosyncratic and frequently overlook foundational vulnerabilities.
