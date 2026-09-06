---
package: addy
name: Error Handling
slug: error-handling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Error Handling

## Definition — verbatim
(used, not defined)
> "// Production: generic error, no internals" — references/security-checklist.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 17 | defines | Specifies patterns for safe production error responses that conceal internal stack traces and SQL queries. |

## Consumes
Internal exceptions, database query errors, and server response formatting middleware.

## Produces
Sanitized production HTTP error responses stripping internals, stack traces, and database syntax.

## When applied
When returning error responses from production API endpoints and server handlers.

## Sub-concepts
none

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
Error handling from a security perspective prevents sensitive implementation details (database schema, SQL syntax, file paths, framework stack traces) from leaking to attackers. Addy requires returning generic error structures in production while strictly prohibiting the output of raw error messages, stack traces, or internal query strings in client-facing responses.
