---
package: rjm
name: step_install_cli
slug: step-install-cli
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step_install_cli

## Definition — verbatim
(used, not defined)

> "def step_install_cli(repo_root: str, ci: bool) -> str:" — .codeql/scripts/install_codeql_integration.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/install_codeql_integration.py | 85 | defined here | Runs CodeQL CLI installation script as a setup step and reports status. |

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
defects: doc-drift (.codeql/scripts/install_codeql_integration.py:259)

## Design notes
A step function identifier (`step_install_cli`) in `install_codeql_integration.py` executing CLI installation, classified as `name-only` per D-023.
