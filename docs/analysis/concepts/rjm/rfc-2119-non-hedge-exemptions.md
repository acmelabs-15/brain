---
package: rjm
name: RFC 2119 non-hedge exemptions
slug: rfc-2119-non-hedge-exemptions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/spec-quality/hedge-phrases.md, sha256: 6c4f3bb4682ea4dd9beb248236205588a15cff8ed663225de1b26fea8127b8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RFC 2119 non-hedge exemptions

## Definition — verbatim
(used, not defined)

> "## RFC 2119 non-hedge exemptions" — docs/spec-quality/hedge-phrases.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 67 | defined here | Section heading explaining why bare modal requirement words like 'should', 'might', and 'could' are exempted from hedge filtering. |

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
clean

## Design notes
RFC 2119 non-hedge exemptions is a documentation section heading in `docs/spec-quality/hedge-phrases.md` describing keyword filtering rules rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
