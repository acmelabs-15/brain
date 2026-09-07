---
package: rjm
name: incremental_scope
slug: incremental-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# incremental_scope

## Definition — verbatim
(used, not defined)

> "incremental_scope  - incremental scope declaration from PR title" — scripts/ci/spec_extract_refs.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_extract_refs.py | 18 | defined here | Output variable documenting the incremental scope declaration parsed from the PR title. |
| scripts/ci/spec_prepare_context.py | 13 | used here | Environment variable input read to format scope instructions for AI spec review. |

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
defects: orphan, missing-path

## Design notes
incremental_scope is a script output and environment variable identifier representing PR incremental scope declarations rather than an operational lifecycle concept.
