---
package: rjm
path: scripts/validation/spec_contradiction.py
type: script
bytes: 18206
unit: inv-rjm-306
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/spec_contradiction.py

## Purpose — required, verbatim
> "Flag contradictions between a PR description, its linked issues, and code." — scripts/validation/spec_contradiction.py:2

## Design intent — required
Acts as a local "shift-left" heuristic validator to detect discrepancies between specification claims (expressed in a GitHub pull request description or its linked issues) and committed agent markdown frontmatter before code is pushed to CI. In multi-agent lifecycles, specifications and implementations often diverge—for instance, when an issue specifies `model_tier: sonnet` while committed agent frontmatter declares `model: opus`. Because upstream CI checks ("Validate Spec Coverage") read PR text, linked issues, and implementation files as a unified specification and reject contradictions only after a 90-second roundtrip, repeated fix cycles waste significant developer and agent time. This script extracts issue references (`Closes #N`, `Fixes #N`, etc.) from the PR body via GitHub CLI (`gh`), fetches linked issue descriptions, and compares claimed model tiers (`opus`, `sonnet`, `haiku`) and numeric thresholds (`priority`, `timeout`, `max_retries`, `threshold`, `version`, `complexity`) against changed agent files in git HEAD. It supports an `--advisory` mode for local pre-PR automation so false positives warn without blocking development workflows.

## Phase — required
none

## Inputs — required
- CLI option `--repo-root`: "Repository root (default: inferred from this script's path)" — scripts/validation/spec_contradiction.py:436
- CLI option `--owner`: "Repository owner (env: REPO_OWNER, or inferred from git remote)" — scripts/validation/spec_contradiction.py:441
- CLI option `--repo`: "Repository name (env: REPO_NAME, or inferred from git remote)" — scripts/validation/spec_contradiction.py:446
- CLI option `--advisory`: "Advisory mode: print findings but always exit 0 " — scripts/validation/spec_contradiction.py:453
- CLI option `--base`: "Base ref to diff committed agent frontmatter against " — scripts/validation/spec_contradiction.py:461
- Environment variable `REPO_OWNER` — scripts/validation/spec_contradiction.py:440
- Environment variable `REPO_NAME` — scripts/validation/spec_contradiction.py:445
- Environment variable `SPEC_CONTRADICTION_ADVISORY` — scripts/validation/spec_contradiction.py:451
- GitHub CLI client tool `gh` — scripts/validation/spec_contradiction.py:13
- Git repository remote configuration resolved via `scripts.github_core.api` — scripts/validation/spec_contradiction.py:67
- Committed agent markdown files changed on the branch via "git show HEAD:<path>" — scripts/validation/spec_contradiction.py:311

## Outputs — required
- Standard output emitting contradiction report: "[PASS] No spec-vs-code contradictions detected." — scripts/validation/spec_contradiction.py:408
- Exit code 0: "0 - Success (no contradictions found, OR --advisory downgraded a finding," — scripts/validation/spec_contradiction.py:34
- Exit code 1: "1 - Logic error: one or more contradictions found (only when NOT --advisory)" — scripts/validation/spec_contradiction.py:36
- Exit code 2: "2 - Config error (could not resolve repo owner/name)" — scripts/validation/spec_contradiction.py:37

## Invokes — required
- script scripts.github_core.api — scripts/validation/spec_contradiction.py:67

## Invoked by — required
- script checks_spec.py — scripts/validation/checks_spec.py:374
- reference spec-schemas.md — .claude/skills/spec-generator/references/spec-schemas.md:457

## Concepts named — required, verbatim
- `Validate Spec Coverage` — scripts/validation/spec_contradiction.py:4 — used here
- `model_tier` — scripts/validation/spec_contradiction.py:7 — used here
- `frontmatter` — scripts/validation/spec_contradiction.py:8 — used here
- `shift-left` — scripts/validation/spec_contradiction.py:29 — used here
- `MODEL_TIERS` — scripts/validation/spec_contradiction.py:72 — defined here
- `_NUMERIC_KEYS` — scripts/validation/spec_contradiction.py:101 — defined here
- `Contradiction` — scripts/validation/spec_contradiction.py:107 — defined here
- `fetch_current_pr_body` — scripts/validation/spec_contradiction.py:123 — defined here
- `fetch_issue_body` — scripts/validation/spec_contradiction.py:147 — defined here
- `extract_linked_issues` — scripts/validation/spec_contradiction.py:177 — defined here
- `extract_model_claims` — scripts/validation/spec_contradiction.py:189 — defined here
- `extract_numeric_claims` — scripts/validation/spec_contradiction.py:194 — defined here
- `parse_frontmatter` — scripts/validation/spec_contradiction.py:205 — defined here
- `find_contradictions` — scripts/validation/spec_contradiction.py:253 — defined here
- `collect_contradictions` — scripts/validation/spec_contradiction.py:368 — defined here
- `format_report` — scripts/validation/spec_contradiction.py:405 — defined here

