---
package: rjm
path: scripts/llm_classification/classifier.py
type: script
bytes: 5455
unit: inv-rjm-249
in_scope_via: scripts/llm_classification/__init__.py
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/llm_classification/classifier.py

## Purpose — required, verbatim
> "LLM-based classifier for review comment actionability." — scripts/llm_classification/classifier.py:1

## Design intent — required
Provides an LLM-based fallback classifier that determines whether a code review comment is actionable (requiring code changes) or non-actionable (informational, stylistic preference, or nitpick) when heuristic rule confidence is ambiguous. Integrates with the Anthropic Messages API using structured prompt instructions with few-shot examples and exponential backoff retry, wrapping results in an LRU cache to reduce latency and API expenditure.

## Phase — required
none

## Inputs — required
- Review comment text: `comment_body: str` (`scripts/llm_classification/classifier.py:88, 117`)
- Heuristic score: `heuristic_score: float` passed to `should_use_fallback` (`scripts/llm_classification/classifier.py:144`)
- Environment variable: `ANTHROPIC_API_KEY` (`scripts/llm_classification/classifier.py:82`)
- Optional configuration instance: `LLMFallbackConfig` (`scripts/llm_classification/classifier.py:66`)
- Optional cache instance: `ClassificationCache` (`scripts/llm_classification/classifier.py:67`)

## Outputs — required
- Classification result dataclass `LLMClassificationResult | None` containing `is_actionable: bool`, `confidence: float`, `reason: str`, and `from_cache: bool` (`scripts/llm_classification/classifier.py:41-55, 117`)
- Fallback decision boolean returned by `should_use_fallback` (`scripts/llm_classification/classifier.py:144`)

## Invokes — required
- script retry — scripts/llm_classification/classifier.py:11
- script cache — scripts/llm_classification/classifier.py:15
- script config — scripts/llm_classification/classifier.py:16

## Invoked by — required
- script classifier — scripts/llm_classification/__init__.py:5
- script classifier — scripts/llm_classification/cache.py:12

## Concepts named — required, verbatim
- `invoke_with_retry` — scripts/llm_classification/classifier.py:11 — used here
- `ClassificationCache` — scripts/llm_classification/classifier.py:15 — used here
- `LLMFallbackConfig` — scripts/llm_classification/classifier.py:16 — used here
- `_SYSTEM_PROMPT` — scripts/llm_classification/classifier.py:20 — defined here
- `LLMClassificationResult` — scripts/llm_classification/classifier.py:42 — defined here
- `LLMClassifier` — scripts/llm_classification/classifier.py:61 — defined here
- `_get_client` — scripts/llm_classification/classifier.py:77 — defined here
- `_call_llm` — scripts/llm_classification/classifier.py:88 — defined here
- `classify` — scripts/llm_classification/classifier.py:117 — defined here
- `should_use_fallback` — scripts/llm_classification/classifier.py:144 — defined here
- `get_default_classifier` — scripts/llm_classification/classifier.py:157 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/classifier.py`, language: Python 3, lines: 163
- documented invocation: none
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/classifier.py`, abridged stdout: none, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, loads cleanly

## Defects — required
none

## Observations
- Lazily imports and initializes `anthropic.Anthropic` client so the module can be imported and cached without requiring `ANTHROPIC_API_KEY` or third-party packages installed when disabled.
- Employs `invoke_with_retry` with `max_retries=2` and `initial_delay=1` to handle transient network or rate limit errors during LLM inference.
- Singleton pattern provided via `get_default_classifier()` for process-wide reuse of client and cache.

## Context cost
5,455 bytes plus dependencies (~10,889 bytes total, ~2,700 tokens).
