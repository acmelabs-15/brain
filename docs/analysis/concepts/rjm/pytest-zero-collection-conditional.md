---
package: rjm
name: "pytest-zero-collection-conditional:"
slug: pytest-zero-collection-conditional
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pytest-zero-collection-conditional:

## Definition — verbatim
(used, not defined)

> "pytest-zero-collection-conditional:" — scripts/validation/check_zero_collection_tests.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_zero_collection_tests.py | 36 | used here | Conditional exemption marker declared in test files for modules skipped during collection on certain host environments. |

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
defects: orphan

## Design notes
`pytest-zero-collection-conditional:` is a marker token placed in test source code to allow environment-specific collection skips rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
