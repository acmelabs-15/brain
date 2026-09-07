---
package: rjm
name: render_report
slug: render-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# render_report

## Definition — verbatim
(used, not defined)

> "def render_report(state: dict[str, Any], report: dict[str, Any]) -> str:" — scripts/eval/software_engineering_library_activation_gate.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 166 | defined here | Function rendering the markdown table report of reference activation verdicts and consecutive failures. |
| scripts/metrics/kill_criteria.py | 425 | defined here | Function rendering the weekly markdown rollup report for kill criteria drift telemetry. |

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
`render_report` is a Python function identifier used in evaluation and telemetry scripts for rendering markdown summary tables rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
