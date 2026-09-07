---
package: rjm
name: CWE-91
slug: cwe-91
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_result_helpers/helpers.py, sha256: 3c14f9ddcc6391bbb74b0bf22b0e6ef4f32213f2861f761032e96e22d08eada2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-91

## Definition — verbatim
(used, not defined)

> "Escape XML-sensitive characters (CWE-91 prevention)" — scripts/test_result_helpers/helpers.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_result_helpers/helpers.py | 29 | used here | Code comment documenting escaping of XML-sensitive characters in test suite names and skip reasons to prevent XML injection. |

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
`CWE-91` is an external Common Weakness Enumeration taxonomy identifier for XML injection vulnerabilities rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
