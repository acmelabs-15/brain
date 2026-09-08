---
package: rjm
name: _DOC_EXTENSIONS
slug: doc-extensions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _DOC_EXTENSIONS

## Definition — verbatim
(used, not defined)

> "_DOC_EXTENSIONS = (\".md\",)" — scripts/validation/test_docs_only_eligibility.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/test_docs_only_eligibility.py | 31 | defined here | Tuple constant listing valid file extensions eligible for documentation-only QA exemption. |

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
A constant tuple identifier in `test_docs_only_eligibility.py` defining documentation file extensions, classified as name-only per D-023.
