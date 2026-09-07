---
package: rjm
name: FOOTER_VALUE_MAX_WORDS
slug: footer-value-max-words
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_constants.py, sha256: f9b2ba5ce05a132735fe5fb3f29fb101ec98771dc18d6a3ef6e9fc9920ac6c0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FOOTER_VALUE_MAX_WORDS

## Definition — verbatim
(used, not defined)

> "FOOTER_VALUE_MAX_WORDS: int = 5" — scripts/eval/_copilot_cli_constants.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_constants.py | 11 | defined here | Integer threshold limiting the maximum number of words expected in a valid UI footer value. |

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
`FOOTER_VALUE_MAX_WORDS` is an evaluation harness constant setting word count boundaries when parsing CLI footers, classified as `kind: name-only` per D-023.
