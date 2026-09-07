---
package: rjm
name: parse_ai_review_output.py
slug: parse-ai-review-output-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_ai_review_output.py

## Definition — verbatim
(used, not defined)

> "# check_critical_failures.py BLOCKING_VERDICTS, parse_ai_review_output.py)." — scripts/external_signals/gate_aggregator.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/gate_aggregator.py | 39 | used here | Cited in comments as a pipeline consumer parsing reviewer agent verdict tokens. |

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
`parse_ai_review_output.py` is a Python script file name that parses review agent JSON outputs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
