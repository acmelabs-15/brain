---
package: matt
name: Complete acceptance criteria
slug: complete-acceptance-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complete acceptance criteria

## Definition — verbatim
> "Complete acceptance criteria" — skills/engineering/triage/AGENT-BRIEF.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/AGENT-BRIEF.md | 28 | defined here | Mandates that agent briefs provide concrete, testable, independently verifiable acceptance criteria. |

## Consumes
User requirements, system behavior specifications, and reproduced bug conditions.

## Produces
An independently verifiable acceptance criteria list within an agent brief.

## When applied
Applied when defining completion conditions in an agent brief before marking an issue `ready-for-agent`.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift

## Design notes
An agent brief authoring principle requiring clear, testable, and independently verifiable definitions of done. For an autonomous agent operating without real-time human interaction, ambiguous criteria lead to incomplete work or hallucinated stopping points; concrete criteria allow the agent to independently confirm task completion.
