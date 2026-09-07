---
package: rjm
name: format_text_output
slug: format-text-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/scripts/calculate_error_budget.py, sha256: c93bcddda600634ae423a52f821863f60cf8a9638f4a78f311523f24840c7d1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_text_output

## Definition — verbatim
(used, not defined)

> "def format_text_output(budget: ErrorBudget, burn_rates: dict) -> str:" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/scripts/calculate_error_budget.py | 138 | defined here | Function generating plain text summary of error budget and burn rate analysis. |

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
defects: script-bug, cross-file-contradiction, exit-code-mismatch

## Design notes
format_text_output is a Python helper function identifier in calculate_error_budget.py rather than an operational lifecycle concept, classified as name-only per D-023.
