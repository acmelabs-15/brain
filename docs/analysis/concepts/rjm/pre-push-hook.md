---
package: rjm
name: pre-push hook
slug: pre-push-hook
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-push hook

## Definition — verbatim
> "Automatic on `git push` through Lefthook" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 69 | used here | Cited as a long-running child process during which lease heartbeats must be maintained. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 24 | used here | Analyzed regarding the push-ref-policy pre-push hook and historical commit count caps. |
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 15 | used here | Placed at Rung 3 of the gate ladder, running automatic validations via Lefthook before git push. |
| scripts/security/run_semgrep.py | 11 | used here | Integrated into the pre-push hook to block pushes on HIGH/CRITICAL security findings. |
| scripts/validation/check_push_lock_before_commit.py | 12 | used here | Explains that the per-branch flock is held for the entire duration of the pre-push suite. |
| scripts/validation/run_workflow_local_test.py | 5 | used here | Delegates changed workflow validation from the pre-push hook to Python-based local tests. |

## Consumes
Changed files in git push range, staged commits, local configuration, and test fixtures.

## Produces
Zero or non-zero exit code allowing or rejecting the git push.

## When applied
Triggered automatically on `git push` via Lefthook or manual validation suites.

## Sub-concepts
none

## Part of
gate-ladder

## Implementation status
defects: doc-drift, exit-code-mismatch (from citing scripts `run_semgrep.py` and `run_workflow_local_test.py`; other citing files are clean)

## Design notes
A client-side git hook triggered before transmitting commits to the remote repository. Serving as Rung 3 in rjm's Gate Ladder, it runs local static analysis, security scans (Semgrep), workflow validation, and test suites to intercept defects before CI execution, saving time and cloud resource spend.
