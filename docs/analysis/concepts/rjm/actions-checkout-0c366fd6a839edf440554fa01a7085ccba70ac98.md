---
package: rjm
name: actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98
slug: actions-checkout-0c366fd6a839edf440554fa01a7085ccba70ac98
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/drift-detection.yml, sha256: 7967e29a891baf74a8bb2f7f9b4390663104cae39ab3baaa44b3fcda04f1cbdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98

## Definition — verbatim
(used, not defined)

> "uses: actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98" — .github/workflows/drift-detection.yml:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/drift-detection.yml | 29 | used here | Pinned GitHub Action step checking out the repository on an ARM runner. |

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
`actions/checkout@0c366fd6a839edf440554fa01a7085ccba70ac98` is an immutable commit-pinned GitHub Actions action identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
