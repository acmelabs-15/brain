---
package: rjm
path: scripts/scope_pr_base.py
type: script
bytes: 10045
unit: inv-rjm-258
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/scope_pr_base.py, sha256: 76a9c6117162cb2952a23e156f446c41da4573183334115690e28da4a824364f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/scope_pr_base.py

## Purpose — required, verbatim
> "PR base resolution for the scope gate." — scripts/scope_pr_base.py:2

## Design intent — required
When stacked pull requests build upon intermediate feature branches, measuring diff size strictly against `main` inflates change volume with all antecedent commits across the stack, triggering false alarms in the scope explosion gate. This module resolves the true base branch of a PR via GitHub CLI (`gh pr list`), normalizes remote branch prefixes, and conducts a strict git ancestry credibility check to ensure the rescoped measurement legitimately forked later from the same history. Without it, stacked PR workflows would be blocked by the scope gate or would require unsafe manual overrides.

## Phase — required
cross-phase

## Inputs — required
- Branch name string passed to `resolve_pr_base_branch(branch)`: `scripts/scope_pr_base.py:74`
- Base branch string passed to `strip_remote_prefix(base)`: `scripts/scope_pr_base.py:62`
- ScopeResult objects and ancestor predicate passed to `is_credible_rescope(rescoped, blocked, is_ancestor)`: `scripts/scope_pr_base.py:158-162`
- GitHub CLI command output via `gh pr list --state open --head <branch> --json baseRefName,isCrossRepository`: `scripts/scope_pr_base.py:118-136`

## Outputs — required
- Resolved base branch name (string or None) from `resolve_pr_base_branch`: `scripts/scope_pr_base.py:74`, `scripts/scope_pr_base.py:155`
- Normalized base name without `origin/` from `strip_remote_prefix`: `scripts/scope_pr_base.py:71`
- Boolean credibility verdict from `is_credible_rescope`: `scripts/scope_pr_base.py:220-229`

## Invokes — required
none

## Invoked by — required
- script scope_pr_base — scripts/detect_scope_explosion.py:38

## Concepts named — required, verbatim
- `GH_TIMEOUT_SECONDS` — scripts/scope_pr_base.py:34 — defined here
- `_PLAIN_BRANCH_NAME` — scripts/scope_pr_base.py:36 — defined here
- `_RESERVED_BRANCH_NAMES` — scripts/scope_pr_base.py:37 — defined here
- `_is_plain_branch_name` — scripts/scope_pr_base.py:40 — defined here
- `strip_remote_prefix` — scripts/scope_pr_base.py:62 — defined here
- `resolve_pr_base_branch` — scripts/scope_pr_base.py:74 — defined here
- `is_credible_rescope` — scripts/scope_pr_base.py:158 — defined here
- `ScopeResult` — scripts/scope_pr_base.py:32 — used here
- `ScopeDetectionError` — scripts/scope_pr_base.py:177 — used here

## Structure
(no headings, flat python module)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/scope_pr_base.py`, language: Python 3, lines: 230
- documented invocation: none (helper module without standalone CLI entry point; imported by `scripts/detect_scope_explosion.py`)
- **executed:** yes
- actual command run: `python3 scripts/scope_pr_base.py` (run in `sources/rjm`)
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm python3 -c "from scripts.scope_pr_base import strip_remote_prefix, _is_plain_branch_name; print('strip:', strip_remote_prefix('origin/main')); print('plain:', _is_plain_branch_name('feature/foo'))"`
  abridged stdout:
```
strip: main
plain: True
```
  **actual exit code:** 0
- documented exit codes: none documented (library module with no CLI entry point or `sys.exit` invocations)
- for validators/gates: not a standalone gate executable; provides the `is_credible_rescope` validation gate predicate and `resolve_pr_base_branch` lookup that both fail closed (returning `False` or `None`) to preserve the initial `main`-relative scope gate block on uncertainty
- does the output match what the documentation claims? yes, loads cleanly and exports helper functions as specified

## Defects — required
none

## Observations
All functions fail closed (lines 16-18, 97-100, 217): any uncertainty in PR base lookup or ancestry check preserves the initial `main`-relative scope block. Documents why path-set containment was rejected in favor of strict graph ancestry (`is_ancestor`) on lines 198-208 with a concrete 52-file counterexample. Implements a strict 5-second network timeout for `gh` calls (`GH_TIMEOUT_SECONDS = 5`) to prevent blocking git hook execution.

## Context cost
10045 bytes, approximately 2500 tokens.
