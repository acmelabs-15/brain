---
package: rjm
name: Next action
slug: next-action
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Next action

## Definition — verbatim
(used, not defined)

> "Next action: <smallest action, or none>" — .claude/skills/avoiding-manufactured-work/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 39 | defined here | Standardized output schema label specifying the minimal concrete action required to unblock an identified consumer. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
avoiding-manufactured-work

## Implementation status
defects: missing-path

## Design notes
An output block field label in the avoiding-manufactured-work skill that articulates the smallest concrete next step for an agent rather than representing an independent lifecycle concept, classified as `kind: name-only` per D-023.
