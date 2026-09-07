---
package: rjm
name: _format_report
slug: format-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _format_report

## Definition — verbatim
(used, not defined)

> "def _format_report(self) -> str:" — .claude/skills/skillforge/scripts/validate-skill.py:785

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 785 | defined here | Formats validation results into a human-readable report string in SkillValidator. |
| scripts/audit_orphaned_branches.py | 159 | defined here | Renders the branch audit report as JSON or human-readable text. |
| scripts/bulk_cancel_guard.py | 192 | defined here | Renders blast radius and blocking reasons for workflow cancellation as text. |
| scripts/maintenance/detect_orphan_commits.py | 158 | defined here | Renders human-readable report naming examined merged PR count and orphan findings. |
| scripts/maintenance/gc_worktrees.py | 102 | used here | Imports report formatting function from worktree_report module. |
| scripts/maintenance/repair_worktree_venv.py | 231 | defined here | Produces a human-readable summary of worktree venv scan or repair results. |
| scripts/maintenance/worktree_report.py | 152 | defined here | Produces a human-readable summary of the worktree garbage collection plan or result. |
| scripts/validation/check_canonical_citations.py | 237 | defined here | Formats a human-readable report of canonical citation violations. |
| scripts/validation/check_skill_memory_references.py | 269 | defined here | Formats human-readable output of skill memory reference audit findings. |
| scripts/validation/check_tmp_worktrees.py | 255 | defined here | Renders human-readable report of temporary worktree paths and examined count. |
| scripts/validation/check_vendor_portability.py | 475 | defined here | Formats human-readable report comparing new vendor portability offenders against known baseline. |
| scripts/validation/spec_contradiction.py | 405 | defined here | Renders a human-readable report detailing detected spec-vs-code contradictions. |

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
defects: doc-drift, exit-code-mismatch, orphan, script-bug

## Design notes
_format_report is a Python function and method identifier across rjm scripts that formats structured dataclasses and audit findings into human-readable text reports, classified as name-only per D-023.
