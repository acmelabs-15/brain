---
package: rjm
name: drift-detection.yml
slug: drift-detection-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drift-detection.yml

## Definition — verbatim
(used, not defined)

> "DD[drift-detection.yml]" — .github/AGENTS.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/AGENTS.md | 29 | defined here | Diagram node representing the automated validation workflow for agent drift detection. |
| scripts/ci/drift_collect_details.py | 4 | used here | Cited as the CI workflow whose inline shell logic was extracted into drift_collect_details.py under ADR-006. |
| scripts/ci/drift_create_alert_issue.py | 4 | used here | Cited as the CI workflow whose inline heredoc shell logic was extracted into drift_create_alert_issue.py under ADR-006. |
| scripts/ci/drift_run_detection.py | 4 | used here | Cited as the CI workflow whose inline shell execution was extracted into drift_run_detection.py under ADR-006. |
| scripts/ci/drift_write_summary.py | 4 | used here | Cited as the CI workflow whose summary step was extracted into drift_write_summary.py under ADR-006. |

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
drift-detection.yml is a GitHub Actions workflow configuration filename identifier executing scheduled agent drift detection checks rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
