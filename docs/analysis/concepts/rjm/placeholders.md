---
package: rjm
name: PLACEHOLDERS
slug: placeholders
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

# PLACEHOLDERS

## Definition — verbatim
(used, not defined)

> "PLACEHOLDERS = (\"PR_NUMBER\", \"MERGED\", \"ESCALATE\")" — scripts/ci/build_retrospective_prompt.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_retrospective_prompt.py | 24 | defined here | Tuple constant defining expected template substitution variables for the post-PR retrospective prompt. |

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
`PLACEHOLDERS` is a configuration tuple defining required template substitution variables in `scripts/ci/build_retrospective_prompt.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
