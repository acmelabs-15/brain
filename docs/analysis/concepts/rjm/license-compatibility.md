---
package: rjm
name: License Compatibility
slug: license-compatibility
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# License Compatibility

## Definition — verbatim
> "License Compatibility" — docs/third-party-license-attribution.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/third-party-license-attribution.md | 24 | defined here | Classifies inbound open source licenses as compatible, cautionary, or incompatible with the project's MIT license. |

## Consumes
Upstream dependency license declarations and SPDX identifiers.

## Produces
Compatibility verdict (Yes, Caution, No) determining whether an inbound component may be redistributed.

## When applied
Evaluated before adopting or vendoring new third-party dependencies into shipped plugin paths.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An inbound legal compatibility policy matrix ensuring all dependencies included in shipped plugin distributions conform to permissive licensing requirements compatible with the repository's MIT license.
