---
package: rjm
name: Escalation Criteria
slug: escalation-criteria
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Escalation Criteria

## Definition — verbatim
> "## Escalation Criteria" — .claude/skills/cynefin-classifier/SKILL.md:270

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/SKILL.md | 270 | defined here | Section defining explicit trigger conditions requiring autonomous agents to halt and escalate to human decision-makers. |

## Consumes
Classification confidence scores, boundary notes, domain tie conditions.

## Produces
Escalation signal, handover report to senior human decision-maker, pause on automated progression.

## When applied
When classification confidence is LOW, when a problem sits on a domain boundary, or when indicators point equally to conflicting domains.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: doc-drift

## Design notes
Escalation Criteria function as a governance safety gate preventing autonomous agents from acting on low-confidence or boundary-straddling domain assessments. If the classification confidence is LOW or indicators are evenly split across domains, the agent halts automated progression and escalates to human engineers, avoiding catastrophic misapplication of cognitive models.
