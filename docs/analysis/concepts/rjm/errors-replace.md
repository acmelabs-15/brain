---
package: rjm
name: errors="replace"
slug: errors-replace
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# errors="replace"

## Definition — verbatim
(used, not defined)

> "Require ``errors=\"replace\"`` for UTF-8 subprocess text capture." — scripts/validation/check_subprocess_encoding.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_subprocess_encoding.py | 4 | used here | Enforced keyword argument requirement for UTF-8 subprocess invocations. |

## Consumes
Subprocess execution calls in Python scripts capturing stdout or stderr as text.

## Produces
Error-tolerant string decoding that substitutes un-decodable bytes rather than crashing with UnicodeDecodeError.

## When applied
Mandatory on every text-capturing subprocess call specifying `encoding="utf-8"`.

## Sub-concepts
subprocess-run, text-capturing-calls, unconditional-decode-calls

## Part of
subprocess-encoding-gate

## Implementation status
clean

## Design notes
`errors="replace"` is a mandatory defensive parameter in rjm for all text-capturing Python subprocess invocations that specify UTF-8 encoding. On Windows or environments with non-standard codepages, child processes may emit invalid UTF-8 byte sequences; without replacement error handling, Python triggers an unhandled `UnicodeDecodeError` during stream decoding before the caller can capture stderr or report the true exit failure.
