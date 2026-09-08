---
package: rjm
name: _NUMERIC_KEYS
slug: numeric-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _NUMERIC_KEYS

## Definition — verbatim
(used, not defined)

> "_NUMERIC_KEYS: frozenset[str] = frozenset(" — scripts/validation/spec_contradiction.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/spec_contradiction.py | 101 | defined here | Constant set of frontmatter keys carrying numeric threshold semantics in contradiction checks. |

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
A Python configuration constant in `scripts/validation/spec_contradiction.py`, classified as name-only per D-023.
