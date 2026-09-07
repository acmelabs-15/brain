---
package: rjm
name: purge_bytecode
slug: purge-bytecode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
  - {path: scripts/testing/mutation_workspace.py, sha256: 6dae0c8e7dbbb2330c629b9d71304b37544571558668154302e9b74eab92ab27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# purge_bytecode

## Definition — verbatim
(used, not defined)

> "def purge_bytecode(root: Path) -> None:" — scripts/testing/mutation_workspace.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 30 | used here | Imported to delete Python cache directories before test execution in mutation runs. |
| scripts/testing/mutation_workspace.py | 81 | defined here | Defines utility function deleting all `__pycache__` directories below a target path. |

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
defects: orphan

## Design notes
A Python utility function identifier that removes cached bytecode directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
