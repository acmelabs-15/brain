---
package: rjm
name: run_command
slug: run-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_command

## Definition — verbatim
(used, not defined)

> "def run_command(argv: Sequence[str], timeout_seconds: int | None = None) -> CommandResult:" — scripts/ci/diagnose_copilot_cli.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diagnose_copilot_cli.py | 25 | defined here | Subprocess runner helper returning CommandResult with captured stdout, stderr, and returncode. |
| scripts/ci/execute_ai_review_post_script.py | 22 | defined here | Subprocess runner wrapper executing post-review actions and returning returncode. |
| scripts/ci/install_copilot_cli.py | 26 | defined here | Subprocess runner capturing output during Copilot CLI installation commands. |

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
defects: orphan, script-bug

## Design notes
`run_command` is a Python helper function identifier across CI scripts for wrapping subprocess execution with standard error handling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
