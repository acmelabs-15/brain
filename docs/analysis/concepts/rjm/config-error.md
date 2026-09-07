---
package: rjm
name: CONFIG_ERROR
slug: config-error
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/ci/map_pr_description_result.py, sha256: d66a421358b9d32edb77d5b838d4121c0c70d7e0ed27d436e524b8acafb46fc7}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CONFIG_ERROR

## Definition — verbatim
(used, not defined)

> "CONFIG_ERROR = 2" — scripts/ci/build_pr_validation_report.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 10 | defined here | Process exit code constant indicating missing or invalid configuration or CLI arguments. |
| scripts/ci/map_pr_description_result.py | 11 | defined here | Exit code constant returned when required environment variables or sinks cannot be resolved. |
| scripts/ci/update_needs_split_label.py | 11 | defined here | Process exit code constant returned on CLI invocation errors or missing environment parameters. |

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
defects: script-bug, orphan

## Design notes
`CONFIG_ERROR` is a standard process exit code constant (value 2) across CI Python scripts signaling configuration or environment setup failures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
