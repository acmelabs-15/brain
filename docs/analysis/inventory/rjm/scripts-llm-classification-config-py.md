---
package: rjm
path: scripts/llm_classification/config.py
type: script
bytes: 2770
unit: inv-rjm-249
in_scope_via: scripts/llm_classification/classifier.py
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/config.py, sha256: ad5524115256c40e875acc541ff9d413081f5a58ec8a602e947568d094a7ca5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/llm_classification/config.py

## Purpose — required, verbatim
> "Configuration for LLM fallback classification." — scripts/llm_classification/config.py:1

## Design intent — required
Defines configuration settings and bounds validation for LLM-based fallback classification, managing parameter thresholds for low-confidence scores, model naming, response token limits, cache sizes, and activation toggles via environment variables.

## Phase — required
none

## Inputs — required
- Environment variables parsed in `from_env()`:
  - `ANTHROPIC_API_KEY` (`scripts/llm_classification/config.py:53`)
  - `LLM_FALLBACK_ENABLED` (`scripts/llm_classification/config.py:54`)
  - `LLM_FALLBACK_MIN` (default 0.4) (`scripts/llm_classification/config.py:64`)
  - `LLM_FALLBACK_MAX` (default 0.6) (`scripts/llm_classification/config.py:65`)
  - `LLM_FALLBACK_MODEL` (default `claude-haiku-4-5-20251001`) (`scripts/llm_classification/config.py:66`)
  - `LLM_FALLBACK_CACHE_SIZE` (default 100) (`scripts/llm_classification/config.py:67`)

## Outputs — required
- Immutable dataclass `LLMFallbackConfig` instance (`scripts/llm_classification/config.py:10, 43`)
- Confidence evaluation boolean returned by `is_low_confidence()` (`scripts/llm_classification/config.py:38`)

## Invokes — required
none

## Invoked by — required
- script config — scripts/llm_classification/__init__.py:10
- script config — scripts/llm_classification/classifier.py:16

## Concepts named — required, verbatim
- `LLMFallbackConfig` — scripts/llm_classification/config.py:10 — defined here
- `__post_init__` — scripts/llm_classification/config.py:29 — defined here
- `is_low_confidence` — scripts/llm_classification/config.py:38 — defined here
- `from_env` — scripts/llm_classification/config.py:43 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/config.py`, language: Python 3, lines: 70
- documented invocation: none
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/config.py`, abridged stdout: none, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, loads cleanly

## Defects — required
none

## Observations
- Enforces strict validation on instantiation: `low_confidence_min` and `low_confidence_max` must both be within `[0.0, 1.0]` and `min < max`, raising `ValueError` on violation.
- Smart defaulting enables fallback only when `ANTHROPIC_API_KEY` is present unless explicitly overridden by `LLM_FALLBACK_ENABLED`.

## Context cost
2,770 bytes (~700 tokens).
