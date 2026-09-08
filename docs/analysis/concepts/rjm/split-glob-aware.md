---
package: rjm
name: _split_glob_aware
slug: split-glob-aware
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/instruction_budget_globs.py, sha256: 988a5b5ad39b3ed1644bcd5eeeae7b0f22ae5660a085a17205dda1cfc594a0d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _split_glob_aware

## Definition — verbatim
(used, not defined)

> "def _split_glob_aware(pattern: str, split_char: str) -> list[str]:" — scripts/validation/instruction_budget_globs.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget_globs.py | 96 | defined here | Splits patterns on a delimiter character while preserving brace and bracket groups, porting VS Code's splitGlobAware. |

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
A Python utility function in `instruction_budget_globs.py` that splits glob patterns on delimiters while preserving brace and bracket groups, classified as name-only per D-023.
