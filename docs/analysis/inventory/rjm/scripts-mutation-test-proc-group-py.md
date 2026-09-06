---
package: rjm
path: scripts/mutation_test_proc_group.py
type: script
bytes: 5551
unit: inv-rjm-254
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/mutation_test_proc_group.py, sha256: 74dd80167b2ade1656564eb8fd46a7aadf2dc51c53bf462d179014270bed8bfc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/mutation_test_proc_group.py

## Purpose — required, verbatim
> "Mutation harness for process-group timeout fix." — scripts/mutation_test_proc_group.py:2

## Design intent — required
A specialized mutation verification script that systematically proves that test suites covering process-group timeout logic in `scripts/validation/git_hook_policy.py` and `scripts/validation/run_workflow_local_test.py` catch real regressions. Applies four targeted code mutations (disabling `start_new_session` and replacing `_killpg_safe` with `proc.kill()`), asserts each mutant produces a failing test suite (KILLED), verifies inverted controls remain green, and executes inside an isolated git worktree so workspace files are never corrupted.

## Phase — required
rjm:test

## Inputs — required
- Target files to mutate: `TARGETS = (GHP_REL, WLT_REL)` — scripts/mutation_test_proc_group.py:37
- Target test suites: `GHP_TESTS_REL = Path("tests") / "validation" / "test_run_command_proc_group.py"` — scripts/mutation_test_proc_group.py:35, and `WLT_TESTS_REL = Path("tests") / "validation" / "test_run_workflow_local_test.py"` — scripts/mutation_test_proc_group.py:36

## Outputs — required
- Test run status and mutation logs: "=== All mutations killed. Harness passed. ===" — scripts/mutation_test_proc_group.py:164
- Process exit codes: "Exit 0 = all mutations killed, inverted-control green, baseline green." — scripts/mutation_test_proc_group.py:14

## Invokes — required
- script isolated_mutation_worktree — scripts/mutation_test_proc_group.py:29
- script purge_bytecode — scripts/mutation_test_proc_group.py:30
- command uv — scripts/mutation_test_proc_group.py:39
- command python — scripts/mutation_test_proc_group.py:39
- command pytest — scripts/mutation_test_proc_group.py:39

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `process-group timeout fix` — scripts/mutation_test_proc_group.py:2 — used here
- `mutation harness` — scripts/mutation_test_proc_group.py:2 — defined here | used here
- `inverted-control` — scripts/mutation_test_proc_group.py:14 — defined here | used here
- `isolated_mutation_worktree` — scripts/mutation_test_proc_group.py:29 — used here
- `purge_bytecode` — scripts/mutation_test_proc_group.py:30 — used here
- `run_tests` — scripts/mutation_test_proc_group.py:42 — defined here
- `assert_red` — scripts/mutation_test_proc_group.py:55 — defined here
- `assert_green` — scripts/mutation_test_proc_group.py:69 — defined here
- `mutate` — scripts/mutation_test_proc_group.py:77 — defined here
- `restore` — scripts/mutation_test_proc_group.py:88 — defined here
- `_run_mutations` — scripts/mutation_test_proc_group.py:92 — defined here

## Structure
- Module docstring and mutation harness protocol — scripts/mutation_test_proc_group.py:2
- Target paths and runner command definition — scripts/mutation_test_proc_group.py:33
- Test execution and assertion functions — scripts/mutation_test_proc_group.py:42
- Code mutation and restoration utilities — scripts/mutation_test_proc_group.py:77
- Mutation suite driver _run_mutations — scripts/mutation_test_proc_group.py:92
- main entry point using isolated worktree — scripts/mutation_test_proc_group.py:167

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/mutation_test_proc_group.py`
- **language:** Python
- **lines:** 174
- **documented invocation:**
  `#!/usr/bin/env python3` — scripts/mutation_test_proc_group.py:1
- **executed:** yes
- **actual command:** `python3 scripts/mutation_test_proc_group.py`
- **actual stdout:**
```text
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
- **documented exit codes vs actual:**
  - "Exit 0 = all mutations killed, inverted-control green, baseline green." — scripts/mutation_test_proc_group.py:14 vs normal return from main — scripts/mutation_test_proc_group.py:167
  - "Exit non-zero = a mutation survived (test gap) or setup failure." — scripts/mutation_test_proc_group.py:15 vs `sys.exit(1)` — scripts/mutation_test_proc_group.py:59, 62, 65, 73, 83
- **gate check:** Can exit non-zero (exits 1 if a mutant survives, pytest fails baseline, or mutation cannot apply). On default branch, exits 0 with all 4 mutations killed and all baselines green.
- **output match:** Output matches the documented mutation lifecycle.

## Defects — required
- orphan — scripts/mutation_test_proc_group.py:1 — No in-scope file invokes this mutation harness; run manually or during defect reproduction sessions.

## Observations
Uses `isolated_mutation_worktree` context manager from `scripts.testing.mutation_workspace` to apply code mutations safely in an isolated worktree branch without dirtying the working repository tree.

## Context cost
5551 bytes, 174 lines, plus `scripts/testing/mutation_workspace.py` (5200 bytes). Total ~10751 bytes, ~2500 tokens.
