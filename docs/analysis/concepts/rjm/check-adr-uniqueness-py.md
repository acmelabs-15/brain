---
package: rjm
name: check_adr_uniqueness.py
slug: check-adr-uniqueness-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# check_adr_uniqueness.py

## Definition — verbatim
(used, not defined)

> "`check_adr_uniqueness.py` is the only other deterministic ADR gate and it reads" — scripts/validation/check_adr_lifecycle.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 122 | used here | Executed via `--print-next` during Phase G2 Step 4 to determine the next available sequence number. |
| scripts/validation/check_adr_lifecycle.py | 26 | used here | Cited in docstring as the existing filename-based deterministic ADR validation gate. |

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
Script filename identifying an automated validation utility for ADR number allocation and uniqueness rather than an architectural lifecycle concept.
