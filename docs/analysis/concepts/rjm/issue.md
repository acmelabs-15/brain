---
package: rjm
name: _Issue
slug: issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/review_memory_export_security.py, sha256: d8e98211aeb8e9412aa1bc516f5a90b054306e33e2390b486e8c2571a279060f}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _Issue

## Definition — verbatim
(used, not defined)

> "class _Issue(TypedDict):" — scripts/review_memory_export_security.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 35 | defined here | TypedDict structure storing sensitive data finding category, match count, and sample lines. |
| scripts/validation/pr_description.py | 221 | defined here | Dataclass representing a PR description validation finding with severity, type, file, and message. |

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
`_Issue` is an internal Python type definition in validation scripts representing finding records rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
