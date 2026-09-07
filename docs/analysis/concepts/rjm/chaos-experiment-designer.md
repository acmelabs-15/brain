---
package: rjm
name: Chaos Experiment Designer
slug: chaos-experiment-designer
kind: role
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Chaos Experiment Designer

## Definition — verbatim
> "# Chaos Experiment Designer" — .claude/skills/chaos-experiment/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 11 | defined here | Primary persona heading for the chaos engineering skill guiding users through experiment definition. |

## Consumes
System architecture context, operational logs, monitoring baselines, and stakeholder constraints.

## Produces
Falsifiable resilience hypotheses, blast radius containment plans, and structured game day documentation.

## When applied
Active when the agent executes the chaos-experiment skill to guide users through resilience testing.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Chaos Experiment Designer` is the specialized role persona assumed by the agent within the `chaos-experiment` skill to guide teams in formulating falsifiable resilience hypotheses and safe failure injection parameters.
