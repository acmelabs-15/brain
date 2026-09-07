---
package: rjm
name: render
slug: render
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/classify_semantic_title_result.py, sha256: b9414829dc1a70004dc8c0803990761701d761ee85c9800cc1ff89e6a57b960d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# render

## Definition — verbatim
(used, not defined)

> "def render(template: str, values: Mapping[str, str]) -> str:" — scripts/ci/build_retrospective_prompt.py:27

## Also called — verbatim
> "def _render(result: Classification, pr_title: str) -> str:" — scripts/ci/classify_semantic_title_result.py:128

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_retrospective_prompt.py | 27 | defined here | Substitutes template placeholders using string.Template, raising KeyError if required keys are missing. |
| scripts/ci/classify_semantic_title_result.py | 128 | defined here | Helper function assembling the user-facing output message echoing PR title and validation verdict. |

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
`render` is a Python function identifier used in CI scripts to format template text or operator-facing diagnostic messages rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
