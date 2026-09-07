---
package: rjm
name: _duplicate_key
slug: duplicate-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _duplicate_key

## Definition — verbatim
(used, not defined)

> "def _duplicate_key(raw: str | None) -> str | None:" — scripts/validation/check_adr_lifecycle.py:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 332 | defined here | Function returning the first duplicate YAML frontmatter key detected in raw text. |
| scripts/validation/hook_contracts.py | 722 | defined here | Function returning composite identity tuple used to detect duplicate hook registrations. |

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
A Python helper function identifier used across validation scripts to identify duplicate keys in YAML mappings or hook registries, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
