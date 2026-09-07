---
package: rjm
name: BASELINE_PROMPT
slug: baseline-prompt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BASELINE_PROMPT

## Definition — verbatim
(used, not defined)

> "BASELINE_PROMPT = \"Review the following input.\"" — scripts/eval/eval-agent-vs-baseline.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 84 | defined here | Code example showing baseline prompt returned when evaluating the baseline variant. |
| scripts/eval/eval-agent-vs-baseline.py | 90 | defined here | Constant defining the minimal naive prompt used as evaluation baseline. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
experimental-design-symmetry

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`BASELINE_PROMPT` is a Python string constant defining the naive prompt ("Review the following input.") used as the control baseline in agent-vs-baseline evaluations, classified as `name-only` per D-023.
