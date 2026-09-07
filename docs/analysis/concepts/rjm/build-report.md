---
package: rjm
name: build_report
slug: build-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_report

## Definition — verbatim
(used, not defined)

> "def build_report(inputs: dict[str, str]) -> tuple[str, str]:" — scripts/ci/build_pr_validation_report.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 82 | defined here | Assembles PR validation summary report and determines overall status. |
| scripts/eval/_model_sweep_core.py | 461 | defined here | Constructs evaluation model sweep Markdown summary report from benchmark results. |
| scripts/eval/eval-model-sweep.py | 52 | used here | Imports `build_report` from `_model_sweep_core` to generate evaluation model sweep summaries. |
| scripts/issue_triage.py | 396 | defined here | Compiles issue triage report Markdown from scanned GitHub issues. |
| scripts/maintenance/gc_worktrees.py | 359 | defined here | Generates garbage collection analysis report for git worktrees. |
| scripts/maintenance/repair_worktree_venv.py | 180 | defined here | Scans worktree virtual environment and builds a repair execution report. |
| scripts/report_pr_supersession.py | 168 | defined here | Formats PR supersession status and git distance metrics into a markdown report. |
| scripts/validation/check_tmp_worktrees.py | 233 | defined here | Evaluates temporary worktree disk utilization and builds validation report. |
| scripts/validation/check_zero_collection_tests.py | 412 | defined here | Compares pytest discovery against zero-collection test files to construct audit report. |

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
defects: missing-path, orphan

## Design notes
`build_report` is a recurring Python function name implemented across CI, evaluation, maintenance, and validation utility scripts to construct structured reports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
