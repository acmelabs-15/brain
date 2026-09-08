---
package: rjm
name: _decode_stream
slug: decode-stream
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/subprocess_runner.py, sha256: 13a3a7690a4426e9fb0fb86cbc33c402ef526fd9b5e353cdc3a79ccd056d42ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _decode_stream

## Definition — verbatim
(used, not defined)

> "def _decode_stream(data: bytes | str | None) -> str:" — scripts/validation/subprocess_runner.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/subprocess_runner.py | 23 | defined here | Decodes subprocess output streams with UTF-8 replacement semantics handling both raw bytes and decoded strings. |

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
A stream decoding helper function identifier in `subprocess_runner.py`, classified as name-only per D-023.
