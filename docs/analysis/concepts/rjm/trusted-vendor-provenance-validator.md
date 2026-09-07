---
package: rjm
name: Trusted vendor provenance validator
slug: trusted-vendor-provenance-validator
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/validate_vendor_provenance.py, sha256: 65858093c108f169cc0e34423abc589c0d79f7047b2211c82c7e4457c57d0a9c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trusted vendor provenance validator

## Definition — verbatim
(used, not defined)

> "Trusted vendor provenance validator (base-branch owned)." — scripts/ci/validate_vendor_provenance.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_vendor_provenance.py | 3 | defined here | Docstring title defining the base-branch owned vendor provenance validation script. |

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
defects: missing-path, orphan

## Design notes
`Trusted vendor provenance validator` is a script docstring heading describing the base-branch CI validator for vendored dependencies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
