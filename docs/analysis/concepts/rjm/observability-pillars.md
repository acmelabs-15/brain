---
package: rjm
name: Observability Pillars
slug: observability-pillars
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observability Pillars

## Definition — verbatim
> "- [Observability Pillars](references/reliability-observability-pillars.md) - Logs, metrics, traces for investigation methodology" — .claude/skills/analyze/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 78 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 1 (Entry) reliability foundational concept. |
| .claude/skills/analyze/SKILL.md | 69 | used here | Referenced in the skill documentation as an investigation methodology reference covering logs, metrics, and traces. |

## Consumes
System telemetry, investigation questions, and debugging objectives.

## Produces
Structured debugging methodology utilizing telemetry signals across logs, metrics, and distributed traces.

## When applied
Applied during analysis and troubleshooting when investigating incidents or verifying system behavior.

## Sub-concepts
logs, metrics

## Part of
analyze

## Implementation status
defects: missing-path

## Design notes
Observability Pillars provides the foundational telemetry model (logs, metrics, traces) in rjm's analysis skill, establishing structured signal categories that allow agents to inspect internal system state and diagnose failures during code analysis and triage.
