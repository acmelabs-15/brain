---
package: rjm
name: +/Delta
slug: delta
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# +/Delta

## Definition — verbatim
> "Quick self-assessment of the retrospective process." — .claude/skills/retrospective/references/frameworks.md:352

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 116 | used here | Listed under Phase 6 Close the Retrospective as the initial closing reflection activity. |
| .claude/skills/retrospective/references/frameworks.md | 350 | defined here | Detailed activity specification defining + (Keep) and Delta (Change) evaluation questions. |
| .claude/skills/retrospective/references/learning-template.md | 112 | used here | Included in retrospective output template with + Keep and Delta Change sections. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 309 | defined here | Python script output template embedding the +/Delta section for retrospective artifacts. |
| .claude/skills/retrospective/SKILL.md | 154 | used here | Prescribed as mandatory closing activity alongside ROTI and Helped, Hindered, Hypothesis. |
| templates/agents/retrospective.shared.md | 1179 | defined here | Shared agent template defining the +/Delta closing activity and question format. |

## Consumes
Retrospective facilitator experience, session timeline, and activity effectiveness observations.

## Produces
Categorized feedback items separating practices that worked (+) from friction points or wasteful activities requiring change (Delta).

## When applied
Executed during Phase 6 (Close the Retrospective) to gather immediate feedback on the retrospective run.

## Sub-concepts
delta-triage

## Part of
close-the-retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
+/Delta provides a lightweight, two-column evaluation technique to capture quick process feedback without heavy analytical overhead. In rjm, it captures what practices produced valuable insights versus what activities lagged or failed, feeding directly into Delta Triage to prevent recurring friction in future sessions.
