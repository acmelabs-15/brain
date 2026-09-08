---
package: rjm
name: _SEPARATORS
slug: separators
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/shell_text.py, sha256: 736473c178ce9bf083f65138b011174798bac8d01a76494457b9c66eaa9b5324}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _SEPARATORS

## Definition — verbatim
(used, not defined)

> "_SEPARATORS = frozenset(" — scripts/validation/shell_text.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/shell_text.py | 15 | defined here | Constant frozenset of shell statement delimiter characters (`;`, `&`, `|`). |

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
A module-level constant frozenset in `shell_text.py` defining shell command separators, classified as name-only per D-023.
