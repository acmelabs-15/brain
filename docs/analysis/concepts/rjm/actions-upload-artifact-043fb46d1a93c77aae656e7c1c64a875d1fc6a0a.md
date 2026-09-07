---
package: rjm
name: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a
slug: actions-upload-artifact-043fb46d1a93c77aae656e7c1c64a875d1fc6a0a
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

# actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a

## Definition — verbatim
(used, not defined)

> "uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a" — .github/workflows/drift-detection.yml:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/drift-detection.yml | 69 | used here | Pinned GitHub Action step uploading kill-criteria event artifacts to survive ephemeral runners. |

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
`actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` is an immutable commit-pinned GitHub Actions action identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
