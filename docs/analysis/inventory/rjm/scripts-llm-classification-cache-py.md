---
package: rjm
path: scripts/llm_classification/cache.py
type: script
bytes: 2664
unit: inv-rjm-249
in_scope_via: scripts/llm_classification/classifier.py
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/llm_classification/cache.py

## Purpose — required, verbatim
> "In-memory cache for LLM classification results." — scripts/llm_classification/cache.py:1

## Design intent — required
Provides an in-memory least-recently-used (LRU) cache with normalized comment fingerprinting to avoid redundant, expensive LLM API invocations. Normalizes variable elements like git commit hashes, line numbers, issue/PR numbers, and whitespace into canonical placeholders (`<hash>`, `line <N>`, `#<N>`) and computes 16-character SHA-256 prefixes for fuzzy matching across semantically identical comments.

## Phase — required
none

## Inputs — required
- Review comment strings (`comment_body: str`) passed to `get()` and `put()` (`scripts/llm_classification/cache.py:52, 63`)
- Configuration parameter `max_entries: int` (default 100) passed to `ClassificationCache.__init__` (`scripts/llm_classification/cache.py:29`)

## Outputs — required
- Cached classification result `LLMClassificationResult | None` returned by `get()` (`scripts/llm_classification/cache.py:52`)
- Mutated in-memory cache dictionary (`OrderedDict[str, CacheEntry]`) updated by `put()` and `clear()` (`scripts/llm_classification/cache.py:63, 79`)

## Invokes — required
- script classifier — scripts/llm_classification/cache.py:12

## Invoked by — required
- script cache — scripts/llm_classification/classifier.py:15

## Concepts named — required, verbatim
- `CacheEntry` — scripts/llm_classification/cache.py:16 — defined here
- `ClassificationCache` — scripts/llm_classification/cache.py:23 — defined here
- `_normalize` — scripts/llm_classification/cache.py:34 — defined here
- `_fingerprint` — scripts/llm_classification/cache.py:47 — defined here
- `get` — scripts/llm_classification/cache.py:52 — defined here
- `put` — scripts/llm_classification/cache.py:63 — defined here
- `clear` — scripts/llm_classification/cache.py:79 — defined here
- `LLMClassificationResult` — scripts/llm_classification/cache.py:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/cache.py`, language: Python 3, lines: 86
- documented invocation: none
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/cache.py`, abridged stdout: none, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, loads cleanly

## Defects — required
none

## Observations
- Uses `collections.OrderedDict` to implement standard LRU eviction with `move_to_end` and `popitem(last=False)`.
- Regex-based fingerprint normalization abstracts out noise (e.g. commit hashes, line references) to increase cache hit rates across similar automated review comments.

## Context cost
2,664 bytes (~670 tokens).
