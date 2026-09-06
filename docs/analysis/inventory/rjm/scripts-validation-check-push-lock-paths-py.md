---
package: rjm
path: scripts/validation/check_push_lock_paths.py
type: script
bytes: 12248
unit: inv-rjm-282
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_push_lock_paths.py, sha256: 62161c502e0452a137d97f1f04b7777353fb9ed170994965ff1a78fa03e8473e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_push_lock_paths.py

## Purpose — required, verbatim
> "Fail when a tracked prescription names a push-lock path that is not canonical." — scripts/validation/check_push_lock_paths.py:2

## Design intent — required
Guarantees concurrency safety across distributed workflows and developer worktrees by enforcing that every tracked Markdown file prescribing a push-lock command uses the single canonical lock file path. Because `flock` only serializes processes that open the exact same file path, any divergence in lock path names eliminates the mutual exclusion guarantee, allowing concurrent git pushes that risk race conditions and repository corruption. By scanning both fenced code blocks and unfenced prose runs while skipping historical archives and retrospective notes, the checker catches non-canonical lock paths and ambiguous unresolvable lock variables at commit time before they reach `main`.

## Phase — required
rjm:test

## Inputs — required
- `--repo-root`: Repository root directory path (default: `.` via `parser.add_argument("--repo-root", default=".")` — scripts/validation/check_push_lock_paths.py:285)
- Git index cached tracked files obtained via `["git", "-C", str(repo_root), "ls-files", "-z", "--cached"]` — scripts/validation/check_push_lock_paths.py:222
- Tracked Markdown files (`.md` extension) excluding `.agents/retrospective/`, `.agents/audits/`, and `.agents/archive/` prefixes — scripts/validation/check_push_lock_paths.py:54-58, 231-232
- Text content of tracked Markdown files read from the working tree via `target.read_text(encoding="utf-8", errors="replace")` — scripts/validation/check_push_lock_paths.py:242

## Outputs — required
- Process exit code: 0 for all prescriptions agreeing, 1 for non-canonical lock paths, 2 for configuration or runtime error — scripts/validation/check_push_lock_paths.py:22-24, 292, 297
- Boolean validation result returned by `validate_push_lock_paths(repo_root)` (`True` on pass, `False` on error or violation) — scripts/validation/check_push_lock_paths.py:258, 268, 272, 280
- Status and violation messages printed to `sys.stdout` and `sys.stderr`:
  - "[PASS] push-lock: 0 violation(s) in {examined} tracked Markdown file(s)" — scripts/validation/check_push_lock_paths.py:271
  - "[FAIL] {len(violations)} push-lock path(s) in {examined} tracked Markdown" — scripts/validation/check_push_lock_paths.py:274
  - "push-lock: {len(violations)} violation(s) in {examined} tracked Markdown file(s)" — scripts/validation/check_push_lock_paths.py:296

## Invokes — required
- script push_lock_resolver — scripts/validation/check_push_lock_paths.py:40

## Invoked by — required
- script check_push_lock_paths — scripts/validation/pre_pr_sequence.py:53

## Concepts named — required, verbatim
- `push-lock` — scripts/validation/check_push_lock_paths.py:2 — defined here
- `flock` — scripts/validation/check_push_lock_paths.py:4 — used here
- `fenced block` — scripts/validation/check_push_lock_paths.py:15 — used here
- `push-lock-historical` — scripts/validation/check_push_lock_paths.py:16 — defined here
- `ADR-035` — scripts/validation/check_push_lock_paths.py:21 — used here
- `CANONICAL_TEMPLATE` — scripts/validation/check_push_lock_paths.py:50 — defined here
- `HISTORICAL_MARKER` — scripts/validation/check_push_lock_paths.py:51 — defined here
- `EXCLUDED_PREFIXES` — scripts/validation/check_push_lock_paths.py:54 — defined here
- `canonical lock path` — scripts/validation/check_push_lock_paths.py:62 — defined here
- `unfenced prose` — scripts/validation/check_push_lock_paths.py:129 — used here
- `validate_push_lock_paths` — scripts/validation/check_push_lock_paths.py:258 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_push_lock_paths.py`, language: Python, lines: 302
- documented invocation: "Fail when a tracked prescription names a push-lock path that is not canonical." — scripts/validation/check_push_lock_paths.py:2
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/validation/check_push_lock_paths.py --help`
    stdout: `usage: check_push_lock_paths.py [-h] [--repo-root REPO_ROOT]`
    actual exit code: 0
  - Command: `python3 scripts/validation/check_push_lock_paths.py --repo-root .`
    stdout: `push-lock: 0 violation(s) in 3521 tracked Markdown file(s)`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - every prescription agrees (prints the examined count)" — scripts/validation/check_push_lock_paths.py:22
    - "1 - at least one non-canonical lock path" — scripts/validation/check_push_lock_paths.py:23
    - "2 - configuration or runtime error" — scripts/validation/check_push_lock_paths.py:24
  - Actual exit paths in code:
    - `return 2` — scripts/validation/check_push_lock_paths.py:292
    - `return 1 if violations else 0` — scripts/validation/check_push_lock_paths.py:297
    - `sys.exit(main())` — scripts/validation/check_push_lock_paths.py:301
- for validators/gates: can it exit non-zero?
  Yes, exits 1 when non-canonical lock paths are found (line 297) and 2 when a git or filesystem error occurs (line 292); `validate_push_lock_paths` returns `False` on index read failure (line 268) or violations (line 280).
  Does it fail on the source repo's own default branch?
  No, passes cleanly with exit code 0 (0 violations in 3521 tracked Markdown files examined).
- does the output match what the documentation claims?
  Yes, examines tracked Markdown prescriptions and reports violation count and examined file count matching the documented exit codes.

## Defects — required
none

## Observations
Scans both fenced code blocks and unfenced prose paragraphs (issue #4635). In fenced blocks, any invocation of `flock` without naming the canonical path is reported as a violation; in unfenced prose, paragraphs discussing `flock` are allowed without prescription unless they name a non-canonical path or unresolvable lock variable. Uses `git ls-files --cached` against the git index rather than HEAD to ensure newly staged files cannot bypass validation before commit.

## Context cost
12248 bytes, 302 lines (~3060 tokens). Loads `scripts/validation/push_lock_resolver.py` (11495 bytes, 251 lines). Total context cost: 23743 bytes (~5935 tokens).
