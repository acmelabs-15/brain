---
package: rjm
name: EXIT_ERROR
slug: exit-error
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
  - {path: .claude/skills/security-scan/scripts/scan_constants.py, sha256: 4dec891d77fd21fe9f3fb63ee816f6e06dbb56287faa6db33af7dcc7e518c249}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
  - {path: scripts/ci/write_drift_job_summary.py, sha256: c3af8c3ae1447f5a6b6078b1a9a9cb4777f4aba378507fc35ac1f6614b9839fe}
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EXIT_ERROR

## Definition — verbatim
(used, not defined)

> "\"EXIT_ERROR\"," — .claude/skills/golden-principles/scripts/scan_principles_core.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/scripts/scan_principles_core.py | 26 | defined here | Primary definition of `EXIT_ERROR` within scan_principles_core.py. |
| .claude/skills/security-scan/scripts/scan_constants.py | 16 | defined here | Primary definition of `EXIT_ERROR` within scan_constants.py. |
| .claude/skills/style-enforcement/scripts/check_style.py | 33 | defined here | Primary definition of `EXIT_ERROR` within check_style.py. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 21 | defined here | Primary definition of `EXIT_ERROR` within taste_lints.py. |
| scripts/ci/check_metrics_thresholds.py | 24 | defined here | Primary definition of `EXIT_ERROR` within check_metrics_thresholds.py. |
| scripts/ci/collect_metrics_and_report.py | 23 | defined here | Primary definition of `EXIT_ERROR` within collect_metrics_and_report.py. |
| scripts/ci/measure_npm_pack_size.py | 23 | defined here | Primary definition of `EXIT_ERROR` within measure_npm_pack_size.py. |
| scripts/ci/write_drift_job_summary.py | 20 | defined here | Primary definition of `EXIT_ERROR` within write_drift_job_summary.py. |
| scripts/ci/write_metrics_threshold_summary.py | 20 | defined here | Primary definition of `EXIT_ERROR` within write_metrics_threshold_summary.py. |

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
defects: doc-drift, exit-code-mismatch, orphan, other, script-bug

## Design notes
A code identifier, type, or architectural heading (`EXIT_ERROR`) recorded during inventory analysis, classified as `name-only` per D-023.
