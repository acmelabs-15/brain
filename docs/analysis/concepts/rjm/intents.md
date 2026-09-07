---
package: rjm
name: intents
slug: intents
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# intents

## Definition — verbatim
(used, not defined)

> "| `references/explainers-and-intents.md` | Write explainers before work, use intents as permission gates |" — .claude/skills/planner/SKILL.md:292

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 292 | used here | Reference guideline prescribing explicit intent declarations as permission gates for agent actions. |

## Consumes
Proposed actions, planned changes, and scope declarations.

## Produces
Authorization gate verification allowing or blocking agent action execution based on declared intent.

## When applied
Evaluated before initiating potentially disruptive or irreversible agent operations.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
A permission gating pattern requiring autonomous agents to declare their operational intent explicitly before modifying state or executing actions, enabling safe human-in-the-loop or policy oversight.
