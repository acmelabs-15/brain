---
package: rjm
name: _missing_path_message
slug: missing-path-message
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_changed_paths.py, sha256: dac06c7d9d9bd8e4359cb319cbfc994b45046be9130a022bc8469fda73c1ec29}
  - {path: scripts/validation/checks_workflow_targets.py, sha256: 4b80c0e4c0e0bfe2052d15a8318cfa758fb70d424f1a14c0139a7cf57620d795}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _missing_path_message

## Definition — verbatim
(used, not defined)

> "def _missing_path_message(repo_root: Path, warn_label: str, missing: list[str]) -> str:" — scripts/validation/checks_changed_paths.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_changed_paths.py | 133 | defined here | Constructs a diagnostic failure message distinguishing staged deletions from dirty deletions and providing remediation guidance. |
| scripts/validation/checks_workflow_targets.py | 17 | used here | Imported to format error details when changed workflow files are absent from the working tree. |

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
`_missing_path_message` is a Python message formatting function in `checks_changed_paths.py` detailing missing changed files, classified as `kind: name-only` per D-023.
