---
package: rjm
path: scripts/github_core/worktree_identity.py
type: script
bytes: 3426
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/worktree_identity.py, sha256: 36700625c87e8d563611dada7ed338508e8cb01b6b192a04506887501a31b8f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/worktree_identity.py

## Purpose — required, verbatim
> "Worktree identity bootstrap helper." — scripts/github_core/worktree_identity.py:1

## Design intent — required
Pins a known-good git operator identity into a git worktree's local configuration, clobbering any leaked placeholder identity that may have been written by a pytest fixture running with the wrong working directory (Issue #2466, PR #2458). Without this safeguard, placeholder identities such as `test@test.com` leak into local `.git/config` and propagate into GitHub squash commit trailers, corrupting author attribution.

## Phase — required
cross-phase

## Inputs — required
- Path to git worktree directory (`worktree_path: str | Path`).
- Operator identity string (`operator: str = "rjmurillo-bot"`).
- Git configuration state queried and modified via `git -C <worktree> config ...`.

## Outputs — required
- Local git configuration within the worktree: sets `user.name` and `user.email` to bot identity (`rjmurillo-bot` and `rjmurillo-bot@users.noreply.github.com`) or leaves local config unset so human global identity flows through.

## Invokes — required
- command git — scripts/github_core/worktree_identity.py:40

## Invoked by — required
- script worktree_identity — scripts/invoke_batch_pr_review.py:28
- script worktree_identity — scripts/eval/eval_runtime_parity.py:71

## Concepts named — required, verbatim
- `_BOT_NAME` — scripts/github_core/worktree_identity.py:26 — defined here
- `_BOT_EMAIL` — scripts/github_core/worktree_identity.py:27 — defined here
- `_run_git_config` — scripts/github_core/worktree_identity.py:30 — defined here
- `reset_worktree_identity` — scripts/github_core/worktree_identity.py:59 — defined here
- `rjmurillo-bot` — scripts/github_core/worktree_identity.py:26 — defined here

## Structure
- `_run_git_config` — scripts/github_core/worktree_identity.py:30
- `reset_worktree_identity` — scripts/github_core/worktree_identity.py:59

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/worktree_identity.py`, language: Python 3, lines: 98
- documented invocation:
  `"reset_worktree_identity(worktree_path, operator=\"rjmurillo-bot\")" — scripts/github_core/worktree_identity.py:17`
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/worktree_identity.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.github_core.worktree_identity import reset_worktree_identity, _BOT_NAME, _BOT_EMAIL; print('bot:', _BOT_NAME, _BOT_EMAIL)"`
  abridged stdout: `bot: rjmurillo-bot rjmurillo-bot@users.noreply.github.com`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; raises `subprocess.CalledProcessError` on git config failure other than exit 5 (key not found) when unsetting, or on failure when setting bot identity. Standalone execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; raises `CalledProcessError` on subprocess failure.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Timeout safety: `_run_git_config` sets a 10s timeout on git config subprocess calls to guard against hung filesystem locks (line 46).
- Idempotent unset handling: Unsetting `user.name` and `user.email` ignores exit code 5 (`key not found`), allowing unconfigured worktrees to be reset cleanly (lines 83-91).

## Context cost
3,426 bytes (~856 tokens).
