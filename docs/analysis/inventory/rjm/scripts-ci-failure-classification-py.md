---
package: rjm
path: scripts/ci/failure_classification.py
type: script
bytes: 3632
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/failure_classification.py, sha256: ac3e3891e6118e9b0a356e05751826f7733646b305b8c3a01fd7e2ae28d83337}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/failure_classification.py

## Purpose — required, verbatim
> "Classify PR-fetch failures and produce structured diagnostics." — scripts/ci/failure_classification.py:1

## Design intent — required
Provides an isolated, cohesive classification module for PR fetch errors in AI review pipelines, distinguishing fork permission issues from API rate-limit errors to emit accurate actionable hints and formatted infrastructure failure warnings.

## Phase — required
cross-phase

## Inputs — required
- PR number parameter `pr_number: str` — scripts/ci/failure_classification.py:71
- Redacted error detail string `detail: str` — scripts/ci/failure_classification.py:72

## Outputs — required
- Structured result dataclass `FailureClassification` — scripts/ci/failure_classification.py:44
- Warning string `warning = f"::warning::{message}"` — scripts/ci/failure_classification.py:96
- Review context payload string `context_text = f"INFRASTRUCTURE_FAILURE: {message}"` — scripts/ci/failure_classification.py:97

## Invokes — required
none

## Invoked by — required
- script classify_pr_fetch_failure — scripts/ci/build_ai_review_context.py:227

## Concepts named — required, verbatim
`build_ai_review_context` — scripts/ci/failure_classification.py:3 — used here
`_pr_fetch_failure_context` — scripts/ci/failure_classification.py:8 — used here
`FORK_PERMISSION_SIGNAL` — scripts/ci/failure_classification.py:20 — defined here
`RATE_LIMIT_SIGNAL` — scripts/ci/failure_classification.py:26 — defined here
`FailureClassification` — scripts/ci/failure_classification.py:44 — defined here
`classify_pr_fetch_failure` — scripts/ci/failure_classification.py:70 — defined here
`REQ-008-05` — scripts/ci/failure_classification.py:77 — used here
`DID_NOT_RUN` — scripts/ci/failure_classification.py:77 — used here

## Structure
(no markdown headings; module with regex constants and helper functions)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/failure_classification.py`, language: Python 3, lines: 104
- documented invocation: `"Classify PR-fetch failures and produce structured diagnostics." — scripts/ci/failure_classification.py:1`
- **executed:** yes
- actual command run: `python3 scripts/ci/failure_classification.py`, abridged stdout: ``, **actual exit code**: 0
- documented exit codes: none (pure library module); actual exit paths: `scripts/ci/failure_classification.py:1` (module execution exits 0)
- for validators/gates: diagnostic classifier; does not fail or crash, always returns structured `FailureClassification` instance
- does the output match what the documentation claims? yes, classifies failure detail into structured diagnostic fields

## Defects — required
none

## Observations
Extracted from `build_ai_review_context.py` per issue #4597 specifically to allow unit testing of error disambiguation without requiring network mock harnesses.

## Context cost
3632 bytes, approximately 908 tokens.
