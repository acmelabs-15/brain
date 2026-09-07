---
package: rjm
name: _SCOPE_PATTERN
slug: scope-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/extract_incremental_scope.py, sha256: b4d90659249173f58ce95742155bc4021e9b3cf8436be4cdbce4f8800d4c1c8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SCOPE_PATTERN

## Definition — verbatim
(used, not defined)

> "_SCOPE_PATTERN = re.compile(" — .github/scripts/extract_incremental_scope.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/extract_incremental_scope.py | 15 | defined here | Compiled regular expression matching explicit incremental scope markers in PR titles. |

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
_SCOPE_PATTERN is a private regular expression constant identifier in extract_incremental_scope.py rather than a lifecycle concept.
