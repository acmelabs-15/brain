---
package: rjm
name: collapse_duplicate_rows
slug: collapse-duplicate-rows
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/update_memory_index_tokens.py, sha256: 7fb67cc56917e1fef3076e74f714b60137c1d81223e031fb057cf29820598fea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# collapse_duplicate_rows

## Definition — verbatim
(used, not defined)

> "def collapse_duplicate_rows(lines: list[str]) -> tuple[list[str], bool]:" — scripts/update_memory_index_tokens.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 96 | defined here | Defines function collapsing identical rows introduced during git union merges. |

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
defects: missing-path, other

## Design notes
A Python utility function identifier deduplicating merged index rows rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
