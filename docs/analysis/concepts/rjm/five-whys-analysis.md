---
package: rjm
name: Five Whys Analysis
slug: five-whys-analysis
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Five Whys Analysis

## Definition — verbatim
> "## Five Whys Analysis" — .claude/skills/retrospective/references/frameworks.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 143 | defined here | Root cause analysis template iteratively interrogating failures through five levels of causality. |

## Consumes
Problem statements and failure events surfaced in Phase 0 data gathering.

## Produces
Identified underlying root cause and an actionable fix.

## When applied
Mandatory for every failure during Phase 1 (Generate Insights) of a retrospective.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
clean

## Design notes
Five Whys Analysis provides a structured recursive questioning technique to dig beneath surface-level failure symptoms to identify root causes. By stopping at actionable causes or external system limits, it prevents superficial fixes and ensures changes address genuine underlying deficiencies.
