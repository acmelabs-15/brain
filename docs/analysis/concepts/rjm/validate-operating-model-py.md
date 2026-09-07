---
package: rjm
name: validate_operating_model.py
slug: validate-operating-model-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_operating_model.py

## Definition — verbatim
(used, not defined)

> "5. **Validate**: Run `python3 .claude/skills/work-operating-model/scripts/validate_operating_model.py <path-to-json>`. Exit 0 means the schema holds." — .claude/skills/work-operating-model/SKILL.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/SKILL.md | 75 | used here | CLI validator script invoked to verify that an operating model JSON file conforms to schema v1.0.0. |

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
A script filename (`validate_operating_model.py`) providing schema validation for operating model files, classified as `name-only` per D-023.
