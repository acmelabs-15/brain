---
package: rjm
name: check_memory_index
slug: check-memory-index
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

# check_memory_index

## Definition — verbatim
(used, not defined)

> "def check_memory_index(index_path: Path, memories_dir: Path) -> list[str]:" — scripts/update_memory_index_tokens.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 127 | defined here | Defines validation function detecting drifted memory token counts without writing changes. |

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
A Python verification function identifier checking memory index token counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
