---
package: rjm
path: scripts/invoke_session_start_gate.py
type: script
bytes: 10337
unit: inv-rjm-248
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/invoke_session_start_gate.py, sha256: 5acdeb0006a5c1d715a1bbdbaa4bc25b080dfa3dcc0b5fd486d9740b7acd09bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/invoke_session_start_gate.py

## Purpose — required, verbatim
> "Verification-based session start gate for all AI agents." — scripts/invoke_session_start_gate.py:2

## Design intent — required
Enforces mandatory pre-flight verification gates before an AI agent session begins work. It implements routing-level quality and safety checks (addressing ADR-033 and ADR-035) covering four critical areas: verifying that the persistent memory index exists and tier-1 memories are accessible (Gate 1: Memory-First), verifying that necessary GitHub CLI operation scripts exist and `usage-mandatory.md` is available (Gate 2: Skill Availability), inspecting legacy session log files if present while treating their absence as an expected pass under updated protocols (Gate 3: Session Log Verification), and ensuring the agent is not operating directly on protected branches such as `main` or `master` (Gate 4: Branch Verification). Without this gate, agents could commence tasks on protected branches without loading codebase context or available skills, risking direct unreviewed commits to production branches and context-free execution errors.

## Phase — required
cross-phase

## Inputs — required
- CLI options parsed via `argparse`:
  - `--check-only`: flag for non-blocking diagnostic mode — scripts/invoke_session_start_gate.py:197
  - `--skip-memory-gate`: flag to skip Gate 1 — scripts/invoke_session_start_gate.py:198
  - `--skip-skill-gate`: flag to skip Gate 2 — scripts/invoke_session_start_gate.py:199
  - `--skip-session-log-gate`: flag to skip Gate 3 — scripts/invoke_session_start_gate.py:200
  - `--skip-branch-gate`: flag to skip Gate 4 — scripts/invoke_session_start_gate.py:201
- File system artifacts:
  - Git repository root discovered via `get_repo_root()` — scripts/invoke_session_start_gate.py:204
  - Memory index file path referencing `"memory-index.md"` — scripts/invoke_session_start_gate.py:52
  - Tier-1 memory list `"project-overview", "codebase-structure", "usage-mandatory"` — scripts/invoke_session_start_gate.py:64
  - GitHub skill directory `".claude" / "skills" / "github" / "scripts"` — scripts/invoke_session_start_gate.py:78, checking operations `["pr", "issue", "reactions", "label", "milestone"]` — scripts/invoke_session_start_gate.py:86
  - Session log directory `".agents" / "sessions"` — scripts/invoke_session_start_gate.py:141
- Git repository state via `run_git`:
  - Current git branch from `"branch", "--show-current"` — scripts/invoke_session_start_gate.py:175
  - Current git commit from `"rev-parse", "--short", "HEAD"` — scripts/invoke_session_start_gate.py:188

## Outputs — required
- Formatted console output detailing gate evaluations:
  - Gate 1: `[PASS] Memory index exists`, memory reference count, `[PASS] All Tier 1 (essential) memories available` or `[WARN]` missing memories — scripts/invoke_session_start_gate.py:58-71
  - Gate 2: `[PASS] GitHub skills directory exists`, operation skill counts, total cataloged skills, `[PASS] usage-mandatory memory available` — scripts/invoke_session_start_gate.py:84-103
  - Gate 3: `[PASS] No session log for today (creation discontinued; optional)` or log validation status — scripts/invoke_session_start_gate.py:144, 151, 164
  - Gate 4: branch verification messages, reporting "[FAIL] Currently on protected branch:" — scripts/invoke_session_start_gate.py:183
  - Gate summary table reporting total passed, failed, and skipped gates with authorization verdict (`ALL GATES PASSED - Session start authorized` or `SESSION START BLOCKED`) — scripts/invoke_session_start_gate.py:251-272
- Process exit codes:
  - 0: All gates passed, or diagnostic check in `--check-only` mode — scripts/invoke_session_start_gate.py:11, 274
  - 2: Gate condition not met (blocking mode failure) — scripts/invoke_session_start_gate.py:13, 269
  - 3: External dependency failure (git command failure or repo root not found) — scripts/invoke_session_start_gate.py:14, 179, 207, 269

## Invokes — required
- script scripts.github_core.repo — scripts/invoke_session_start_gate.py:33

## Invoked by — required
orphan

