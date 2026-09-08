---
package: rjm
name: _check_call
slug: check-call
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _check_call

## Definition — verbatim
(used, not defined)

> "def _check_call(self, node: ast.Call) -> None:" — scripts/validation/check_test_tree_writes.py:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_test_tree_writes.py | 118 | defined here | Dispatch method that routes AST call nodes to specialized method write, open write, or shutil write checkers. |

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
defects: other

## Design notes
`_check_call` is an internal Python dispatcher method in `check_test_tree_writes.py` that delegates AST Call nodes to specific write checkers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
