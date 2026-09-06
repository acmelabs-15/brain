---
package: rjm
path: scripts/security/invoke_security_retrospective.py
type: script
bytes: 25019
unit: inv-rjm-260
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/security/invoke_security_retrospective.py

## Purpose — required, verbatim
> "Analyzes security reports and external review comments to identify false negatives." — scripts/security/invoke_security_retrospective.py:5

## Design intent — required
Post-review retrospective orchestrator that detects security review false negatives by comparing agent findings in local markdown security reports (`.agents/security/SR-*.md`) against feedback from external review comments on GitHub pull requests (such as Gemini code reviews or manual security audits). When external reviewers flag security vulnerabilities (matching CWE patterns) that local security reports missed, the script identifies these discrepancies as false negatives, initiates root cause analysis (RCA), logs the requirement to update detection prompts (`src/claude/security.md`) and benchmark suites (`.agents/security/benchmarks/`), persists the retrospective lessons into Serena project memory (blocking) and Forgetful semantic memory fallback (best-effort), and generates a structured retrospective report (`.agents/analysis/security-false-negative-rca-pr<N>.md`). Without it, security agent review blind spots and recurring vulnerability classes would fail to be systematically cataloged into persistent agent memory or translated into automated test cases.

## Phase — required
none

## Inputs — required
- CLI options parsed via `argparse.ArgumentParser` (`main()`):
  - `--pr-number`, `-p` — scripts/security/invoke_security_retrospective.py:695-700: target pull request number to analyze
  - `--source`, `-s` — scripts/security/invoke_security_retrospective.py:703-709: external security review source (`Gemini`, `Manual`, `Other`, default `Gemini`)
  - `--dry-run`, `--whatif` — scripts/security/invoke_security_retrospective.py:712-716: simulate retrospective analysis without writing files or memory entries
  - `--non-interactive` — scripts/security/invoke_security_retrospective.py:719-722: non-interactive mode flag for CI automation
  - `--verbose`, `-v` — scripts/security/invoke_security_retrospective.py:725-729: enable debug logging
- Local security report files:
  - `SR-*.md` read from repository `.agents/security` directory — scripts/security/invoke_security_retrospective.py:183
- Local fallback JSON:
  - `false-negatives.json` — scripts/security/invoke_security_retrospective.py:437
- Git repository state and GitHub CLI:
  - Repository root via `get_repo_root` — scripts/security/invoke_security_retrospective.py:34, 88
  - Repository owner/name via `nameWithOwner` — scripts/security/invoke_security_retrospective.py:286
  - Pull request review comments via `comments` — scripts/security/invoke_security_retrospective.py:212

## Outputs — required
- Serena project memory: `security-false-negative` — scripts/security/invoke_security_retrospective.py:477
- Local JSON fallback file: `false-negatives.json` — scripts/security/invoke_security_retrospective.py:437
- Root Cause Analysis report: `security-false-negative-rca-pr` — scripts/security/invoke_security_retrospective.py:603
- Planned prompt updates (logged): `src/claude/security.md` — scripts/security/invoke_security_retrospective.py:519, 553
- Planned benchmark test cases (logged): `benchmarks` — scripts/security/invoke_security_retrospective.py:520, 578
- Process exit code: 0 on success or clean scan, 1 on Serena failure or critical error, 3 on external fetch failure or rate limit — scripts/security/invoke_security_retrospective.py:118, 124, 134, 151, 173
- Console logging: structured progress and diagnostic logs via Python standard `logging` — scripts/security/invoke_security_retrospective.py:36-41

