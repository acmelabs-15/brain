---
package: rjm
name: _workflow_yaml_targets
slug: workflow-yaml-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
  - {path: scripts/validation/checks_workflow_targets.py, sha256: 4b80c0e4c0e0bfe2052d15a8318cfa758fb70d424f1a14c0139a7cf57620d795}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _workflow_yaml_targets

## Definition — verbatim
(used, not defined)

> "def _workflow_yaml_targets(repo_root: Path) -> list[str] | None:" — scripts/validation/checks_workflow_targets.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_tooling.py | 38 | used here | Imported to discover changed or dependent GitHub Actions workflow files for actionlint validation. |
| scripts/validation/checks_workflow_targets.py | 42 | defined here | Function returning workflow file targets affected by changed workflows or composite action contract dependencies. |

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
defects: script-bug, exit-code-mismatch, doc-drift, other

## Design notes
`_workflow_yaml_targets` is a Python helper function identifier in `checks_workflow_targets.py` calculating affected workflow paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
