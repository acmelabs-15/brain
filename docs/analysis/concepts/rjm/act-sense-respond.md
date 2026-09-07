---
package: rjm
name: Act-Sense-Respond
slug: act-sense-respond
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Act-Sense-Respond

## Definition — verbatim
> "Act-Sense-Respond" — .claude/skills/cynefin-classifier/scripts/classify.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 130 | defined here | Defined in STRATEGIES dictionary as the response strategy approach string for the Chaotic domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 58 | defined here | Specified in Cynefin quadrant diagram as the mandatory response approach for Chaotic crisis states. |

## Consumes
Emergency containment procedures, rollback mechanisms, incident triage authority.

## Produces
System stabilization, bleeding stopped, transition to Complex or Complicated domain.

## When applied
When facing Chaotic domain conditions such as critical production outages or severe security breaches requiring immediate intervention.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: unimplemented-feature, doc-drift

## Design notes
`Act-Sense-Respond` is the crisis management response pattern for the Chaotic Cynefin domain. When a critical outage or security breach occurs, there is no time for upfront analysis or exploratory experimentation; the primary objective is immediate containment. The actor acts decisively to stabilize the system and stop ongoing damage, senses where order has been restored, and then responds to transition the issue into the Complex or Complicated domains.
