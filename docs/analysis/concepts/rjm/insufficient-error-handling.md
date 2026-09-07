---
package: rjm
name: Insufficient Error Handling
slug: insufficient-error-handling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Insufficient Error Handling

## Definition — verbatim
(used, not defined)

> "### Insufficient Error Handling" — .agents/steering/security-practices.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 256 | defined here | Anti-pattern heading highlighting the hazards of swallowing exceptions without structured logging and proper exit codes. |

## Consumes
none

## Produces
none

## When applied
> "# WRONG - Catch-all that swallows errors" — .agents/steering/security-practices.md:259

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
An anti-pattern in security practices warning against catch-all try-catch blocks that silently swallow exceptions without logging or remediation. Such practices hide runtime faults and compromise error recovery across execution pipelines.
