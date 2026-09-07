---
package: rjm
name: count_upstream_refs
slug: count-upstream-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# count_upstream_refs

## Definition — verbatim
(used, not defined)

> "def count_upstream_refs(text: str) -> int:" — scripts/validation/check_skill_md_portability.py:365

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 365 | defined here | Counts upstream-only path references in Markdown prose while stripping fenced code blocks. |
| scripts/validation/check_skill_portability.py | 208 | defined here | Counts upstream-only path references in script source tokens while ignoring comments and docstrings. |

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
defects: doc-drift, orphan

## Design notes
`count_upstream_refs` is a Python validation function identifier for counting non-portable upstream path references in source texts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
