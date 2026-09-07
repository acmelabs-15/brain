---
package: rjm
name: HAS_SPECS
slug: has-specs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HAS_SPECS

## Definition — verbatim
(used, not defined)

> "HAS_SPECS              - Whether PR references specs ('true' or other)" — .github/scripts/generate_spec_report.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 5 | used here | Environment variable input indicating whether the pull request references any formal specs. |
| scripts/ci/spec_extract_refs.py | 19 | defined here | Step output parameter documenting whether specification references were found ("true" or "false"). |

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
HAS_SPECS is an environment variable and step output parameter identifier indicating the presence of specification references rather than an independent lifecycle concept.
