---
package: rjm
name: render_table
slug: render-table
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# render_table

## Definition — verbatim
(used, not defined)

> "def render_table(rule_id: str, summary: dict[str, Any]) -> str:" — scripts/eval/eval-rule-activation.py:1850

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1850 | defined here | Function that formats evaluation summary statistics, restraint metrics, and mechanism comparison tables into console Markdown. |

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
defects: doc-drift

## Design notes
Console reporting function formatting mechanism comparison tables and restraint statistics in `eval-rule-activation.py`; classified as `name-only` per D-023.
