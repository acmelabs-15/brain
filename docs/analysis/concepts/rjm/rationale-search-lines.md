---
package: rjm
name: RATIONALE_SEARCH_LINES
slug: rationale-search-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RATIONALE_SEARCH_LINES

## Definition — verbatim
(used, not defined)

> "RATIONALE_SEARCH_LINES = 30" — scripts/validation/command_size.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/command_size.py | 35 | defined here | Constant defining the number of leading lines searched for a size-exception rationale HTML comment. |
| scripts/validation/skill_size.py | 81 | defined here | Constant defining the number of leading lines searched for a size-exception rationale comment in skill Markdown files. |

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
A module-level constant identifier across command and skill size validators, classified as name-only per D-023.
