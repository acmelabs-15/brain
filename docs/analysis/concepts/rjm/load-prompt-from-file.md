---
package: rjm
name: load_prompt_from_file
slug: load-prompt-from-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_prompt_from_file

## Definition — verbatim
(used, not defined)

> "def load_prompt_from_file(path: str) -> str:" — scripts/eval/eval-prompt-change.py:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 224 | defined here | Function that reads prompt text directly from a file path on disk. |

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
defects: missing-path

## Design notes
A Python helper function in `eval-prompt-change.py` loading prompt text from local disk, classified as name-only per D-023.
