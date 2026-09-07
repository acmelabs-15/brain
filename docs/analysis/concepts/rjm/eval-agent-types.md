---
package: rjm
name: _eval_agent_types
slug: eval-agent-types
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _eval_agent_types

## Definition — verbatim
(used, not defined)

> "from _eval_agent_types import Assertion, AssertionKind, AssertionResult" — scripts/eval/_scoring_engine.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 13 | used here | Imports core evaluation types Assertion, AssertionKind, and AssertionResult for scorer signatures. |

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
A Python module identifier defining shared evaluation data types in rjm's test evaluation subsystem, classified as name-only per D-023.
