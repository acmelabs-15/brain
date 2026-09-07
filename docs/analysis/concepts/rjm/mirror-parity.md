---
package: rjm
name: Mirror parity
slug: mirror-parity
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

# Mirror parity

## Definition — verbatim
(used, not defined)

> "# Mirror parity (byte-identical)" — scripts/ci/validate_vendor_provenance.py:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_vendor_provenance.py | 204 | defined here | Section heading introducing validation logic that enforces byte-identical parity between canonical and generated mirror files. |

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
`Mirror parity` is a code section heading and verification concept ensuring byte equality between primary and mirror artifacts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
