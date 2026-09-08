---
package: rjm
name: _strip_bot_details_blocks
slug: strip-bot-details-blocks
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

# _strip_bot_details_blocks

## Definition — verbatim
(used, not defined)

> "def _strip_bot_details_blocks(text: str) -> str:" — scripts/validation/pr_description.py:357

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 357 | defined here | Helper function stripping bot-generated HTML details blocks while preserving human-authored details. |

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
An internal helper function identifier in `pr_description.py` for removing bot details blocks, classified as name-only per D-023.
