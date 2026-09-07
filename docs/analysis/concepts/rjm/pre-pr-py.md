---
package: rjm
name: pre_pr.py
slug: pre-pr-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_nested_tests.py, sha256: d24df7b8ede26217d2a8aba6b19c32623aa889ac6195f834c25373bae72b4d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre_pr.py

## Definition — verbatim
(used, not defined)

> "This is the ``pre_pr.py`` entry point, so the base-ref provenance check" — scripts/validation/check_adr_links.py:975

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 975 | used here | Cited as the PR pre-submission runner script invoking `validate_adr_links`. |
| scripts/validation/check_nested_tests.py | 109 | used here | Cited as the runner script invoking the `validate_*(repo_root) -> bool` gate contract. |

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
`pre_pr.py` is a repository validation orchestration script file name executing quality gates before PR creation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
