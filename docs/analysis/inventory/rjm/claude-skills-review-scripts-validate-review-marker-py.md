---
package: rjm
path: .claude/skills/review/scripts/validate_review_marker.py
type: script
bytes: 16215
unit: inv-rjm-153
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/scripts/validate_review_marker.py

## Purpose — required, verbatim
> "Validate that a SHA-bound ``Reviewed-By: /review@...`` marker covers a commit." — .claude/skills/review/scripts/validate_review_marker.py:2

## Design intent — required
`validate_review_marker.py` enforces a cryptographic, git-native review attestation gate for the shipping workflow (`/ship`). Without this script, automated pipelines would lack durable, tamper-evident proof that the precise commit being shipped underwent and passed required review axes; reviews could be bypassed or invalidated by subsequent code changes made after review completion. Rather than relying on ephemeral agent state files in `.agents/` or remote database records, the validator inspects git `Reviewed-By` commit trailers (`Reviewed-By: /review@<axes> on <sha>`) on an empty marker commit placed directly on top of the reviewed code tip. Because the marker trailer explicitly binds the SHA of its single parent commit (the reviewed code state), SHA-binding guarantees that adding any subsequent code commit moves HEAD to an unmarked commit, immediately invalidating the review attestation and requiring `/review` to be re-executed before shipping.

## Phase — required
rjm:review

## Inputs — required
- CLI options and arguments (.claude/skills/review/scripts/validate_review_marker.py:392-416):
  - `--ref`: "Commit ref to check (default: HEAD). It must be a /review marker" — .claude/skills/review/scripts/validate_review_marker.py:403
  - `--repo-root`: "Repository root. Defaults to the current working directory, which" — .claude/skills/review/scripts/validate_review_marker.py:412
- Git repository commit objects and metadata inspected via git subprocess:
  - Commit trailers read via `git log -1`: `f"--format=%(trailers:key={MARKER_TRAILER_KEY},valueonly,unfold)",` — .claude/skills/review/scripts/validate_review_marker.py:192
  - Parent SHAs read via `git show`: `["show", "-s", "--format=%P", commit_sha]` — .claude/skills/review/scripts/validate_review_marker.py:204
  - Tree SHA read via `git show`: `["show", "-s", "--format=%T", commit_sha]` — .claude/skills/review/scripts/validate_review_marker.py:212
  - Commit SHA resolution via `git rev-parse`: `["rev-parse", "--verify", "--quiet", ref]` — .claude/skills/review/scripts/validate_review_marker.py:160

## Outputs — required
- Diagnostic messages to `sys.stdout` (on PASS) or `sys.stderr` (on FAIL) (.claude/skills/review/scripts/validate_review_marker.py:431-432):
  - `"[PASS]"` status string reporting reviewed axes and bound parent SHA — .claude/skills/review/scripts/validate_review_marker.py:386, 430
  - `"[FAIL]"` status strings explaining failure conditions (missing marker, unmerged branch, non-empty commit, parent mismatch, or invalid repo root) — .claude/skills/review/scripts/validate_review_marker.py:265-269, 286-290, 310-314, 364-367, 375-379, 426, 430
- Process exit codes:
  - 0: "0 - A valid marker binds to the expected SHA." — .claude/skills/review/scripts/validate_review_marker.py:35
  - 1: "1 - No marker, malformed marker, or marker binds to a different SHA." — .claude/skills/review/scripts/validate_review_marker.py:36
  - 2: "2 - Configuration error (git unavailable, bad repo root, bad args)." — .claude/skills/review/scripts/validate_review_marker.py:37

## Invokes — required
none

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:63
- command ship — .claude/commands/ship.md:104

## Concepts named — required, verbatim
- `Issue #1938` — .claude/skills/review/scripts/validate_review_marker.py:7 — used here
- `reviewed tip` — .claude/skills/review/scripts/validate_review_marker.py:18 — defined here
- `marker commit` — .claude/skills/review/scripts/validate_review_marker.py:24 — defined here
- `SHA-binding` — .claude/skills/review/scripts/validate_review_marker.py:25 — defined here
- `AGENTS.md` — .claude/skills/review/scripts/validate_review_marker.py:34 — used here
- `ADR-035` — .claude/skills/review/scripts/validate_review_marker.py:34 — used here
- `canonical-source-mirror.md` — .claude/skills/review/scripts/validate_review_marker.py:53 — used here
- `Reviewed-By` — .claude/skills/review/scripts/validate_review_marker.py:54 — defined here
- `MARKER_TRAILER_KEY` — .claude/skills/review/scripts/validate_review_marker.py:54 — defined here
- `ReviewMarker` — .claude/skills/review/scripts/validate_review_marker.py:66 — defined here
- `ValidationOutcome` — .claude/skills/review/scripts/validate_review_marker.py:220 — defined here

