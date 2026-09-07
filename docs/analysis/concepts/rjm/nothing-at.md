---
package: rjm
name: nothing_at
slug: nothing-at
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_anchors.py, sha256: 5fc8d66c8c261d72b266e12530edb85d80ec424089f4c38cd9c7d55d0f2e5b2a}
  - {path: scripts/maintenance/_gc_files.py, sha256: 38075cc7f6defb6abe67618f885ed2a4823969aca9bad7aaf802767e5860bd08}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# nothing_at

## Definition — verbatim
(used, not defined)

> "def nothing_at(path: Path) -> bool:" — scripts/maintenance/_gc_files.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 21 | used here | Imported to verify absence of reftable directory and settle missing directory walks. |
| scripts/maintenance/_gc_files.py | 47 | defined here | Helper function determining if there is genuinely no directory entry at a given filesystem path. |

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
Filesystem helper function checking for genuine directory entry absence via lstat, classified as name-only per D-023.
