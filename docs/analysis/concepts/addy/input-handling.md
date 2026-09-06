---
package: addy
name: Input Handling
slug: input-handling
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Input Handling

## Definition — verbatim
> "### 1. Input Handling" — agents/security-auditor.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 12 | defines | Defines the boundary validation, injection prevention, and encoding checklist items |

## Consumes
User input entry points, request parameters, and database query code.

## Produces
Validation assessments against SQL/NoSQL/OS injection, path traversal, and cross-site scripting.

## When applied
Applied during security audit whenever untrusted user data is accepted across system boundaries.

## Sub-concepts
none

## Part of
review-scope

## Implementation status
clean

## Design notes
Focuses the security audit on system boundaries, verifying that all user-supplied input is validated, sanitized, and encoded before reaching downstream execution engines or browser contexts.
