---
package: rjm
name: reparse points
slug: reparse-points
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_windows_files.py, sha256: fdc703ec55566d507c95cbf3e65ab11910bfd97b1600e29c09c756f82a5e9d54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reparse points

## Definition — verbatim
(used, not defined)

> "Open one transcript without following reparse points or path swaps." — scripts/eval/_copilot_windows_files.py:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_windows_files.py | 175 | used here | Mentioned in docstring of open_windows_transcript describing file traversal protection against symbolic links and mount points. |

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
An NTFS file system mechanism (symlinks, junctions, and mount points) referenced in `_copilot_windows_files.py` documentation regarding path traversal safety, classified as `name-only` per D-023.
