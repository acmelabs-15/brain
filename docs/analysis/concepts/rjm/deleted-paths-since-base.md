---
package: rjm
name: _deleted_paths_since_base
slug: deleted-paths-since-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_workflow_targets.py, sha256: 4b80c0e4c0e0bfe2052d15a8318cfa758fb70d424f1a14c0139a7cf57620d795}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _deleted_paths_since_base

## Definition — verbatim
(used, not defined)

> "def _deleted_paths_since_base(repo_root: Path, warn_label: str) -> list[str] | None:" — scripts/validation/checks_workflow_targets.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_workflow_targets.py | 22 | defined here | Helper function returning deleted paths across base, staged, and unstaged diffs, treating renames as delete-plus-add. |

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
defects: script-bug, exit-code-mismatch

## Design notes
`_deleted_paths_since_base` is a Python helper function identifier in `checks_workflow_targets.py` querying deleted repository paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
