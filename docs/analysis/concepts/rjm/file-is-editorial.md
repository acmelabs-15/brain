---
package: rjm
name: _file_is_editorial
slug: file-is-editorial
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _file_is_editorial

## Definition — verbatim
(used, not defined)

> "def _file_is_editorial(base_ref: str, head_ref: str, path: str) -> bool:" — scripts/validation/test_docs_only_eligibility.py:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/test_docs_only_eligibility.py | 139 | defined here | Compares extracted code block lines between base and head revisions to verify changes are strictly editorial. |

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
A Python helper function identifier in `test_docs_only_eligibility.py` evaluating editorial code-block invariance, classified as name-only per D-023.
