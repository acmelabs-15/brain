---
package: rjm
name: Input Validation First
slug: input-validation-first
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

# Input Validation First

## Definition — verbatim
> "### Input Validation First" — .agents/steering/security-practices.md:182

## Also called — verbatim
> "Validate all inputs at system boundaries:" — .agents/steering/security-practices.md:184

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 182 | defined here | Pattern heading and code examples demonstrating mandatory parameter validation at boundary entry points. |

## Consumes
raw-input-parameters

## Produces
validated-parameters

## When applied
> "Validate all inputs at system boundaries:" — .agents/steering/security-practices.md:184

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural design pattern mandating that all external parameters and inputs (such as CLI arguments, issue numbers, usernames, and environmental variables) are validated using strict type and pattern constraints at the system boundary before being processed by internal business logic.
