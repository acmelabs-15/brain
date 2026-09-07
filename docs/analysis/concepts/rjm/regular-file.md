---
package: rjm
name: regular_file
slug: regular-file
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_anchors.py, sha256: 5fc8d66c8c261d72b266e12530edb85d80ec424089f4c38cd9c7d55d0f2e5b2a}
  - {path: scripts/maintenance/_gc_files.py, sha256: 38075cc7f6defb6abe67618f885ed2a4823969aca9bad7aaf802767e5860bd08}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# regular_file

## Definition — verbatim
(used, not defined)

> "def regular_file(path: Path) -> bool | None:" — scripts/maintenance/_gc_files.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 21 | used here | Imported to verify whether a reflog path is an accessible regular file before reading. |
| scripts/maintenance/_gc_files.py | 16 | defined here | Function checking whether a path is a regular file while distinguishing absence from permission or I/O errors. |
| scripts/maintenance/_gc_stale.py | 18 | used here | Imported to safely inspect file existence without conflating unreadable paths with absent ones. |

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
clean

## Design notes
Three-valued filesystem probe function determining if a path is a regular file, classified as name-only per D-023.
