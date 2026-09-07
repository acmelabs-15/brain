---
package: rjm
name: FileNotFoundError
slug: filenotfounderror
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

# FileNotFoundError

## Definition — verbatim
(used, not defined)

> "``FileNotFoundError`` as nothing being there, and it raises" — scripts/maintenance/_gc_files.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_files.py | 28 | used here | Cited in docstring explaining distinction between symlinks to missing targets and genuine path absence. |

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
Python built-in exception class identifier representing missing filesystem targets, classified as name-only per D-023.
