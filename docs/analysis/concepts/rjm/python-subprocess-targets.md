---
package: rjm
name: python_subprocess_targets
slug: python-subprocess-targets
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

# python_subprocess_targets

## Definition — verbatim
(used, not defined)

> "def python_subprocess_targets(tree: ast.Module, tracked_py: set[str]) -> set[str]:" — scripts/validation/doc_interpreter_subprocess.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/doc_interpreter_subprocess.py | 127 | defined here | Main entry function returning all tracked Python scripts launched through reachable local subprocess calls in an AST module. |

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
A subprocess target extraction entry point function identifier in doc_interpreter_subprocess.py, classified as name-only per D-023.