## Invokes — required
- script scripts.github_core.repo — scripts/security/invoke_security_retrospective.py:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-042` — scripts/security/invoke_security_retrospective.py:13 — used here
- `Forgetful` — scripts/security/invoke_security_retrospective.py:6 — used here
- `Serena` — scripts/security/invoke_security_retrospective.py:6 — used here
- `ExternalReviewSource` — scripts/security/invoke_security_retrospective.py:46 — defined here
- `FalseNegative` — scripts/security/invoke_security_retrospective.py:55 — defined here
- `SecurityRetrospective` — scripts/security/invoke_security_retrospective.py:68 — defined here
- `owasp` — scripts/security/invoke_security_retrospective.py:273 — used here
- `CWE-77` — scripts/security/invoke_security_retrospective.py:359 — used here
- `CWE-78` — scripts/security/invoke_security_retrospective.py:359 — used here
- `CWE-89` — scripts/security/invoke_security_retrospective.py:359 — used here
- `CWE-94` — scripts/security/invoke_security_retrospective.py:359 — used here
- `CWE-798` — scripts/security/invoke_security_retrospective.py:359 — used here
- `CWE-22` — scripts/security/invoke_security_retrospective.py:360 — used here
- `CWE-23` — scripts/security/invoke_security_retrospective.py:360 — used here
- `CWE-36` — scripts/security/invoke_security_retrospective.py:360 — used here
- `CWE-287` — scripts/security/invoke_security_retrospective.py:360 — used here
- `CWE-502` — scripts/security/invoke_security_retrospective.py:360 — used here
- `External Reviewer` — scripts/security/invoke_security_retrospective.py:485 — used here
- `Root Cause Analysis` — scripts/security/invoke_security_retrospective.py:509 — used here
- `Security Agent` — scripts/security/invoke_security_retrospective.py:647 — used here

## Structure
(no markdown headings; flat python script defining classes and functions)
- `ExternalReviewSource`
- `FalseNegative`
- `SecurityRetrospective`
- `main`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/security/invoke_security_retrospective.py`, language: Python 3, lines: 750
- documented invocation: `"python invoke_security_retrospective.py --pr-number 752 --source Manual --dry-run" — scripts/security/invoke_security_retrospective.py:11`
- **executed:** yes
- actual command run: `python3 scripts/security/invoke_security_retrospective.py --pr-number 752 --source Manual --dry-run`, abridged stdout: `[INFO] Starting security retrospective for PR #752 \n [INFO] External review source: Manual \n [INFO] [DRY RUN] No actual writes will be performed \n [INFO] Loaded security report: SR-pr752-memory-system-foundation.md \n [INFO] Found 8 security-related comment(s) from external review \n [INFO] Agent reported CWEs: ['CWE-1035', 'CWE-1104', 'CWE-158', ...] \n [INFO] [PASS] No false negatives detected. Security agent findings match external review.`, **actual exit code**: 0
- documented exit codes: `"0: Success (no issues or all operations completed)" — scripts/security/invoke_security_retrospective.py:688`, `"1: Failure (Serena unavailable or critical error)" — scripts/security/invoke_security_retrospective.py:689`, `"3: External error (GitHub API failure, timeout, or empty external review fetch)" — scripts/security/invoke_security_retrospective.py:690`; actual exit paths: `scripts/security/invoke_security_retrospective.py:118` (`return 3`), `scripts/security/invoke_security_retrospective.py:124` (`return 0`), `scripts/security/invoke_security_retrospective.py:134` (`return 0`), `scripts/security/invoke_security_retrospective.py:151` (`return 1`), `scripts/security/invoke_security_retrospective.py:173` (`return 0`), `scripts/security/invoke_security_retrospective.py:745` (`return retrospective.run()`), `scripts/security/invoke_security_retrospective.py:749` (`sys.exit(main())`)
- for validators/gates: can exit non-zero (exits 1 on Serena failure in non-dry-run mode, exits 3 on external API failure, rate limiting, or subprocess timeout); does not fail on default branch when PR 752 is checked in dry run (exits 0)
- does the output match what the documentation claims? yes, loads existing security reports, queries GitHub review comments, compares CWEs, and reports 0 false negatives for PR 752

## Defects — required
- orphan — scripts/security/invoke_security_retrospective.py:1: Nothing in scope invokes this security retrospective script (it is not triggered by lifecycle commands or CI workflows, and is only referenced in out-of-scope test suites under tests/).
- doc-drift — scripts/security/invoke_security_retrospective.py:6: Top-level module docstring states the script stores findings in Forgetful semantic memory, but `_store_in_forgetful()` stubs out the Forgetful MCP integration and writes solely to local JSON fallback (`.agents/security/false-negatives.json`).
- doc-drift — scripts/security/invoke_security_retrospective.py:7: Top-level module docstring states the script updates `security.md` prompt and benchmark suite, but `_update_security_prompt()` (lines 564-571) and `_update_benchmarks()` (lines 588-592) only emit informational log messages rather than modifying any prompt files or test suites.

## Observations
- Distinguishes between blocking and best-effort memory systems: Serena project memory writes are required to succeed (failing the retrospective with exit code 1 if unavailable, lines 146-151), while Forgetful semantic memory is treated as non-blocking with a local JSON file fallback (`.agents/security/false-negatives.json`).
- Implements regex-based heuristic filtering (`_is_security_comment`) across GitHub review comments matching vulnerability keywords (`cwe-`, `vulnerability`, `injection`, `traversal`, `xss`, `owasp`, etc.) and extracts CWE identifiers (`CWE-\d+`) to compare against agent reports.
- Employs a 120-second timeout ceiling (`SUBPROCESS_TIMEOUT_SECONDS = 120`) on GitHub CLI subprocess executions to guard against network hangs.

## Context cost
File size: 25,019 bytes (~6,255 tokens). Loads `scripts/github_core/repo.py` (3,658 bytes, ~915 tokens). Total context cost: 28,677 bytes (~7,170 tokens).
