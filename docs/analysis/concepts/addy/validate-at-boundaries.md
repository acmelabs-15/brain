---
package: addy
name: Validate at Boundaries
slug: validate-at-boundaries
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validate at Boundaries

## Definition — verbatim
> "Trust internal code. Validate at system edges where external input enters:" — skills/api-and-interface-design/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 88 | defined here | Core principle 3 directing runtime schema validation strictly to ingress boundaries |

## Consumes
External request bodies, user form submissions, third-party API payloads, environment variables.

## Produces
Validated, type-safe data objects passed into internal application services.

## When applied
At API route handlers, form submission handlers, third-party API response parsing, and configuration loading.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Validate at Boundaries ensures that runtime validation is concentrated at the edges of the system where untrusted external data enters. Once input is validated at the boundary, internal functions share trusted type contracts without redundant defensive checks, while third-party API responses are treated strictly as untrusted data requiring thorough schema verification.
