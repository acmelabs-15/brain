---
package: rjm
name: conftest.py
slug: conftest-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conftest.py

## Definition — verbatim
(used, not defined)

> "conftest.py" — scripts/test_selection/runtime_read_patterns.txt:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 4 | defined here | Pattern entry requiring a full test run whenever the root pytest configuration fixture file is modified. |
| scripts/validation/check_push_lock_before_commit.py | 7 | used here | Cited root test fixture file hosting the repo head concurrency protection fixture. |

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
`conftest.py` is a pytest configuration and fixture file path cited in runtime read patterns and commit lock validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
