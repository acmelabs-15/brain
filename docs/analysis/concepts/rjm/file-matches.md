---
package: rjm
name: file_matches
slug: file-matches
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

# file_matches

## Definition — verbatim
(used, not defined)

> "def file_matches(actual: str, mentioned: str) -> bool:" — scripts/validation/pr_description.py:605

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 605 | defined here | Path matching function supporting exact matches, basename/suffix matches, and wildcard glob patterns. |

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
A helper function identifier in `pr_description.py` matching actual git diff paths against mentioned paths, classified as name-only per D-023.
