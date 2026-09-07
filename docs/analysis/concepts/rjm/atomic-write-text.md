---
package: rjm
name: _atomic_write_text
slug: atomic-write-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
  - {path: scripts/pr_branch_mapping.py, sha256: ef68513a8490b248236707bb35a76c73fa2d9f58999d1f43b973d7cf72fe4340}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _atomic_write_text

## Definition — verbatim
(used, not defined)

> "def _atomic_write_text(path: str | os.PathLike[str], text: str) -> None:" — scripts/ai_review_common/cache_guard.py:16

## Also called — verbatim
> "def _atomic_write_text(path: Path, content: str) -> None:" — scripts/pr_branch_mapping.py:36
> "def _atomic_write_text(path: str | os.PathLike[str], text: str) -> None:" — scripts/update_reviewer_signal_stats.py:361

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/cache_guard.py | 16 | defined here | Helper function writing text atomically using a temp file and os.replace. |
| scripts/pr_branch_mapping.py | 36 | defined here | Helper function writing text atomically via NamedTemporaryFile and os.replace. |
| scripts/update_reviewer_signal_stats.py | 361 | defined here | Helper function writing text atomically to avoid partial writes. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
_atomic_write_text is a Python utility function identifier implementing atomic file writes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
