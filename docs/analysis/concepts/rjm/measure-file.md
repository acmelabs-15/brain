---
package: rjm
name: measure_file
slug: measure-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# measure_file

## Definition — verbatim
(used, not defined)

> "def measure_file(repo_root: Path, relative_path: str, budget: int) -> FileResult:" — scripts/validation/passive_context_budget.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/passive_context_budget.py | 71 | defines | Function estimating token count and evaluating budget compliance for one context file. |

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
A Python function identifier in `passive_context_budget.py`, classified as name-only per D-023.
