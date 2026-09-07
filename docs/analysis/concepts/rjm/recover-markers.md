---
package: rjm
name: recover_markers
slug: recover-markers
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_workspace.py, sha256: 6dae0c8e7dbbb2330c629b9d71304b37544571558668154302e9b74eab92ab27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# recover_markers

## Definition — verbatim
(used, not defined)

> "def recover_markers(repo_root: Path, stream: TextIO | None = None) -> int:" — scripts/testing/mutation_workspace.py:470

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 470 | defined here | Function discovering all stale mutation markers and cleaning up their associated scratch worktrees. |

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
recover_markers is a Python function identifier for batch cleanup of stale mutation worktrees rather than a lifecycle concept.
