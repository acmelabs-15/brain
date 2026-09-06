---
package: addy
name: Input validation
slug: input-validation
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Input validation

## Definition — verbatim
> "- [Input Validation](#input-validation)" — references/security-checklist.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/security-and-hardening.json | 40 | used here | Expected security behavior requiring input validation enforcement at system boundaries. |
| references/security-checklist.md | 11 | defined here | Section heading and checklist defining boundary validation, allowlisting, and type constraints. |

## Consumes
Raw untrusted input payloads, query parameters, headers, and file uploads.

## Produces
Strictly typed, sanitized, and bounds-checked data structures safe for downstream processing.

## When applied
Enforced immediately at ingress points (API routes, form handlers, webhook consumers) before business logic executes.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
`Input validation` is the first line of defense against injection, buffer overflows, and state corruption. Addy's security discipline mandates that all user input be validated at system boundaries using strict allowlists rather than denylists, constraining string lengths, numeric ranges, and formats. Without rigorous input validation, downstream database queries, command executions, and memory operations remain exposed to malicious manipulation.
