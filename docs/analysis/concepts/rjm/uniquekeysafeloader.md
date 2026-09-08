---
package: rjm
name: _UniqueKeySafeLoader
slug: uniquekeysafeloader
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

# _UniqueKeySafeLoader

## Definition — verbatim
(used, not defined)

> "class _UniqueKeySafeLoader(yaml.SafeLoader):" — scripts/validation/instruction_budget_globs.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget_globs.py | 27 | defined here | Custom YAML loader subclass that rejects duplicate mapping keys to fail closed instead of silently applying last-wins. |

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
A Python YAML loader class in `instruction_budget_globs.py` that rejects duplicate mapping keys to fail closed, classified as name-only per D-023.
