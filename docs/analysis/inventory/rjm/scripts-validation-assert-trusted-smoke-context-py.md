---
package: rjm
path: scripts/validation/assert_trusted_smoke_context.py
type: script
bytes: 4367
unit: inv-rjm-272
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/assert_trusted_smoke_context.py

## Purpose — required, verbatim
> "Gate the authenticated CLI smoke to a trusted execution context (issue #2231 item 3)." — scripts/validation/assert_trusted_smoke_context.py:2

## Design intent — required
Provides a security gate enforcing that authenticated nightly CLI smoke tests—which require real Copilot/Claude CLI credentials and secrets—only run in trusted GitHub execution contexts. Following ADR-006 ("thin workflows, testable modules"), the trust verification decision logic is isolated in this testable Python script rather than embedded in workflow YAML. It fails closed, verifying that the triggering event is strictly `schedule` or `workflow_dispatch` (never `pull_request`), the repository matches `rjmurillo/ai-agents` (case-insensitive), and the git ref is `refs/heads/main`. It emits a machine-readable `true` or `false` on stdout while writing static audit logging to stderr to prevent secret exposure or workflow manipulation from fork PRs.

## Phase — required
rjm:test

## Inputs — required
- Required CLI arguments parsed via `_parse_args`:
  - `--event-name`: GitHub event name triggering the run (scripts/validation/assert_trusted_smoke_context.py:72)
  - `--repository`: GitHub repository owner/name (scripts/validation/assert_trusted_smoke_context.py:77)
  - `--ref`: GitHub ref running the workflow (scripts/validation/assert_trusted_smoke_context.py:82)
- Optional CLI arguments:
  - `--expected-repo`: Trusted repository string, defaulting to `rjmurillo/ai-agents` (scripts/validation/assert_trusted_smoke_context.py:87)
  - `--expected-ref`: Trusted git ref, defaulting to `refs/heads/main` (scripts/validation/assert_trusted_smoke_context.py:92)

## Outputs — required
- Standard output: machine-readable string `"true"` or `"false"` (scripts/validation/assert_trusted_smoke_context.py:109)
- Standard error: static audit status (`smoke trusted-context gate: trusted` or `smoke trusted-context gate: untrusted`) (scripts/validation/assert_trusted_smoke_context.py:112, 114)
- Exit codes:
  - 0: decision made (stdout is `true` or `false`) — scripts/validation/assert_trusted_smoke_context.py:29, 38, 117
  - 2: usage error (missing or malformed arguments) — scripts/validation/assert_trusted_smoke_context.py:30, 39

## Invokes — required
- doc security.md — scripts/validation/assert_trusted_smoke_context.py:6
- doc ADR-006 — scripts/validation/assert_trusted_smoke_context.py:8
- doc AGENTS.md — scripts/validation/assert_trusted_smoke_context.py:28
- doc ADR-035 — scripts/validation/assert_trusted_smoke_context.py:28

## Invoked by — required
- config nightly-cli-smoke.yml — .github/workflows/nightly-cli-smoke.yml:79

## Concepts named — required, verbatim
- `trusted execution context` — scripts/validation/assert_trusted_smoke_context.py:2 — defined here | used here
- `ADR-006` — scripts/validation/assert_trusted_smoke_context.py:8 — used here
- `ADR-035` — scripts/validation/assert_trusted_smoke_context.py:28 — used here
- `EXIT_OK` — scripts/validation/assert_trusted_smoke_context.py:38 — defined here
- `EXIT_USAGE` — scripts/validation/assert_trusted_smoke_context.py:39 — defined here
- `_TRUSTED_EVENTS` — scripts/validation/assert_trusted_smoke_context.py:41 — defined here
- `_DEFAULT_TRUSTED_REPO` — scripts/validation/assert_trusted_smoke_context.py:42 — defined here
- `_DEFAULT_TRUSTED_REF` — scripts/validation/assert_trusted_smoke_context.py:43 — defined here

## Structure
- `is_trusted` — scripts/validation/assert_trusted_smoke_context.py:46
- `_parse_args` — scripts/validation/assert_trusted_smoke_context.py:67
- `main` — scripts/validation/assert_trusted_smoke_context.py:99

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/assert_trusted_smoke_context.py`, language: Python, lines: 122
- documented invocation:
  - "Prints ``true`` or ``false`` to stdout for the workflow to branch on." — scripts/validation/assert_trusted_smoke_context.py:26
- executed: yes
- actual command run:
  `uv run python scripts/validation/assert_trusted_smoke_context.py --event-name schedule --repository rjmurillo/ai-agents --ref refs/heads/main`
  abridged stdout: `true`
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0: decision made (stdout is ``true`` or ``false``)." — scripts/validation/assert_trusted_smoke_context.py:29
    - "2: usage error (missing or malformed arguments)." — scripts/validation/assert_trusted_smoke_context.py:30
  - Actual exit paths:
    - `return EXIT_OK` (0) at scripts/validation/assert_trusted_smoke_context.py:117
    - `raise SystemExit(main())` at scripts/validation/assert_trusted_smoke_context.py:121
    - `argparse` exits with code 2 on missing required arguments (`--event-name`, `--repository`, `--ref`)
- for validators/gates: can it exit non-zero? Exits 2 on missing or malformed CLI arguments (scripts/validation/assert_trusted_smoke_context.py:39); returns exit code 0 and prints `false` to stdout on untrusted context to permit clean workflow step conditionals without terminating the workflow early. Does it fail on the source repo's own default branch? Passes all 11 unit tests in `tests/validation/test_assert_trusted_smoke_context.py`.
- does output match what documentation claims? Yes, prints `true` when trusted and `false` when untrusted.

## Defects — required
none

## Observations
Separates stdout (machine-readable `true`/`false` for GitHub Actions workflow expressions) and stderr (audit trail logging). In addition, CodeQL treats repository input as untrusted/sensitive, so stderr avoids echoing arbitrary repository inputs, printing static strings only (`smoke trusted-context gate: trusted` or `smoke trusted-context gate: untrusted`, line 110). Repository name matching uses case-insensitive comparison (`casefold()`, line 60) to avoid false negatives on GitHub organization capitalization differences.

## Context cost
File size: 4367 bytes, 122 lines, ~1100 tokens. Uses standard library only (`argparse`, `sys`).
