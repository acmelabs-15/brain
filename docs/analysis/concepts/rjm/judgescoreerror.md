---
package: rjm
name: JudgeScoreError
slug: judgescoreerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JudgeScoreError

## Definition — verbatim
(used, not defined)

> "class JudgeScoreError(ValueError):" — scripts/eval/eval-skill-overlap.py:614

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 614 | defined here | Exception raised when the LLM judge returns non-JSON or missing/non-numeric score fields. |

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
defects: doc-drift, other

## Design notes
A custom Python exception class raised when an LLM judge returns a malformed or non-numeric score payload rather than an operational lifecycle concept.
