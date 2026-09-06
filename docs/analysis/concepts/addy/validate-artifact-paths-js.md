---
package: addy
name: validate-artifact-paths.js
slug: validate-artifact-paths-js
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# validate-artifact-paths.js

## Definition — verbatim
(used, not defined)
> "Nothing else in CI catches this: validate-artifact-paths.js is scoped to" — scripts/validate-reference-links.js:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-reference-links.js | 15 | references | Comment contrasting the reference-links validator with the artifact paths validator. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
Script filename cited in header documentation to differentiate validator scopes rather than an independent lifecycle concept.
