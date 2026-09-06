---
package: rjm
path: scripts/mutation_test_proc_group.py
type: script
bytes: 5551
unit: inv-rjm-254
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/mutation_test_proc_group.py

## Purpose — required, verbatim
> "Mutation harness for process-group timeout fix." — scripts/mutation_test_proc_group.py:2

## Design intent — required
Automated mutation testing harness designed to verify that unit tests guarding process-group timeouts (Issue #4217) are genuinely load-bearing. It systematically introduces targeted code mutations into `scripts/validation/git_hook_policy.py` and `scripts/validation/run_workflow_local_test.py` (such as disabling `start_new_session` or replacing `_killpg_safe` with `proc.kill()`), asserts that the targeted test suites fail (go RED), verifies that correct code passes (stays GREEN), and executes everything inside disposable git worktrees created via `isolated_mutation_worktree` to protect active repo state.

## Phase — required
cross-phase

## Inputs — required
- Target source files:
  - `GHP_REL = Path("scripts") / "validation" / "git_hook_policy.py"` — scripts/mutation_test_proc_group.py:33
  - `WLT_REL = Path("scripts") / "validation" / "run_workflow_local_test.py"` — scripts/mutation_test_proc_group.py:34
- Target test files:
  - `GHP_TESTS_REL = Path("tests") / "validation" / "test_run_command_proc_group.py"` — scripts/mutation_test_proc_group.py:35
  - `WLT_TESTS_REL = Path("tests") / "validation" / "test_run_workflow_local_test.py"` — scripts/mutation_test_proc_group.py:36
- Pytest execution environment via uv: `["uv", "run", "--frozen", "python", "-m", "pytest"]` (scripts/mutation_test_proc_group.py:39)

## Outputs — required
- Mutation phase banners and test outcomes printed to stdout (scripts/mutation_test_proc_group.py:66, 74, 131, 164)
- Temporary mutation worktree created and pruned under `.pytest_cache/mutation-worktrees/` (scripts/mutation_test_proc_group.py:168)
- Process exit code: 0 if all mutations are killed and baselines pass, non-zero (1) if any mutation survives or test baseline fails (scripts/mutation_test_proc_group.py:14-15, 59, 62, 65, 73, 83)

## Invokes — required
- function isolated_mutation_worktree — scripts/mutation_test_proc_group.py:29
- function purge_bytecode — scripts/mutation_test_proc_group.py:30

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `isolated_mutation_worktree` — scripts/mutation_test_proc_group.py:29 — used here
- `purge_bytecode` — scripts/mutation_test_proc_group.py:30 — used here
- `GHP_REL` — scripts/mutation_test_proc_group.py:33 — defined here
- `WLT_REL` — scripts/mutation_test_proc_group.py:34 — defined here
- `GHP_TESTS_REL` — scripts/mutation_test_proc_group.py:35 — defined here
- `WLT_TESTS_REL` — scripts/mutation_test_proc_group.py:36 — defined here
- `TARGETS` — scripts/mutation_test_proc_group.py:37 — defined here
- `PYTEST` — scripts/mutation_test_proc_group.py:39 — defined here
- `run_tests` — scripts/mutation_test_proc_group.py:42 — defined here
- `assert_red` — scripts/mutation_test_proc_group.py:55 — defined here
- `assert_green` — scripts/mutation_test_proc_group.py:69 — defined here
- `mutate` — scripts/mutation_test_proc_group.py:77 — defined here
- `restore` — scripts/mutation_test_proc_group.py:88 — defined here
- `_run_mutations` — scripts/mutation_test_proc_group.py:92 — defined here
- `main` — scripts/mutation_test_proc_group.py:167 — defined here

## Structure
- Module docstring and exit codes — scripts/mutation_test_proc_group.py:1
- Root directory setup and workspace imports — scripts/mutation_test_proc_group.py:24
- Path target constants — scripts/mutation_test_proc_group.py:33
- Test execution wrapper and bytecode purge — scripts/mutation_test_proc_group.py:42
- Test outcome assertions — scripts/mutation_test_proc_group.py:55
- File mutation and byte restoration helpers — scripts/mutation_test_proc_group.py:77
- Mutation test suite coordinator — scripts/mutation_test_proc_group.py:92
- Main entry point with worktree isolation — scripts/mutation_test_proc_group.py:167

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/mutation_test_proc_group.py`
- **language:** Python (python3)
- **lines:** 174
- **documented invocation:**
  - `python3 scripts/mutation_test_proc_group.py`
- **executed:** yes
- **actual command run:** `python3 scripts/mutation_test_proc_group.py`
- **abridged stdout:**
```
=== Mutation harness: process-group timeout fix ===

[Baseline] Checking tests are green before mutations...
  GREEN ok: inverted-control: GHP tests green with correct code
  GREEN ok: inverted-control: WLT tests green with correct code

[Mutation] M1-start_new_session-False-ghp
  KILLED ok: M1-start_new_session-False-ghp
[Mutation] M2-killpg_safe-replaced-with-proc.kill
  KILLED ok: M2-killpg_safe-replaced-with-proc.kill
[Mutation] M3-start_new_session-False-wlt
  KILLED ok: M3-start_new_session-False-wlt
[Mutation] M4-killpg_safe-replaced-with-proc.kill-wlt
  KILLED ok: M4-killpg_safe-replaced-with-proc.kill-wlt

[Inverted controls] Verifying correct code stays green...
  GREEN ok: inverted-control: GHP tests green with correct code
  GREEN ok: inverted-control: WLT tests green with correct code

[Baseline] Final green check after all mutations restored...
  GREEN ok: inverted-control: GHP tests green with correct code
  GREEN ok: inverted-control: WLT tests green with correct code

=== All mutations killed. Harness passed. ===
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "Exit 0 = all mutations killed, inverted-control green, baseline green." — scripts/mutation_test_proc_group.py:14
    - "Exit non-zero = a mutation survived (test gap) or setup failure." — scripts/mutation_test_proc_group.py:15
  - Actual exit paths:
    - `sys.exit(1)` — scripts/mutation_test_proc_group.py:59
    - `sys.exit(1)` — scripts/mutation_test_proc_group.py:62
    - `sys.exit(1)` — scripts/mutation_test_proc_group.py:65
    - `sys.exit(1)` — scripts/mutation_test_proc_group.py:73
    - `sys.exit(1)` — scripts/mutation_test_proc_group.py:83
    - (implicitly returns 0 on completion of `main()`)
- **for validators/gates:**
  - Can exit non-zero: yes, calls `sys.exit(1)` if a test suite remains green under mutation, if no tests run, or if a mutation cannot be applied.
  - Verified on repository default branch: runs cleanly to completion, kills all 4 mutations, and exits 0.
- **does the output match what the documentation claims:** yes, confirms all mutations killed and baselines green.

## Defects — required
none

## Observations
- Uses `isolated_mutation_worktree` context manager to guarantee mutations are applied only in a detached temporary git worktree.
- Runs `purge_bytecode` before each test execution to avoid stale `.pyc` caching interference.

## Context cost
5551 bytes, 174 lines, ~1100 tokens.
