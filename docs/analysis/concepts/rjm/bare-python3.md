---
package: rjm
name: bare-python3
slug: bare-python3
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_python3_entrypoints.py, sha256: 3c912c65a5f3222d8997fcf46364951669a7be2c7b1b2131e014b30899c34cb6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# bare-python3

## Definition — verbatim
> "Detect bare-python3 documentation pointing to scripts that import third-party deps." — scripts/validation/check_python3_entrypoints.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 2 | defined here | Module docstring defines the pattern of invoking scripts directly via bare python3 rather than uv run. |

## Consumes
Python scripts with standard library dependencies only.

## Produces
Direct script execution using the system interpreter without virtual environment activation.

## When applied
Applied when invoking utility scripts that do not require external packages, and restricted when scripts declare third-party imports.

## Sub-concepts
third-party-deps

## Part of
none

## Implementation status
defects: orphan

## Design notes
An execution pattern in rjm referring to running scripts via the bare system python3 interpreter, which only resolves standard library modules and fails if third-party packages are imported.
