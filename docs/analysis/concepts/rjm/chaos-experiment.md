---
package: rjm
name: chaos-experiment
slug: chaos-experiment
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# chaos-experiment

## Definition — verbatim
> "name: chaos-experiment" — .claude/skills/chaos-experiment/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 2 | defined here | Skill frontmatter declaring skill name, triggers, and capabilities for designing chaos engineering experiments. |
| .claude/skills/chaos-experiment/templates/experiment-template.md | 1 | defined here | Template header declaring standardized structure for generated chaos experiment plans. |

## Consumes
System architecture documentation, historical incident postmortems, and steady-state operational telemetry.

## Produces
Standardized chaos experiment plans (`.agents/chaos/YYYY-MM-DD-<slug>.md`), observation logs, and remediation action items.

## When applied
Triggered when engineers prompt "design a chaos experiment", "plan a game day", "failure injection", "test resilience", or "chaos engineering".

## Sub-concepts
chaos-experiment-designer, establish-baseline, form-hypothesis, design-injection-plan, execute-experiment, analyze-results

## Part of
reliability

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The `chaos-experiment` skill provides a structured 6-phase engineering method to design, execute, and analyze controlled failure injection experiments to build quantifiable confidence in system resilience.
