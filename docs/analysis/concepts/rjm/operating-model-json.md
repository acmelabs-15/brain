---
package: rjm
name: operating-model.json
slug: operating-model-json
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

# operating-model.json

## Definition — verbatim
(used, not defined)

> "4. **Close**: Write the JSON to `<workspace>/operating-model.json` (caller chooses workspace)." — .claude/skills/work-operating-model/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/SKILL.md | 74 | defined here | Target JSON file path where canonical team operating model interview data is serialized. |

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
An artifact filename (`operating-model.json`) specifying where structured operating model interview data is saved, classified as `name-only` per D-023.
