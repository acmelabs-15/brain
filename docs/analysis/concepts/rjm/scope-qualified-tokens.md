---
package: rjm
name: _SCOPE_QUALIFIED_TOKENS
slug: scope-qualified-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SCOPE_QUALIFIED_TOKENS

## Definition — verbatim
(used, not defined)

> "_SCOPE_QUALIFIED_TOKENS = frozenset({\"deferred\", \"pending\"})" — scripts/validate_session_json.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 189 | defined here | Defined as a frozenset of contradiction tokens that may legitimately refer to a different scope. |

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
defects: doc-drift, missing-path

## Design notes
`_SCOPE_QUALIFIED_TOKENS` is a private Python frozenset constant in `scripts/validate_session_json.py` identifying tokens allowed in multi-scope evidence descriptions rather than an independent lifecycle concept.
