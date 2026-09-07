---
package: rjm
name: Analyze Results
slug: analyze-results
kind: phase
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

# Analyze Results

## Definition — verbatim
> "### Phase 6: Analyze Results" — .claude/skills/chaos-experiment/SKILL.md:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 224 | defined here | Phase 6 evaluating observed behavior against hypothesis to assign verdicts and prioritize remediation. |

## Consumes
Observation logs, telemetry timeseries data, and the original hypothesis statement.

## Produces
Formal analysis document with experiment verdict (VALIDATED, INVALIDATED, INCONCLUSIVE) and prioritized action items.

## When applied
Conducted immediately post-experiment to synthesize observations into system improvements.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Analyze Results` closes the chaos engineering loop by evaluating whether the hypothesis was validated or disproven, turning unexpected findings into prioritized engineering backlog items.
