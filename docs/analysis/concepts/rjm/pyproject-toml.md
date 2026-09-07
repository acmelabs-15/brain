---
package: rjm
name: pyproject.toml
slug: pyproject-toml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pyproject.toml

## Definition — verbatim
(used, not defined)

> "pyproject.toml" — scripts/test_selection/runtime_read_patterns.txt:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-for-powershell-developers.md | 11 | used here | Cited as the repository source of truth for Python coding standards and tool configuration. |
| scripts/test_selection/runtime_read_patterns.txt | 6 | defined here | Configuration file list entry identifying pyproject.toml as a runtime pattern dependency. |

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
defects: internal-contradiction

## Design notes
Configuration file name for Python project build, dependency, and tool settings rather than an operational lifecycle concept, classified as `name-only` per D-023.
