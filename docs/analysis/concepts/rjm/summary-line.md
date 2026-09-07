---
package: rjm
name: summary_line
slug: summary-line
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/run_pytest.py, sha256: 7630e0a27249e65473eb05d07aa0dea1d3c5b4db404f9162a358d979493475e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summary_line

## Definition — verbatim
(used, not defined)

> "def summary_line(output: str) -> str:" — scripts/quality_gate/run_pytest.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 60 | defined here | Function parsing pytest execution output to extract the final summary line matching passed, failed, or error. |

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
defects: orphan

## Design notes
summary_line is a Python function identifier in run_pytest.py parsing stdout/stderr lines for the pytest summary string rather than an autonomous lifecycle concept.
