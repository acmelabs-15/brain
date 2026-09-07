---
package: rjm
name: HEDGE_TECHNICAL_SUFFIXES
slug: hedge-technical-suffixes
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

# HEDGE_TECHNICAL_SUFFIXES

## Definition — verbatim
(used, not defined)

> "(`HEDGE_TECHNICAL_SUFFIXES`). Runtime enforcement comes from the `/spec`" — docs/spec-quality/hedge-phrases.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/spec-quality/hedge-phrases.md | 21 | used here | Programmatic identifier citing the technical-suffix exemption table implemented in tests/commands/step0_parser.py. |

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
HEDGE_TECHNICAL_SUFFIXES is a Python constant identifier in `tests/commands/step0_parser.py` rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
