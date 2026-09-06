---
package: rjm
path: scripts/llm_classification/classifier.py
type: script
bytes: 5455
unit: inv-rjm-249
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/llm_classification/classifier.py

## Purpose — required, verbatim
> "LLM-based classifier for review comment actionability." — scripts/llm_classification/classifier.py:1

## Design intent — required
Provides an LLM-powered classification fallback when heuristic rules produce ambiguous or low-confidence review comment actionability scores. It queries Claude via the Anthropic Messages API with a structured prompt, evaluating whether a comment requires code changes or is merely informational/stylistic, and returning an actionability verdict, confidence level, and rationale. Without it, review comments landing in the heuristic gray zone (e.g. scores between 0.4 and 0.6) would either be misclassified by brittle pattern matching or forced into manual review queues.

## Phase — required
cross-phase

## Inputs — required
- Review comment text string passed to `classify()` (scripts/llm_classification/classifier.py:117)
- Heuristic score float passed to `should_use_fallback()` (scripts/llm_classification/classifier.py:144)
- `LLMFallbackConfig` configuration instance (scripts/llm_classification/classifier.py:70)
- Environment variable `ANTHROPIC_API_KEY` read in `_get_client()` (scripts/llm_classification/classifier.py:82)
- Responses from Anthropic Messages API parsed via `json.loads` (scripts/llm_classification/classifier.py:93-107)

## Outputs — required
- `LLMClassificationResult` object containing:
  - `is_actionable`: boolean (scripts/llm_classification/classifier.py:51, 109)
  - `confidence`: float (scripts/llm_classification/classifier.py:52, 110)
  - `reason`: string (scripts/llm_classification/classifier.py:53, 111)
  - `from_cache`: boolean (scripts/llm_classification/classifier.py:54, 112, 133)
- `None` when classification is disabled, fails, or encounters an exception (scripts/llm_classification/classifier.py:124, 142)

## Invokes — required
- script scripts.ai_review_common.retry — scripts/llm_classification/classifier.py:11
- script scripts.llm_classification.cache — scripts/llm_classification/classifier.py:15
- script scripts.llm_classification.config — scripts/llm_classification/classifier.py:16

## Invoked by — required
- script scripts.llm_classification.classifier — scripts/llm_classification/__init__.py:5
- script scripts.llm_classification.classifier — scripts/llm_classification/cache.py:12

## Concepts named — required, verbatim
- `code review comment classifier` — scripts/llm_classification/classifier.py:20 — used here
- `actionable` — scripts/llm_classification/classifier.py:21 — used here
- `non-actionable` — scripts/llm_classification/classifier.py:21 — used here
- `LLMClassificationResult` — scripts/llm_classification/classifier.py:42 — defined here
- `LLMClassifier` — scripts/llm_classification/classifier.py:61 — defined here
- `get_default_classifier` — scripts/llm_classification/classifier.py:157 — defined here

## Structure
none (python module; constants and classes: `_SYSTEM_PROMPT`, `LLMClassificationResult`, `LLMClassifier`, `get_default_classifier`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/classifier.py`, language: Python 3, lines: 163
- documented invocation: "LLM-based classifier for review comment actionability." — scripts/llm_classification/classifier.py:1
- **executed:** yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.classifier import LLMClassifier; clf = LLMClassifier(); print('Classifier config model:', clf.config.model)"`
  abridged stdout:
  ```
  Classifier config model: claude-haiku-4-5-20251001
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented exit codes: none.
  Actual exit paths in code: none (library module; returns result or `None`).
- for validators/gates: can it exit non-zero? No. Does it fail on the source repo's own default branch? No.
- does the output match what the documentation claims? Yes, initializes classifier with configured model and caching layers.

## Defects — required
- missing-dependency · scripts/llm_classification/classifier.py:80 · Imports `anthropic` lazily inside `_get_client()`; calling `classify()` without the third-party `anthropic` SDK installed or without `ANTHROPIC_API_KEY` set will trigger an exception (handled by logging and returning `None`).

## Observations
- Wraps LLM calls with `invoke_with_retry(_invoke, max_retries=2, initial_delay=1)` to ensure transient network or rate limit failures do not abort classification.
- Truncates reason strings to 100 characters (`[:100]`) to enforce concise explanations and prevent runaway token consumption in downstream logs.
- Uses lazy client initialization so importing the module or using heuristic classification without the API key does not raise runtime errors.

## Context cost
5455 bytes (~1364 tokens). Loads `scripts.llm_classification.cache` (2664 bytes), `scripts.llm_classification.config` (2770 bytes), and `scripts.ai_review_common.retry`.
