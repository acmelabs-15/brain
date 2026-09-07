---
package: rjm
name: tokens_in
slug: tokens-in
kind: name-only
package_phase: rjm:eval
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tokens_in

## Definition — verbatim
(used, not defined)

> "`tokens_in`, and `tokens_out`. This module rolls those rows up *across* runs:" — scripts/eval/_run_rollup_core.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 6 | used here | Input token count metric from `runs.jsonl` aggregated across runs for resource and cost estimation. |

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
tokens_in is an input token count metric field identifier rather than an agent lifecycle concept.
