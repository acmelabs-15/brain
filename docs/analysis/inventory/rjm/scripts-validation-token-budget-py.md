---
package: rjm
path: scripts/validation/token_budget.py
type: script
bytes: 6454
unit: inv-rjm-307
in_scope_via: scripts/validation/instruction_budget.py
aliases: []
memo_inputs:
  - {path: scripts/validation/token_budget.py, sha256: 02ab5e547356da50e609eac3e1cf435dc4ab028583074fe3a9f445757651ffe4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/token_budget.py

## Purpose — required, verbatim
> "Validate HANDOFF.md token budget to prevent exceeding context limits." — scripts/validation/token_budget.py:2

## Design intent — required
Protects iterative agent workflows from prompt context exhaustion by enforcing a token budget (default 5,000 tokens) on `.agents/HANDOFF.md`. When handoff artifacts accumulate uncurated conversational context across sessions, agent prompt capacity is consumed, degrading performance and increasing inference latency. The script implements a heuristic token estimation model (`estimate_token_count`) that measures character count, Unicode punctuation and symbols, non-ASCII characters (multilingual text and emojis), digits, and whitespace density, augmented with a 5% safety margin. In CI environments (`--ci`), exceeding the budget halts pipeline execution with exit code 1; in local environments, it provides actionable remediation instructions per ADR-014 (archiving old state to `.agents/archive/HANDOFF-YYYY-MM-DD.md` and maintaining a minimal dashboard) while exiting 0.

## Phase — required
none

## Inputs — required
- CLI option `--path`: Path to the repository root (env: `REPO_PATH`, default: `.`) — scripts/validation/token_budget.py:164
- CLI option `--max-tokens`: Maximum allowed tokens (env: `MAX_TOKENS`, default: 5000) — scripts/validation/token_budget.py:170
- CLI option `--ci`: CI mode flag to exit 1 on budget exceeded (env: `CI`) — scripts/validation/token_budget.py:176
- Handoff file at `.agents/HANDOFF.md` relative to repo root — scripts/validation/token_budget.py:105

## Outputs — required
- Console summary on stdout reporting file size, characters, estimated tokens, budget, and pass/fail verdict — scripts/validation/token_budget.py:115-121
- Remediation instructions on stdout when over budget: `FAIL: HANDOFF.md exceeds token budget` — scripts/validation/token_budget.py:127
- Error messages on stderr when path is not a directory: `Error: path is not a directory:` — scripts/validation/token_budget.py:188
- Exit code 0: Success (within budget or file not found) — scripts/validation/token_budget.py:15
- Exit code 1: Logic error (token budget exceeded, CI mode only) — scripts/validation/token_budget.py:16
- Exit code 2: Config error when repository path is not a directory — scripts/validation/token_budget.py:189

## Invokes — required
none

## Invoked by — required
- script estimate_token_count — scripts/validation/instruction_budget.py:62
- script estimate_token_count — scripts/validation/passive_context_budget.py:32

## Concepts named — required, verbatim
- `_count_punct_and_symbols` — scripts/validation/token_budget.py:30 — defined here
- `estimate_token_count` — scripts/validation/token_budget.py:40 — defined here
- `validate_token_budget` — scripts/validation/token_budget.py:96 — defined here
- `build_parser` — scripts/validation/token_budget.py:156 — defined here
- `main` — scripts/validation/token_budget.py:181 — defined here

## Structure
- Shebang and module docstring — scripts/validation/token_budget.py:1-18
- Imports — scripts/validation/token_budget.py:19-27
- Punctuation and symbol counting helper (_count_punct_and_symbols) — scripts/validation/token_budget.py:30-38
- Heuristic token estimation algorithm (estimate_token_count) — scripts/validation/token_budget.py:40-93
- Token budget validation logic (validate_token_budget) — scripts/validation/token_budget.py:96-149
- Argument parser with environment variable defaults and main entry point — scripts/validation/token_budget.py:156-196

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/token_budget.py`, language: Python 3, lines: 196
- documented invocation:
  - "Validate HANDOFF.md token budget." — scripts/validation/token_budget.py:159
- executed: yes
- actual command run: `python3 scripts/validation/token_budget.py --path .`
- abridged stdout:
  ```
  PASS: HANDOFF.md not found (OK for new repos)
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Success (within budget or file not found)" — scripts/validation/token_budget.py:15
  - "1 - Logic error (token budget exceeded, CI mode only)" — scripts/validation/token_budget.py:16
  - Actual exit paths in code:
    - line 109: `return 0` when `HANDOFF.md` not found
    - line 138: `return 1` when over budget and `ci` is True
    - line 139: `return 0` when over budget and `ci` is False
    - line 148: `return 0` when within budget
    - line 189: `return 2` when `--path` is not a directory
    - line 195: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes, exits 1 on budget violation in CI mode (`--ci`), and exits 2 if path argument is not a directory
  - does it fail on the source repo's own default branch: no, exits 0 (file not present on default branch)
- does the output match what the documentation claims: yes, evaluates token budget and reports clear pass/fail status

## Defects — required
none

## Observations
- `estimate_token_count` is exported and utilized as a shared token estimation heuristic across other validation scripts (`instruction_budget.py` and `passive_context_budget.py`).
- Supports configuration via environment variables `REPO_PATH`, `MAX_TOKENS`, and `CI`.

## Context cost
6454 bytes, 196 lines, ~1610 tokens.
