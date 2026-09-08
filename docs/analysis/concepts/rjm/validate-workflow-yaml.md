---
package: rjm
name: validate_workflow_yaml
slug: validate-workflow-yaml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_workflow_yaml

## Definition — verbatim
(used, not defined)

> "def validate_workflow_yaml(repo_root: Path) -> bool:" — scripts/validation/checks_tooling.py:355

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_tooling.py | 355 | defined here | Pre-PR validation function running actionlint on GitHub Actions workflows with shellcheck severity raised to warning. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`validate_workflow_yaml` is a Python validation function in `scripts/validation/checks_tooling.py` coordinating actionlint workflow checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
