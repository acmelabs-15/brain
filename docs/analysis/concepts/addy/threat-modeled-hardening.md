---
package: addy
name: Threat-modeled hardening
slug: threat-modeled-hardening
kind: technique
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

# Threat-modeled hardening

## Definition — verbatim
(used, not defined)
> "Threat-modeled hardening: allowlisting, private-IP blocking, and validated input with tests" — evals/cases/security-and-hardening.json:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/security-and-hardening.json | 33 | used here | Expected output defining the structured hardening response to vulnerable endpoints. |

## Consumes
Identified trust boundaries, exposed attack surfaces, and untrusted inputs.

## Produces
Layered defensive controls (allowlisting, network filtering, validation) verified by security regression tests.

## When applied
Applied when securing high-risk endpoints (such as webhooks, file uploads, or URL fetchers).

## Sub-concepts
trust-boundaries, input-validation

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
`Threat-modeled hardening` combines systematic attacker reasoning (identifying boundaries and abuse cases) with concrete technical controls like IP filtering and input validation. Rather than applying superficial patches (such as naive URL scheme checks), it models the underlying vulnerability vectors to establish comprehensive protection. Without threat-modeled hardening, defenses remain brittle and easily bypassed by alternative attack payloads.
