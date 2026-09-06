---
package: rjm
path: scripts/llm_classification/config.py
type: script
bytes: 2770
unit: inv-rjm-249
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/config.py, sha256: ad5524115256c40e875acc541ff9d413081f5a58ec8a602e947568d094a7ca5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/llm_classification/config.py

## Purpose — required, verbatim
> "Configuration for LLM fallback classification." — scripts/llm_classification/config.py:1

## Design intent — required
Defines immutable configuration parameters (`LLMFallbackConfig`) governing LLM fallback classification, including confidence bounds, default model selection, token caps, cache sizing, and enablement toggles. It provides validation logic to ensure sane numeric boundaries and an environment-variable factory (`from_env()`) that enables zero-code configuration in CI/CD pipelines. Without it, classification parameters would be hardcoded across multiple modules, preventing runtime tuning and environment-specific overrides.

## Phase — required
cross-phase

## Inputs — required
- Dataclass constructor parameters: `low_confidence_min`, `low_confidence_max`, `model`, `max_tokens`, `cache_max_entries`, `enabled` (scripts/llm_classification/config.py:22-27)
- Environment variables read by `from_env()` (scripts/llm_classification/config.py:46-52):
  - `ANTHROPIC_API_KEY`: "default: true if API key present" — scripts/llm_classification/config.py:47
  - `LLM_FALLBACK_MIN`: "Lower bound (default: 0.4)" — scripts/llm_classification/config.py:48
  - `LLM_FALLBACK_MAX`: "Upper bound (default: 0.6)" — scripts/llm_classification/config.py:49
  - `LLM_FALLBACK_MODEL`: "Model name (default: claude-haiku-4-5-20251001)" — scripts/llm_classification/config.py:50
  - `LLM_FALLBACK_CACHE_SIZE`: "Cache size (default: 100)" — scripts/llm_classification/config.py:51

## Outputs — required
- Validated `LLMFallbackConfig` instance returned by constructor or `from_env()` (scripts/llm_classification/config.py:10, 43, 63)
- Boolean score evaluation returned by `is_low_confidence()` (scripts/llm_classification/config.py:38, 40)

## Invokes — required
none

## Invoked by — required
- script scripts.llm_classification.config — scripts/llm_classification/__init__.py:10
- script scripts.llm_classification.config — scripts/llm_classification/classifier.py:16

## Concepts named — required, verbatim
- `LLM fallback classification` — scripts/llm_classification/config.py:1 — used here
- `LLMFallbackConfig` — scripts/llm_classification/config.py:10 — defined here
- `is_low_confidence` — scripts/llm_classification/config.py:38 — defined here
- `from_env` — scripts/llm_classification/config.py:43 — defined here

## Structure
none (python module; class `LLMFallbackConfig`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/config.py`, language: Python 3, lines: 70
- documented invocation: "Configuration for LLM fallback classification." — scripts/llm_classification/config.py:1
- **executed:** yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.config import LLMFallbackConfig; cfg = LLMFallbackConfig(); print('Default model:', cfg.model, 'low range:', cfg.low_confidence_min, '-', cfg.low_confidence_max)"`
  abridged stdout:
  ```
  Default model: claude-haiku-4-5-20251001 low range: 0.4 - 0.6
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented exit codes: none.
  Actual exit paths in code: none (library module; raises `ValueError` on boundary violations during `__post_init__`).
- for validators/gates: can it exit non-zero? No. Does it fail on the source repo's own default branch? No.
- does the output match what the documentation claims? Yes, enforces configuration bounds and defaults.

## Defects — required
none

## Observations
- Automatically enables fallback mode when `ANTHROPIC_API_KEY` is present in the environment unless `LLM_FALLBACK_ENABLED="false"` is explicitly passed.
- Uses `frozen=True` dataclass to prevent accidental runtime mutation of configuration state across threads.

## Context cost
2770 bytes (~692 tokens). Standard library only (`os`, `dataclasses`).
