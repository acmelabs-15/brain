---
package: rjm
name: KEBAB_DENYLIST
slug: kebab-denylist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# KEBAB_DENYLIST

## Definition — verbatim
(used, not defined)

> "# The alternative was appending each offending token to KEBAB_DENYLIST, which" — .claude/skills/orphan-ref-validator/scripts/filters.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/filters.py | 39 | used here | Referenced and applied in filters.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 372 | used here | Referenced and applied in scan.py during verification and operational workflows. |

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
A code identifier, type, or architectural heading (`KEBAB_DENYLIST`) recorded during inventory analysis, classified as `name-only` per D-023.
