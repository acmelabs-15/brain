---
package: addy
name: Never Do
slug: never-do
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Never Do

## Definition — verbatim
(used, not defined)

> "### Never Do" — skills/security-and-hardening/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 65 | defined here | Establishes strictly forbidden security anti-patterns that agents must never introduce into code |

## Consumes
Code changes, logging calls, error responses, client-side storage invocations.

## Produces
Rejection or elimination of committed secrets, sensitive data logging, client-side auth tokens, `eval`/`innerHTML` usage, and exposed stack traces.

## When applied
Enforced continuously across code authoring, code review, and quality verification.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Never Do defines categorical anti-patterns in addy's Three-Tier Boundary System that are unconditionally banned. It strictly forbids agents from committing credentials to version control, logging sensitive payloads, trusting client validation, using `eval` or unsanitized DOM insertion, storing session tokens in localStorage, or exposing internal stack traces to users.
