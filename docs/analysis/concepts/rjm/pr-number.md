---
package: rjm
name: PR_NUMBER
slug: pr-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR_NUMBER

## Definition — verbatim
(used, not defined)

> "PR_NUMBER           - pull request number (used for gh CLI fallback)" — scripts/ci/spec_extract_refs.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_extract_refs.py | 10 | used here | Environment variable specifying pull request number used for GitHub CLI fallback lookups. |
| scripts/ci/update_needs_split_label.py | 123 | used here | Environment variable read in main() to target label additions or removals on the pull request. |

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
defects: orphan, missing-path, other

## Design notes
PR_NUMBER is an environment variable identifier representing the pull request number in CI automation scripts rather than an operational lifecycle concept.
