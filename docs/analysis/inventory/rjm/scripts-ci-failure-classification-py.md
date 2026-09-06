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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/failure_classification.py

## Purpose — required, verbatim
> "Classify PR-fetch failures and produce structured diagnostics." — scripts/ci/failure_classification.py:1

## Design intent — required
Isolates PR-fetch failure classification into an independently testable seam extracted from `build_ai_review_context.py` (issue #4597). It disambiguates between token permission errors on forked PRs and API rate limits/quotas, preventing misdiagnoses (#4333) and constructing structured `FailureClassification` dataclasses with formatted warnings and infrastructure failure payloads.

## Phase — required
none

## Inputs — required
- Pull request number string (`pr_number`) — scripts/ci/failure_classification.py:71
- Redacted error detail string (`detail`) — scripts/ci/failure_classification.py:72

## Outputs — required
- Dataclass instance `FailureClassification` with structured diagnostic attributes — scripts/ci/failure_classification.py:44

## Invokes — required
none

## Invoked by — required
- script failure_classification — scripts/ci/build_ai_review_context.py:227

## Concepts named — required, verbatim
- `build_ai_review_context.py` — scripts/ci/failure_classification.py:3 — used here
- `FORK_PERMISSION_SIGNAL` — scripts/ci/failure_classification.py:20 — defined here
- `RATE_LIMIT_SIGNAL` — scripts/ci/failure_classification.py:26 — defined here
- `FailureClassification` — scripts/ci/failure_classification.py:44 — defined here
- `_FORK_HINT` — scripts/ci/failure_classification.py:65 — defined here
- `classify_pr_fetch_failure` — scripts/ci/failure_classification.py:70 — defined here

## Structure
- Module docstring describing extraction history from `build_ai_review_context.py` (lines 1-9)
- Signal pattern regexes `FORK_PERMISSION_SIGNAL` and `RATE_LIMIT_SIGNAL` (lines 20-36)
- Dataclass definition `FailureClassification` (lines 44-59)
- Actionable hint constant `_FORK_HINT` (lines 65-67)
- Classification engine `classify_pr_fetch_failure` (lines 70-104)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/failure_classification.py`
- **language:** Python 3
- **lines:** 104
- **documented invocation:** none explicit (library module imported by `scripts/ci/build_ai_review_context.py`)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/failure_classification.py`
- **stdout:** `(empty)`
- **actual exit code:** 0
- **documented exit codes:** none explicit (library module)
- **actual exit paths:**
  - implicit return 0 upon module import / completion
- **for validators/gates:** Classification library module; contains no command-line parsing or gate logic. Surfaces failures verbatim without losing diagnostic context.
- **output matches documentation:** yes, correctly classifies fork-permission errors and suppresses hints when rate-limit signatures match.

## Defects — required
none

## Observations
Gracefully suppresses the fork permission hint when HTTP 403 responses are caused by secondary rate limits or abuse detection, addressing issue #4333 where exhausted API quotas were mistakenly diagnosed as missing repository tokens.

## Context cost
3,632 bytes source (~910 tokens).
