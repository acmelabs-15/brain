---
package: rjm
path: .github/scripts/extract_incremental_scope.py
type: script
bytes: 1166
unit: inv-rjm-182
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/extract_incremental_scope.py, sha256: b4d90659249173f58ce95742155bc4021e9b3cf8436be4cdbce4f8800d4c1c8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/extract_incremental_scope.py

## Purpose — required, verbatim
> "Extract incremental PR scope markers from a title." — .github/scripts/extract_incremental_scope.py:2

## Design intent — required
Specialized text parsing utility that identifies explicit incremental delivery markers within pull request titles (such as `"Phase 2 of #1799"` or `"PR 1 of 3"`). Delegated to by CI workflow orchestration to isolate regex extraction logic outside workflow YAML per ADR-006, it ensures that only deliberate, structured partition markers are recognized while colloquial references (e.g. `"phase 2 rollout"`) are ignored, preventing misattribution of PR scope during automated spec validation.

## Phase — required
cross-phase

## Inputs — required
- Positional CLI argument `title`: "Pull request title to inspect" — .github/scripts/extract_incremental_scope.py:31

## Outputs — required
- Extracted incremental scope string printed to stdout, or empty line if no marker matches (.github/scripts/extract_incremental_scope.py:37)
- Exit code 0 (.github/scripts/extract_incremental_scope.py:38)

## Invokes — required
none

## Invoked by — required
- script scripts/ci/spec_extract_refs.py — scripts/ci/spec_extract_refs.py:116
- test tests/test_extract_incremental_scope.py — tests/test_extract_incremental_scope.py:10
- test tests/ci/test_spec_extract_refs.py — tests/ci/test_spec_extract_refs.py:14

## Concepts named — required, verbatim
- `incremental PR scope markers` — .github/scripts/extract_incremental_scope.py:2 — defined here
- `ai-spec-validation` — .github/scripts/extract_incremental_scope.py:4 — used here
- `_SCOPE_PATTERN` — .github/scripts/extract_incremental_scope.py:15 — defined here

## Structure
none (python script; functions and constants: _SCOPE_PATTERN, extract_incremental_scope, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/extract_incremental_scope.py`, language: Python 3, lines: 43
- documented invocation:
  - "[sys.executable, \".github/scripts/extract_incremental_scope.py\", pr_title]," — scripts/ci/spec_extract_refs.py:116
- **executed:** yes
- actual command run: `python3 .github/scripts/extract_incremental_scope.py "Phase 2 of #1799: finish cache guard"`
- abridged stdout:
  ```
  Phase 2 of #1799
  ```
- **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - "Extract incremental PR scope markers from a title." — .github/scripts/extract_incremental_scope.py:2
  Actual exit paths in code:
  - `raise SystemExit(main())` — .github/scripts/extract_incremental_scope.py:42
  - `return 0` (.github/scripts/extract_incremental_scope.py:38) on normal execution
  - `argparse` exits with code 2 on missing positional argument
- for validators/gates: can it exit non-zero? Exits 2 on missing CLI argument. Does it fail on default branch? No, returns 0 when provided a title.
- does output match what documentation claims? Yes, successfully extracts explicit scope markers and ignores informal phrases.

## Defects — required
none

## Observations
- Lightweight standard library utility (43 lines) that normalizes internal whitespace via `" ".join(match.group(1).split())`.
- Adheres to ADR-006 by keeping regex pattern matching in Python rather than shell scripts or workflow expressions.

## Context cost
1166 bytes (~290 tokens). Self-contained Python script.
