---
package: rjm
name: _write_multiline_output
slug: write-multiline-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _write_multiline_output

## Definition — verbatim
(used, not defined)

> "def _write_multiline_output(key: str, value: str, github_output: str) -> None:" — scripts/ci/spec_prepare_context.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/spec_prepare_context.py | 32 | defined here | Helper function safely writing multiline values to GITHUB_OUTPUT using a randomized heredoc delimiter. |

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
_write_multiline_output is a private Python utility function formatting GitHub Actions step output to prevent delimiter injection rather than an operational lifecycle concept.
