---
package: rjm
name: BASELINE_PROMPT_REF
slug: baseline-prompt-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BASELINE_PROMPT_REF

## Definition — verbatim
> "BASELINE_PROMPT_REF = \"<baseline>\"" — scripts/eval/eval-agent-vs-baseline.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agent-vs-baseline.py | 91 | defined here | Constant sentinel string identifying baseline prompt runs in run records and reports. |

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
A constant sentinel identifier representing the baseline prompt reference in evaluation run tracking, classified as `name-only` per D-023.
