---
package: rjm
name: SPEC_REFS
slug: spec-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SPEC_REFS

## Definition — verbatim
(used, not defined)

> "SPEC_REFS              - Space-separated spec reference IDs" — .github/scripts/generate_spec_report.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 6 | used here | Environment variable input supplying the list of specification reference identifiers. |
| scripts/ci/spec_extract_refs.py | 16 | defined here | Step output parameter producing space-delimited spec references extracted from PR content. |
| scripts/ci/spec_load_content.py | 8 | used here | Environment variable input reading the list of spec references to load. |

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
SPEC_REFS is an environment variable and step output identifier for space-delimited specification references rather than an independent lifecycle concept.
