---
package: rjm
name: open_windows_transcript
slug: open-windows-transcript
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_transcript.py, sha256: 32388d0fe4cce1e3b87186e6f46034bcb5dd1df806ceef6d70c75fdccc13c39e}
  - {path: scripts/eval/_copilot_windows_files.py, sha256: fdc703ec55566d507c95cbf3e65ab11910bfd97b1600e29c09c756f82a5e9d54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# open_windows_transcript

## Definition — verbatim
(used, not defined)

> "def open_windows_transcript(" — scripts/eval/_copilot_windows_files.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_transcript.py | 14 | used here | Imported to open Windows transcript files securely without following junctions or reparse points. |
| scripts/eval/_copilot_windows_files.py | 170 | defined here | Platform-specific Windows function using Win32 API handles to open session transcript files safely. |

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
`open_windows_transcript` is a platform-specific Windows utility function for opening transcripts via Win32 API handles, classified as `kind: name-only` per D-023.
