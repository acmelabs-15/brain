---
package: rjm
name: build_pytest_command
slug: build-pytest-command
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

# build_pytest_command

## Definition — verbatim
(used, not defined)

> "def build_pytest_command() -> list[str]:" — scripts/quality_gate/run_pytest.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 69 | defined here | Function constructing the CLI invocation for pytest, preferring uv run when available with fallback to python -m pytest. |

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
build_pytest_command is a Python function identifier in run_pytest.py generating the test runner command list rather than an autonomous lifecycle concept.
