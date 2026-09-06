---
package: rjm
path: scripts/ai_review_common/retry.py
type: script
bytes: 2777
unit: inv-rjm-196
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/retry.py, sha256: 946e205f020fd5dd595bc19053d4b90dc344df5f8b1ea99571f072d5705eacf1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/retry.py

## Purpose — required, verbatim
> "Retry logic with exponential backoff." — scripts/ai_review_common/retry.py:1

## Design intent — required
Provides a resilient execution wrapper (`invoke_with_retry`) that executes an arbitrary Python callable with exponential backoff on failure, configurable retry ceilings, and environment variable overrides (`MAX_RETRIES`, `RETRY_DELAY`). It prevents flaky transient network/API failures from crashing review and quality gate workflows while rejecting invalid retry counts (such as zero or negative values).

## Phase — required
rjm:review

## Inputs — required
- A nullary callable `func: Callable[[], T]`.
- Optional `max_retries: int` (defaults to environment variable `MAX_RETRIES` or 3).
- Optional `initial_delay: int` (defaults to environment variable `RETRY_DELAY` or 30).

## Outputs — required
- The return value of type `T` from `func()`.
- Raises `ValueError` if `max_retries` < 1 or `initial_delay` < 0.
- Raises `RuntimeError` after all retry attempts fail, chaining the original exception.

## Invokes — required
none

## Invoked by — required
- script retry — scripts/ai_review_common/quality_gate.py:3

## Concepts named — required, verbatim
- `T` — scripts/ai_review_common/retry.py:18 — defined here
- `_DEFAULT_MAX_RETRIES` — scripts/ai_review_common/retry.py:20 — defined here
- `_DEFAULT_RETRY_DELAY` — scripts/ai_review_common/retry.py:21 — defined here
- `_get_config_int` — scripts/ai_review_common/retry.py:24 — defined here
- `invoke_with_retry` — scripts/ai_review_common/retry.py:31 — defined here
- `MAX_RETRIES` — scripts/ai_review_common/retry.py:48 — used here
- `RETRY_DELAY` — scripts/ai_review_common/retry.py:50 — used here

## Structure
- Retry logic with exponential backoff — scripts/ai_review_common/retry.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/retry.py`
- language: Python
- lines: 83
- documented invocation:
  "def invoke_with_retry(" — scripts/ai_review_common/retry.py:31
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ai_review_common/retry.py`
- abridged stdout: (empty)
- **actual exit code:** 0
- documented exit codes: none
- actual exit paths in code:
  No `sys.exit()` calls; raises `ValueError` on invalid arguments ("raise ValueError(" — scripts/ai_review_common/retry.py:52, 56) and `RuntimeError` on failure ("raise RuntimeError(" — scripts/ai_review_common/retry.py:69, 82).
- for validators/gates:
  Does not exit directly; raises `RuntimeError` when all retries are exhausted.
- does the output match what the documentation claims?
  Yes, provides exponential backoff retry execution as documented.

## Defects — required
none

## Observations
- Python 3.10 compatibility: explicitly avoids PEP 695 generic syntax (`def invoke_with_retry[T]`) in order to remain compatible with Python 3.10 syntax requirements for hook execution (scripts/ai_review_common/retry.py:13-17).
- Fixes issue #4121 where `MAX_RETRIES=0` caused a confusing failure message claiming 0 attempts failed without executing the function.

## Context cost
File size: 2,777 bytes (83 lines). Self-contained with no internal project dependencies (~700 tokens).
