---
package: rjm
name: choose_multiline_delimiter
slug: choose-multiline-delimiter
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# choose_multiline_delimiter

## Definition — verbatim
(used, not defined)

> "Choose a GitHub output delimiter absent from every payload line." — scripts/ci/invoke_copilot_cli.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 45 | defined here | Utility function selecting an EOF delimiter guaranteed not to occur within a multiline string value. |
| scripts/ci/invoke_copilot_cli.py | 108 | defined here | Helper function selecting a collision-free delimiter for multiline GitHub Actions output emission. |

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
`choose_multiline_delimiter` is a helper function identifier generating collision-free heredoc delimiters for CI output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
