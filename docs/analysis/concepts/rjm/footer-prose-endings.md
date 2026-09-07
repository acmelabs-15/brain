---
package: rjm
name: FOOTER_PROSE_ENDINGS
slug: footer-prose-endings
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

# FOOTER_PROSE_ENDINGS

## Definition — verbatim
(used, not defined)

> "FOOTER_PROSE_ENDINGS: tuple[str, ...] =" — scripts/eval/_copilot_cli_constants.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_constants.py | 12 | defined here | Tuple of punctuation characters used to distinguish prose sentences from CLI terminal status footers. |

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
`FOOTER_PROSE_ENDINGS` is a constant tuple of punctuation characters used in eval output parsing to separate completion prose from CLI footers, classified as `kind: name-only` per D-023.
