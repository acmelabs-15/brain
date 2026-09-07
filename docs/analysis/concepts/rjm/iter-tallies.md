---
package: rjm
name: iter_tallies
slug: iter-tallies
kind: name-only
package_phase: none
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

# iter_tallies

## Definition — verbatim
(used, not defined)

> "def iter_tallies(jsonl_path: Path, root: Path) -> tuple[list[RunTally], int]:" — scripts/eval/_run_rollup_core.py:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 232 | defined here | Generator parsing a runs.jsonl log file and yielding validated RunTally records. |

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
iter_tallies is an internal iteration utility parsing individual JSONL files into tally records rather than a lifecycle concept.
