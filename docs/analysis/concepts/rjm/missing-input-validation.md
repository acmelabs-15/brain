---
package: rjm
name: Missing Input Validation
slug: missing-input-validation
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

# Missing Input Validation

## Definition — verbatim
(used, not defined)

> "### Missing Input Validation" — .agents/steering/security-practices.md:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 229 | defined here | Anti-pattern heading contrasting unvalidated parameter usage with regex-validated boundary guards. |

## Consumes
none

## Produces
none

## When applied
> "# WRONG - No validation" — .agents/steering/security-practices.md:232

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
An anti-pattern in security practices illustrating the failure to sanitize or validate external user inputs before passing them to CLI commands, tools, or APIs. It contrasts dangerous unvalidated input handling with defensive regex pattern matching.
