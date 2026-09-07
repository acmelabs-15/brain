---
package: rjm
name: Technical-suffix exemption table
slug: technical-suffix-exemption-table
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

# Technical-suffix exemption table

## Definition — verbatim
(used, not defined)

> "## Technical-suffix exemption table" — docs/spec-quality/hedge-phrases.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 75 | defined here | Section heading and documentation table defining technical term suffix lookup rules that prevent false positives during hedge filtering. |

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
Technical-suffix exemption table is a documentation section heading in `docs/spec-quality/hedge-phrases.md` defining suffix lookup rules rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
