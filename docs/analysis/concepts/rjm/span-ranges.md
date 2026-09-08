---
package: rjm
name: _span_ranges
slug: span-ranges
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

# _span_ranges

## Definition — verbatim
(used, not defined)

> "def _span_ranges(body: str, pattern: re.Pattern[str]) -> list[tuple[int, int]]:" — scripts/validation/pr_description.py:755

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 755 | defined here | Helper function returning start and end offset tuples for all non-overlapping matches of a pattern. |

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
`_span_ranges` is an internal Python helper function identifier returning regex match offset ranges rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
