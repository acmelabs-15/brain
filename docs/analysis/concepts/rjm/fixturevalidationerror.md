---
package: rjm
name: FixtureValidationError
slug: fixturevalidationerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FixtureValidationError

## Definition — verbatim
(used, not defined)

> "class FixtureValidationError(Exception):" — scripts/eval/_eval_agent_types.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 54 | defined here | Exception class raised when an evaluation fixture violates REQ-004 AC-4 schema constraints. |
| scripts/eval/eval-agent-vs-baseline.py | 42 | used here | Imported exception used during test fixture loading and schema checking. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A Python custom exception class identifier in `_eval_agent_types.py` indicating fixture validation schema failures, classified as `name-only` per D-023.
