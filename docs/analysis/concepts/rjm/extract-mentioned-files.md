---
package: rjm
name: extract_mentioned_files
slug: extract-mentioned-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# extract_mentioned_files

## Definition — verbatim
(used, not defined)

> "def extract_mentioned_files(description: str) -> list[str]:" — scripts/validation/pr_description.py:529

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 529 | defined here | Function extracting unique file paths claimed as modified in PR description text after stripping informational sections. |

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
defects: doc-drift

## Design notes
A function identifier in `pr_description.py` for extracting claimed files for critical validation, classified as name-only per D-023.
