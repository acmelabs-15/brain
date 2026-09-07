---
package: matt
name: package-manager-detector
slug: package-manager-detector
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# package-manager-detector

## Definition — verbatim
(used, not defined)
> "package-manager-detector" — package-lock.json:982

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| package-lock.json | 982 | used here | Pinned dependency entry in package-lock.json |

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
defects: cross-file-contradiction

## Design notes
Third-party npm utility package pinned in package-lock.json for detecting active package managers rather than an engineering lifecycle concept.
