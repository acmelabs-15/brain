---
package: rjm
name: TRACE_LINE_PREFIXES
slug: trace-line-prefixes
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

# TRACE_LINE_PREFIXES

## Definition — verbatim
(used, not defined)

> "TRACE_LINE_PREFIXES: tuple[str, ...] =" — scripts/eval/_copilot_cli_constants.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_constants.py | 15 | defined here | Tuple of Unicode box-drawing prefixes matching Copilot CLI interactive spinners and tool execution trees. |

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
`TRACE_LINE_PREFIXES` is an evaluation harness constant defining UI tree characters for detecting scraped terminal noise in model answers, classified as `kind: name-only` per D-023.
