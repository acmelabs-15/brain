---
package: rjm
name: "capacity-assessment"
slug: capacity-assessment
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# capacity-assessment

## Definition — verbatim
> "<capacity-assessment>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 149 | defined here | XML specification element defining questions to evaluate engineering skills, bandwidth, and maintenance capacity. |

## Consumes
Engineering team roster, current skill proficiencies, sprint allocations, and existing maintenance load.

## Produces
Documented capacity assessment covering team capability, availability, long-term maintenance readiness, and strategic skill growth.

## When applied
Executed during Phase 2 (Analyze) alongside financial TCO modeling before committing to a build option.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
A reality-check checklist in rjm that prevents organizations from choosing to build software when their engineering teams lack the skills or bandwidth to succeed. By explicitly evaluating skill gaps, roadmap distraction, and long-term maintenance capacity, it prevents the creation of orphaned or substandard in-house systems.