## Structure
- Shebang and module docstring — scripts/validation/spec_contradiction.py:1-51
- Imports and sys.path configuration — scripts/validation/spec_contradiction.py:53-67
- Model tiers, regex patterns, and numeric keys constants — scripts/validation/spec_contradiction.py:69-104
- Contradiction dataclass — scripts/validation/spec_contradiction.py:106-121
- GitHub PR and issue body extraction (`fetch_current_pr_body`, `fetch_issue_body`, `extract_linked_issues`) — scripts/validation/spec_contradiction.py:123-187
- Claim extraction and frontmatter parsing (`extract_model_claims`, `extract_numeric_claims`, `parse_frontmatter`) — scripts/validation/spec_contradiction.py:189-251
- Contradiction detection engine (`find_contradictions`) — scripts/validation/spec_contradiction.py:253-306
- Changed agent files discovery and base ref resolution (`_changed_agent_files`, `_resolve_base_ref`, `collect_contradictions`) — scripts/validation/spec_contradiction.py:308-403
- Human-readable report formatter (`format_report`) — scripts/validation/spec_contradiction.py:405-423
- Argument parser (`build_parser`) — scripts/validation/spec_contradiction.py:425-467
- CLI entry point (`main`) — scripts/validation/spec_contradiction.py:469-495

## Scripts — required if type is script or the skill ships scripts
For each script:
- path: `scripts/validation/spec_contradiction.py`, language: Python, lines: 495
- documented invocation:
  `"python3 scripts/validation/spec_contradiction.py --advisory" — .claude/skills/spec-generator/references/spec-schemas.md:457`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/validation/spec_contradiction.py`
  ```
  [PASS] No spec-vs-code contradictions detected.
  ```
  Exit code: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented:
    - `"0 - Success (no contradictions found, OR --advisory downgraded a finding," — scripts/validation/spec_contradiction.py:34`
    - `"1 - Logic error: one or more contradictions found (only when NOT --advisory)" — scripts/validation/spec_contradiction.py:36`
    - `"2 - Config error (could not resolve repo owner/name)" — scripts/validation/spec_contradiction.py:37`
  - Actual exit paths:
    - Exit 2: `return 2` — scripts/validation/spec_contradiction.py:481
    - Exit 1: `return 1` — scripts/validation/spec_contradiction.py:489
    - Exit 0: `return 0` — scripts/validation/spec_contradiction.py:490
    - Invocation wrapper: `raise SystemExit(main())` — scripts/validation/spec_contradiction.py:494
  - for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
    Yes, exits 1 when contradictions are detected without `--advisory`, and exits 2 if git repo owner/name cannot be resolved. On the default branch of the source repo, it passes with `[PASS] No spec-vs-code contradictions detected.` and exit code 0.
  - does the output match what the documentation claims?
    Yes, correctly checks for PR description and linked issues, returning passing output and exit code 0 when no PR or contradictions are present.

## Defects — required
none

## Observations
- Shift-left optimization: Designed to replicate a subset of the remote CI "Validate Spec Coverage" check locally, reducing the feedback loop from 90 seconds to under 2 seconds.
- Heuristic scope: Focuses specifically on high-impact specification mismatch axes (model tier and numeric thresholds) rather than parsing freeform prose across the entire specification.
- Resilient advisory execution: Seamlessly degrades to pass when executed in environments without network connectivity, without git pull requests, or when invoked advisory from `pre_pr.py`.

## Context cost
18,206 bytes (~4,500 tokens) for this script. When loaded, imports `scripts/github_core/api.py` (9,531 bytes), totaling ~27,737 bytes (~6,900 tokens).
