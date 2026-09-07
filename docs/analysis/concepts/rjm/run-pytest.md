---
package: rjm
name: run_pytest
slug: run-pytest
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

# run_pytest

## Definition — verbatim
(used, not defined)

> "def run_pytest(command: list[str], timeout: float, cwd: Path | None = None) -> tuple[str, str]:" — scripts/quality_gate/run_pytest.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 85 | defined here | Function executing the pytest subprocess under a bounded timeout and returning the status and summary tuple. |

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
run_pytest is a Python function identifier in run_pytest.py managing subprocess execution and error capturing for the pytest suite rather than an autonomous lifecycle concept.
