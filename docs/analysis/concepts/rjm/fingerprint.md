---
package: rjm
name: fingerprint
slug: fingerprint
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fingerprint

## Definition — verbatim
> "def _fingerprint(self, comment_body: str) -> str:" — scripts/llm_classification/cache.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 662 | defined here | Command-line extraction of task-set hash digest locking split configurations. |
| scripts/llm_classification/cache.py | 47 | defined here | Method computing 16-character SHA-256 hash prefix from normalized review comments. |

## Consumes
Raw review comment text or benchmark task split metadata.

## Produces
Deterministic hash prefix or hex digest representing canonical content or partition state.

## When applied
Applied during comment cache key generation in `ClassificationCache` and split verification in `optimize-artifact.py`.

## Sub-concepts
none

## Part of
classification-cache

## Implementation status
clean in scripts/llm_classification/cache.py; defects: missing-path, doc-drift, script-bug in scripts/eval/README.md

## Design notes
A normalization and cryptographic hashing technique in rjm that computes deterministic hashes over normalized text bodies or split definitions, enabling fuzzy caching of LLM review comments and tamper-evident locking of benchmark partitions.
