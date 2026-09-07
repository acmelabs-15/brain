---
package: rjm
name: Third-Party License Attribution
slug: third-party-license-attribution
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Third-Party License Attribution

## Definition — verbatim
> "# Third-Party License Attribution" — docs/third-party-license-attribution.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 1085 | defined here | Heading introducing attribution policy requirements for redistributed plugin components. |
| docs/third-party-license-attribution.md | 1 | defined here | Document title and specification defining repository open source licensing compliance rules. |

## Consumes
Third-party source components, runtime dependencies declared in shipped plugin paths, and upstream license files.

## Produces
Validated inbound license compatibility assessments and updated `THIRD-PARTY-NOTICES.TXT` notices.

## When applied
Mandated whenever adding or updating vendored code or runtime dependencies included in marketplace plugin packages.

## Sub-concepts
none

## Part of
rjm:ship

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Third-Party License Attribution establishes the open-source compliance policy governing distributed components in rjm. By drawing a clear legal distinction between shipped runtime assets (which require strict attribution) and internal developer or CI tooling (which are exempt), the framework protects the project against copyleft license contamination and automates legal notice generation.
