---
package: rjm
name: split_statements
slug: split-statements
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/push_lock_resolver.py, sha256: cbcf36abd98c9e7c96218617dea00872bc94ce3216d14c802558074a0d514503}
  - {path: scripts/validation/shell_text.py, sha256: 736473c178ce9bf083f65138b011174798bac8d01a76494457b9c66eaa9b5324}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# split_statements

## Definition — verbatim
(used, not defined)

> "def split_statements(line: str) -> list[tuple[int, str]]:" — scripts/validation/shell_text.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/push_lock_resolver.py | 24 | used here | Imported to tokenize shell command blocks into individual statement tokens. |
| scripts/validation/shell_text.py | 54 | defined here | Parsing function splitting a shell line on control operators into ordered (column, text) tuples. |

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
`split_statements` is a shared Python parsing utility function identifier in `shell_text.py` splitting shell lines on control operators rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
