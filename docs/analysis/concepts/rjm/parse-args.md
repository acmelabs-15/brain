---
package: rjm
name: parse_args
slug: parse-args
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
  - {path: scripts/metrics/emit_verdict_mismatch.py, sha256: bb9b925ea22ea3bba761f71fb4a48fe260babaacee0fd4cb0c9e1302c7be8e50}
  - {path: scripts/pr_branch_mapping.py, sha256: ef68513a8490b248236707bb35a76c73fa2d9f58999d1f43b973d7cf72fe4340}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_args

## Definition — verbatim
(used, not defined)

> "def parse_args(argv: list[str] | None = None) -> tuple[argparse.Namespace, list[str]]:" — .github/scripts/run_with_retry.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/run_with_retry.py | 39 | defined here | Function parsing CLI arguments and wrapper options. |
| scripts/audit_orphaned_branches.py | 189 | defined here | Function parsing CLI arguments for orphaned branch auditing. |
| scripts/check_skill_exists.py | 95 | defined here | Function parsing CLI arguments for skill existence checks. |
| scripts/eval/eval_skill_router.py | 464 | defined here | Function parsing CLI arguments for skill router evaluation. |
| scripts/eval/eval-model-panel.py | 210 | defined here | Function parsing CLI arguments for model panel evaluation. |
| scripts/eval/eval-oneshot-vs-shipped.py | 209 | defined here | Function parsing CLI arguments for oneshot evaluation. |
| scripts/issue_triage.py | 632 | defined here | Function parsing CLI arguments for issue triage. |
| scripts/maintenance/detect_orphan_commits.py | 218 | defined here | Function parsing CLI arguments for orphan commit detection. |
| scripts/maintenance/gc_worktrees.py | 447 | defined here | Function parsing CLI arguments for worktree garbage collection. |
| scripts/maintenance/repair_worktree_venv.py | 248 | defined here | Function parsing CLI arguments for worktree venv repair. |
| scripts/metrics/emit_verdict_mismatch.py | 45 | defined here | Function parsing CLI arguments for verdict mismatch metrics emission. |
| scripts/pr_branch_mapping.py | 369 | defined here | Function parsing CLI arguments for PR branch mapping. |
| scripts/skill_description_budget.py | 176 | defined here | Function parsing CLI arguments for skill description budget checking. |
| scripts/skill_registry.py | 318 | defined here | Function parsing CLI arguments for skill registry queries. |
| scripts/validation/check_canonical_citations.py | 267 | defined here | Function parsing CLI arguments for canonical citation validation. |
| scripts/validation/check_skill_memory_references.py | 313 | defined here | Function parsing CLI arguments for skill memory reference validation. |
| scripts/validation/check_tmp_worktrees.py | 321 | defined here | Function parsing CLI arguments for temporary worktree checks. |
| scripts/validation/check_vendor_portability.py | 537 | defined here | Function parsing CLI arguments for vendor portability validation. |

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
A standard Python function identifier (`parse_args` / `_parse_args`) implemented across CLI scripts for command-line argument parsing, classified as `kind: name-only` per D-023.
