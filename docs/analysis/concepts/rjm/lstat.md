---
package: rjm
name: lstat
slug: lstat
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_files.py, sha256: 38075cc7f6defb6abe67618f885ed2a4823969aca9bad7aaf802767e5860bd08}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# lstat

## Definition — verbatim
(used, not defined)

> "``lstat`` answers the narrower question of whether anything" — scripts/maintenance/_gc_files.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 31 | used here | Discussed in docstring as the probe determining if any directory entry occupies a path without following symlinks. |

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
Filesystem probe method identifier querying entry existence without following terminal symlinks, classified as name-only per D-023.
