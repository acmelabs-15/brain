---
package: rjm
path: scripts/github_core/placeholder_identity.py
type: script
bytes: 4493
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/placeholder_identity.py, sha256: 6e0246dd64011fdce3eeb1e8094471fecd3e2f8d6855899940acc57fd7447f1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/placeholder_identity.py

## Purpose — required, verbatim
> "Centralized placeholder identity denylist for pr-autofix worktrees." — scripts/github_core/placeholder_identity.py:1

## Design intent — required
Serves as the single source of truth for detecting and stripping test placeholder git identities (specifically `Test <test@test.com>`) from commit histories and squash-commit bodies. It prevents accidental leakage of test fixture credentials into git commit author and `Co-authored-by` trailer blocks (issue #2466 / PR #2458), while deliberately preserving RFC-2606 reserved domains (`@example.com`, etc.) used legitimately across test suites.

## Phase — required
cross-phase

## Inputs — required
- Git author/committer name string (`name: str`) and email string (`email: str`) at `scripts/github_core/placeholder_identity.py:64`.
- Commit message / squash-commit body string (`body: str`) at `scripts/github_core/placeholder_identity.py:94`.

## Outputs — required
- Boolean flag (`True` or `False`) indicating placeholder match from `is_placeholder_identity` at `scripts/github_core/placeholder_identity.py:64`.
- Filtered commit body string with placeholder `Co-authored-by` trailers removed from `filter_coauthor_trailers` at `scripts/github_core/placeholder_identity.py:94`.

## Invokes — required
none

## Invoked by — required
- script placeholder_identity — scripts/validation/check_placeholder_identity.py:128
- script placeholder_identity — scripts/validation/git_hook_policy.py:8137

## Concepts named — required, verbatim
- `pr-autofix` — scripts/github_core/placeholder_identity.py:1 — used here
- `PLACEHOLDER_EMAILS` — scripts/github_core/placeholder_identity.py:40 — defined here
- `PLACEHOLDER_EMAIL_REGEXES` — scripts/github_core/placeholder_identity.py:43 — defined here
- `PLACEHOLDER_NAMES` — scripts/github_core/placeholder_identity.py:50 — defined here
- `_CO_AUTHOR_RE` — scripts/github_core/placeholder_identity.py:53 — defined here
- `is_placeholder_identity` — scripts/github_core/placeholder_identity.py:64 — defined here
- `filter_coauthor_trailers` — scripts/github_core/placeholder_identity.py:94 — defined here

## Structure
none (python module; constants: PLACEHOLDER_EMAILS, PLACEHOLDER_EMAIL_REGEXES, PLACEHOLDER_NAMES, _CO_AUTHOR_RE; functions: is_placeholder_identity, filter_coauthor_trailers)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/placeholder_identity.py`, language: Python 3, lines: 120
- documented invocation: none (library module; imported by git pre-push hooks and worktree validation scripts)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/placeholder_identity.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.placeholder_identity import is_placeholder_identity, filter_coauthor_trailers; print('check:', is_placeholder_identity('Test', 'test@test.com'), repr(filter_coauthor_trailers('Co-authored-by: Test <test@test.com>')))"`
  abridged stdout: `check: True ''`
  **actual exit code:** 0
- documented exit codes: none (library module) vs. actual exit paths in code: returns boolean / string values; no sys.exit calls; clean execution exits 0.
- for validators/gates:
  - can it exit non-zero? no (pure library module without sys.exit)
  - does it fail on the source repo's own default branch? no, module execution exits 0
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Root-cause remediation: documents how squash merge a2cc80e7 (#2458) on main carried a spurious `Co-authored-by: Test <test@test.com>` trailer originating from a pytest fixture running with the wrong cwd.
- Intentional RFC-2606 exception: reserved addresses (`*@example.com`, etc.) are explicitly excluded from the denylist because ten test files use them as fixture identities.
- Context cost: 4,493 bytes, approximately 1,123 tokens.
