---
package: rjm
path: scripts/validation/validate_review_marker.py
type: script
bytes: 16215
unit: inv-rjm-309
in_scope_via: docs/workflow-commands.md
aliases:
  - .claude/skills/review/scripts/validate_review_marker.py
memo_inputs:
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_review_marker.py

## Purpose — required, verbatim
> "Validate that a SHA-bound ``Reviewed-By: /review@...`` marker covers a commit." — scripts/validation/validate_review_marker.py:2

## Design intent — required
Ensures cryptographic proof of review prior to shipping. A commit cannot record its own SHA in a git trailer without altering the commit hash, so `/review` records a PASS verdict by creating an empty commit on top of the reviewed tip containing a `Reviewed-By: /review@<axes> on <sha>` trailer referencing its parent commit. This validator checks that the target ref is a single-parent empty commit whose tree SHA equals its parent's tree SHA, and that its `Reviewed-By` trailer matches the parent SHA. If any new code commits land after review, HEAD moves and the marker no longer binds, blocking unreviewed releases in `/ship`.

## Phase — required
rjm:review

## Inputs — required
- CLI arguments:
  - `--ref` target commit ref to check (default: `HEAD`) — scripts/validation/validate_review_marker.py:401
  - `--repo-root` repository root path (default: current working directory) — scripts/validation/validate_review_marker.py:408
- Git commit metadata:
  - Commit SHA via git rev-parse subprocess call
  - Parent SHAs via git show parents subprocess call
  - Tree SHAs via git show tree subprocess call
  - Reviewed-By trailer values via git log subprocess call

## Outputs — required
- Standard output:
  - Success message prefixed with `[PASS]` on valid review marker
- Standard error:
  - Failure message prefixed with `[FAIL]` on invalid, missing, or mismatched marker
  - Error message prefixed with `[FAIL]` on configuration errors
- Exit codes:
  - 0: A valid marker binds to the expected SHA — scripts/validation/validate_review_marker.py:35
  - 1: No marker, malformed marker, or marker binds to a different SHA — scripts/validation/validate_review_marker.py:36
  - 2: Configuration error (git unavailable, bad repo root, bad args) — scripts/validation/validate_review_marker.py:37

## Invokes — required
- doc AGENTS.md — scripts/validation/validate_review_marker.py:34
- doc ADR-035 — scripts/validation/validate_review_marker.py:34

## Invoked by — required
- command validate_review_marker.py — .claude/commands/ship.md:84
- skill validate_review_marker.py — .claude/skills/review/SKILL.md:63
- script validate_review_marker — scripts/validation/pre_pr.py:94
- script validate_review_marker — scripts/validation/pre_pr_sequence.py:60
- script validate_review_marker — scripts/validation/checks_coverage.py:54

## Concepts named — required, verbatim
- `Reviewed-By` — scripts/validation/validate_review_marker.py:2 — used here
- `AGENTS.md` — scripts/validation/validate_review_marker.py:34 — used here
- `ADR-035` — scripts/validation/validate_review_marker.py:34 — used here
- `MARKER_TRAILER_KEY` — scripts/validation/validate_review_marker.py:54 — defined here
- `_MARKER_VALUE_RE` — scripts/validation/validate_review_marker.py:59 — defined here
- `ReviewMarker` — scripts/validation/validate_review_marker.py:66 — defined here
- `parse_marker` — scripts/validation/validate_review_marker.py:73 — defined here
- `select_marker_for_sha` — scripts/validation/validate_review_marker.py:88 — defined here
- `resolve_sha` — scripts/validation/validate_review_marker.py:167 — defined here
- `ValidationOutcome` — scripts/validation/validate_review_marker.py:220 — defined here
- `validate_marker_commit_shape` — scripts/validation/validate_review_marker.py:275 — defined here
- `validate_ref` — scripts/validation/validate_review_marker.py:320 — defined here

## Structure
- MARKER CONTRACT (the single source of truth for both the writer and this reader): — scripts/validation/validate_review_marker.py:9
- WHY THE MARKER IS AN EMPTY COMMIT NAMING ITS PARENT (not its own SHA): — scripts/validation/validate_review_marker.py:20
- EXIT CODES (AGENTS.md, ADR-035): — scripts/validation/validate_review_marker.py:34

## Scripts — required if type is script or the skill ships scripts
- path: scripts/validation/validate_review_marker.py
- language: Python
- lines: 438
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/validation/validate_review_marker.py`
- abridged stdout: `[FAIL] HEAD (2abef31dc681) changes files; a review marker must be an empty commit whose Reviewed-By trailer names its parent. Re-run /review after the code tip is ready.`
- actual exit code: 1
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - A valid marker binds to the expected SHA." — scripts/validation/validate_review_marker.py:35
    - "1 - No marker, malformed marker, or marker binds to a different SHA." — scripts/validation/validate_review_marker.py:36
    - "2 - Configuration error (git unavailable, bad repo root, bad args)." — scripts/validation/validate_review_marker.py:37
  - actual exit paths:
    - scripts/validation/validate_review_marker.py:428: `return 2` on invalid repo root
    - scripts/validation/validate_review_marker.py:433: `return outcome.exit_code`
    - scripts/validation/validate_review_marker.py:437: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on missing/invalid marker or modified tree; exits 2 on git errors or invalid options)
  - does it fail on the source repo's own default branch: yes (exits 1 because HEAD on main contains file changes)
- does the output match what the documentation claims: yes (correctly reports failure with exit 1 when HEAD is not an empty marker commit)

## Defects — required
none

## Observations
- Duplication ledger EXACT alias: Identical bytes to `.claude/skills/review/scripts/validate_review_marker.py` (16,215 bytes, SHA `544dafe1234d93af`), registered in `scripts/sync_plugin_lib.py:44-45` as a synchronized pair.
- Option-like ref injection defense: `_is_option_like_ref` (lines 151-153) rejects ref arguments starting with `-` to block CLI argument injection.
- Tree equality verification: `validate_marker_commit_shape` (lines 275-317) proves commit emptiness by confirming that the commit's tree SHA is identical to its parent's tree SHA.

## Context cost
File size: 16,215 bytes (~4,050 tokens). Self-contained script with standard library dependencies only.