## Concepts named — required, verbatim
`Memory-First` — scripts/invoke_session_start_gate.py:5 — used here
`Skill Availability` — scripts/invoke_session_start_gate.py:6 — used here
`Session Log` — scripts/invoke_session_start_gate.py:7 — used here
`Branch Verification` — scripts/invoke_session_start_gate.py:8 — used here
`ADR-035` — scripts/invoke_session_start_gate.py:10 — used here
`ADR-033` — scripts/invoke_session_start_gate.py:16 — used here
`get_repo_root` — scripts/invoke_session_start_gate.py:33 — used here
`run_git` — scripts/invoke_session_start_gate.py:36 — defined here
`check_memory_gate` — scripts/invoke_session_start_gate.py:50 — defined here
`tier1_memories` — scripts/invoke_session_start_gate.py:64 — defined here
`check_skill_gate` — scripts/invoke_session_start_gate.py:76 — defined here
`check_session_log_gate` — scripts/invoke_session_start_gate.py:108 — defined here
`check_branch_gate` — scripts/invoke_session_start_gate.py:173 — defined here
`main` — scripts/invoke_session_start_gate.py:195 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/invoke_session_start_gate.py`, language: Python 3, lines: 279
- documented invocation: `"Verification-based session start gate for all AI agents." — scripts/invoke_session_start_gate.py:2`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/invoke_session_start_gate.py --check-only`
  abridged stdout:
  ```text
  Session Start Gate - Verification-Based Protocol Enforcement
  Repository: /Users/peterkloss/Dev/ACMElabs/brain-v2
  Mode: Check Only (Non-Blocking)

  === Gate 1: Memory-First Verification ===
  [FAIL] Memory index not found: /Users/peterkloss/Dev/ACMElabs/brain-v2/.serena/memories/memory-index.md

  === Gate 2: Skill Availability Check ===
  [FAIL] GitHub skills directory not found: /Users/peterkloss/Dev/ACMElabs/brain-v2/.claude/skills/github/scripts

  === Gate 3: Session Log Verification ===
  [PASS] No session log for today (creation discontinued; optional)

  === Gate 4: Branch Verification ===
  [PASS] Current branch: v2
    Starting commit: b30bb3c

  ============================================================
  Gate Results Summary
  ============================================================
    Gate1_MemoryFirst: FAIL
    Gate2_SkillAvailability: FAIL
    Gate3_SessionLog: PASS
    Gate4_BranchVerification: PASS

  Total: 2 passed, 2 failed, 0 skipped

  SESSION START BLOCKED
  Failed gates: Gate 1 (Memory-First), Gate 2 (Skill Availability)

  (Running in Check-Only mode - not blocking)
  ```
  **actual exit code**: 0
  Additional execution in `sources/rjm`: `python3 scripts/invoke_session_start_gate.py`, stdout reports Gate 4 failure on branch `main` (`[FAIL] Currently on protected branch: main`, `SESSION START BLOCKED`), actual exit code: 2
- documented exit codes:
  `"0  - Success: All gates passed" — scripts/invoke_session_start_gate.py:11`
  `"1  - Logic error in gate script itself" — scripts/invoke_session_start_gate.py:12`
  `"2  - Gate condition not met (BLOCKING)" — scripts/invoke_session_start_gate.py:13`
  `"3  - External dependency failure (git, file system)" — scripts/invoke_session_start_gate.py:14`
  vs. actual exit paths:
  `scripts/invoke_session_start_gate.py:207` (`return 3` if `get_repo_root()` returns None)
  `scripts/invoke_session_start_gate.py:269` (`return exit_code if exit_code else 2` when failed gates exist in blocking mode)
  `scripts/invoke_session_start_gate.py:274` (`return 0` when all gates pass or in `--check-only` mode)
  dispatched via `sys.exit(main())` at `scripts/invoke_session_start_gate.py:278`
- for validators/gates:
  Can it exit non-zero? Yes, exits 2 on gate condition failure and 3 on external dependency failure.
  Does it fail on the source repo's own default branch? Yes! On the source repository's own default branch (`main`), Gate 4 checks `if branch in ("main", "master"):` and fails, blocking the session with exit code 2.
- does the output match what the documentation claims? yes, verifies the 4 session start gates and reports structured pass/fail verdicts.

## Defects — required
- `orphan` · scripts/invoke_session_start_gate.py:1 · Script is an orphan uninvoked by any hook, lifecycle command, or orchestrator script; identified as an orphan candidate in `.agents/audits/2026-07-02-safety-audit.md:82` and tested as a decoy outside hook roots in `tests/hooks/test_adr_hook_claims.py:386`.
- `exit-code-mismatch` · scripts/invoke_session_start_gate.py:12 · Exit code 1 is documented in docstring as `"1  - Logic error in gate script itself"` but no code path in `invoke_session_start_gate.py` ever returns or exits with code 1.
- `unfailable-gate` · scripts/invoke_session_start_gate.py:109 · Gate 3 (`check_session_log_gate`) always returns `True` regardless of whether the sessions directory exists, whether daily logs exist, or whether JSON parsing errors occur, acting as advisory-only rather than an enforcement gate.
- `script-bug` · scripts/invoke_session_start_gate.py:64 · Function `check_memory_gate` prints `[WARN] Missing Tier 1 memories` when tier-1 memories are missing but still returns `True`, allowing Gate 1 to pass as long as `memory-index.md` exists.

## Observations
- Incorporates extensive historical documentation on session log deprecation: docstring in lines 111-139 explains why session log validation was removed from the active Start checklist in `AGENTS.md` and why Gate 3 prints `[PASS]` when no session log is present.
- Hardens git subprocess calls against hangs by specifying `timeout=10` and synthesizing exit code 124 upon timeout (lines 36-47).
- Directly enforces branch policy by prohibiting agent sessions on `main` and `master`, instructing contributors to create a feature branch (`git checkout -b feat/your-feature-name`).

## Context cost
10337 bytes, approximately 2600 tokens (plus ~3.6 KB of imported library module `scripts.github_core.repo`, totaling ~14 KB / ~3,500 tokens).