## Structure
none (python script; top-level classes and functions: MARKER_TRAILER_KEY, _MARKER_VALUE_RE, ReviewMarker, parse_marker, select_marker_for_sha, _run_git, _git_failure_reason, _with_reason, _is_option_like_ref, resolve_sha_with_error, resolve_sha, read_marker_values, read_parent_shas, resolve_tree_sha, ValidationOutcome, validate_ref_argument, validate_parent_shas, validate_marker_commit_shape, validate_ref, _build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/review/scripts/validate_review_marker.py`, language: Python 3, lines: 438
- documented invocation:
  - "scripts/validate_review_marker.py" — .claude/skills/review/SKILL.md:63
  - "python3 \"$REVIEW_MARKER_SCRIPT\" --ref HEAD --repo-root \"$(pwd)\"" — .claude/commands/ship.md:106
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Test 1 (HEAD of sources/rjm — code commit with modified files):
    `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --ref HEAD --repo-root sources/rjm`
    abridged stderr:
    ```
    [FAIL] HEAD (2abef31dc681) changes files; a review marker must be an empty commit whose Reviewed-By trailer names its parent. Re-run /review after the code tip is ready.
    ```
    **actual exit code**: 1
  - Test 2 (Configuration error — invalid repository root):
    `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --repo-root /nonexistent_path_xyz`
    abridged stderr:
    ```
    [FAIL] invalid repo root: /nonexistent_path_xyz
    ```
    **actual exit code**: 2
  - Test 3 (Valid empty marker commit binding parent commit SHA):
    `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --ref HEAD --repo-root <tmp_repo>`
    abridged stdout:
    ```
    [PASS] reviewed: /review@analyst,security binds f9eb430d9742 (2 axis/axes)
    ```
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  - Documented in script docstring:
    - "0 - A valid marker binds to the expected SHA." — .claude/skills/review/scripts/validate_review_marker.py:35
    - "1 - No marker, malformed marker, or marker binds to a different SHA." — .claude/skills/review/scripts/validate_review_marker.py:36
    - "2 - Configuration error (git unavailable, bad repo root, bad args)." — .claude/skills/review/scripts/validate_review_marker.py:37
  - Actual exit paths in code:
    - `raise SystemExit(main())` — .claude/skills/review/scripts/validate_review_marker.py:437
    - `return 0` (.claude/skills/review/scripts/validate_review_marker.py:384, 433) when `outcome.ok` is True
    - `return 1` (.claude/skills/review/scripts/validate_review_marker.py:264, 285, 309, 363, 374, 433) when ref has no parent, multiple parents, non-empty tree diff against parent, no marker trailer, or trailer does not bind parent SHA
    - `return 2` (.claude/skills/review/scripts/validate_review_marker.py:233, 240, 257, 299, 337, 355, 427, 433) when git binary is missing, ref begins with '-', git read operations fail, or repo root is invalid
- for validators/gates: can it exit non-zero? Yes, exits 1 on missing/stale/invalid markers and 2 on configuration errors. Does it fail on the source repo's own default branch? Yes, fails with exit code 1 because HEAD in `sources/rjm` is a code commit that changes files rather than an empty marker commit.
- does the output match what the documentation claims? Yes, enforces the exact `Reviewed-By: /review@<axes> on <sha>` trailer contract, ensures marker commit emptiness, and emits standard `[PASS]` and `[FAIL]` status strings with exit codes 0, 1, and 2.

## Defects — required
none

## Observations
- Exact duplication ledger member: this file is byte-identical (`544dafe1234d93af`, 16215 bytes) to `scripts/validation/validate_review_marker.py` (group 2 in `docs/analysis/manifest/rjm-duplicates.md`).
- Mathematical rationale for parent binding: explains why a commit cannot name its own SHA in a trailer (the commit object hash includes its message and trailers, so writing the SHA changes the SHA without a fixed point); naming the parent SHA in an empty commit provides deterministic binding.
- Security hardening against argument injection: `_is_option_like_ref` explicitly checks `ref.startswith("-")` to prevent command-line option injection attacks (CWE-88) in git subcommands.
- Strict UTF-8 decoding: Subprocess wrapper explicitly uses `encoding="utf-8"` and handles `UnicodeDecodeError` to prevent corrupted commit trailers from masquerading as plausible values.

## Context cost
16215 bytes (~4100 tokens). Standalone Python script with standard library dependencies.
