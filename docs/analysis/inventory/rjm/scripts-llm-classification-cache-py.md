---
package: rjm
path: scripts/llm_classification/cache.py
type: script
bytes: 2664
unit: inv-rjm-249
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/llm_classification/cache.py

## Purpose — required, verbatim
> "In-memory cache for LLM classification results." — scripts/llm_classification/cache.py:1

## Design intent — required
Implements an in-memory least-recently-used (LRU) cache with fuzzy comment fingerprinting to avoid redundant LLM invocations. It normalizes volatile code review tokens (such as commit SHAs, line numbers, issue/PR numbers, and variable whitespace) before generating a SHA-256 fingerprint. Without it, duplicate or slightly modified code review comments across commits or PRs would trigger repetitive, expensive LLM inferences, increasing classification latency and API token costs.

## Phase — required
cross-phase

## Inputs — required
- Comment body text passed to `get()` and `put()` (scripts/llm_classification/cache.py:52, 64)
- `max_entries` integer passed to `__init__()` (scripts/llm_classification/cache.py:29)
- `LLMClassificationResult` object passed to `put()` (scripts/llm_classification/cache.py:64)

## Outputs — required
- Cached `LLMClassificationResult` object (or `None` on cache miss) returned by `get()` (scripts/llm_classification/cache.py:52, 61)
- In-memory cache state tracked in `OrderedDict` (scripts/llm_classification/cache.py:31, 58-60, 69-77)

## Invokes — required
- script scripts.llm_classification.classifier — scripts/llm_classification/cache.py:12

## Invoked by — required
- script scripts.llm_classification.cache — scripts/llm_classification/classifier.py:15

## Concepts named — required, verbatim
- `In-memory cache` — scripts/llm_classification/cache.py:1 — used here
- `CacheEntry` — scripts/llm_classification/cache.py:16 — defined here
- `hit_count` — scripts/llm_classification/cache.py:20 — defined here
- `ClassificationCache` — scripts/llm_classification/cache.py:23 — defined here
- `LRU cache` — scripts/llm_classification/cache.py:24 — used here
- `fingerprints` — scripts/llm_classification/cache.py:26 — used here

## Structure
none (python module; classes: `CacheEntry`, `ClassificationCache`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/llm_classification/cache.py`, language: Python 3, lines: 86
- documented invocation: "In-memory cache for LLM classification results." — scripts/llm_classification/cache.py:1
- **executed:** yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.cache import ClassificationCache; c = ClassificationCache(max_entries=2); print('initialized cache len:', len(c))"`
  abridged stdout:
  ```
  initialized cache len: 0
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented exit codes: none.
  Actual exit paths in code: none (library module; methods return values or `None`).
- for validators/gates: can it exit non-zero? No. Does it fail on the source repo's own default branch? No.
- does the output match what the documentation claims? Yes, implements LRU eviction with normalized fingerprint matching.

## Defects — required
none

## Observations
- Truncates SHA-256 fingerprints to 16 characters (`hexdigest()[:16]`), reducing dictionary key memory footprint while retaining sufficient entropy for review comment cache keys.
- Normalization patterns replace commit hashes (`[a-f0-9]{7,40}` -> `<hash>`), line numbers (`line\s*\d+` -> `line <N>`), and PR/issue references (`#\d+` -> `#<N>`) before hashing, allowing similar review comments across different revisions or lines to achieve cache hits.

## Context cost
2664 bytes (~666 tokens). Uses Python standard library only (`hashlib`, `re`, `collections.OrderedDict`, `dataclasses`).
