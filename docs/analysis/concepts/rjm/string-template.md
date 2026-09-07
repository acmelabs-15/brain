---
package: rjm
name: string.Template
slug: string-template
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# string.Template

## Definition — verbatim
(used, not defined)

> "return string.Template(template).substitute(values)" — scripts/ci/build_retrospective_prompt.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_retrospective_prompt.py | 34 | used here | Standard library template engine used to perform strict variable substitution for prompt rendering. |

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
`string.Template` is the Python standard library string substitution class used in `scripts/ci/build_retrospective_prompt.py` to safely render prompts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
