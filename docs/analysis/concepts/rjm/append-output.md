---
package: rjm
name: append_output
slug: append-output
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/ci/map_pr_description_result.py, sha256: d66a421358b9d32edb77d5b838d4121c0c70d7e0ed27d436e524b8acafb46fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# append_output

## Definition — verbatim
(used, not defined)

> "def append_output(output_path: Path, key: str, value: str) -> None:" — scripts/ai_review_outputs.py:40

## Also called — verbatim
`_append_output` — scripts/ci/build_pr_validation_report.py:22
`_append_output` — scripts/ci/map_pr_description_result.py:14

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 40 | defined here | Helper function appending key-value pairs to the GitHub Actions output file. |
| scripts/ci/build_pr_validation_report.py | 22 | defined here | Local implementation appending validation report output variables to the GitHub step summary file. |
| scripts/ci/map_pr_description_result.py | 14 | defined here | Local implementation appending mapped PR description check outcomes to GITHUB_OUTPUT. |

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
`append_output` is a utility function identifier writing key-value strings to GitHub Actions output sinks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
