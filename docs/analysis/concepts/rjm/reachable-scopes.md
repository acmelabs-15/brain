---
package: rjm
name: _reachable_scopes
slug: reachable-scopes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/doc_interpreter_subprocess.py, sha256: cfff472cecc2ca0e7116ec51b47308b4c4f77537773708d195f62457c9c87b01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _reachable_scopes

## Definition — verbatim
(used, not defined)

> "def _reachable_scopes(tree: ast.Module) -> list[list[ast.stmt]]:" — scripts/validation/doc_interpreter_subprocess.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/doc_interpreter_subprocess.py | 67 | defined here | Helper function calculating transitive call reachability from top-level module statements to local function bodies. |

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
A control flow reachability helper function identifier in doc_interpreter_subprocess.py, classified as name-only per D-023.
