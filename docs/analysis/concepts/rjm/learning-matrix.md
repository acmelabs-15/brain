---
package: rjm
name: Learning Matrix
slug: learning-matrix
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Learning Matrix

## Definition — verbatim
> "### Activity: Learning Matrix" — .claude/skills/retrospective/references/frameworks.md:307

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 84 | used here | Listed under Phase 1 activities for rapid insight categorization. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 113 | used here | Documentation referencing the learning matrix artifact produced in retrospectives. |
| .claude/skills/retrospective/references/frameworks.md | 307 | defined here | Framework activity defining the four-quadrant learning matrix grid. |
| .claude/skills/retrospective/SKILL.md | 106 | used here | Skill instruction directing use of Learning Matrix when operating under time constraints. |
| templates/agents/retrospective.shared.md | 436 | defined here | Shared template specifying the Learning Matrix categorization format. |

## Consumes
Unsorted observations, tool outputs, and execution insights.

## Produces
2x2 categorized grid sorting insights into: What worked well (replicate), What didn't work (fix), Questions raised (investigate), and New ideas/experiments (explore).

## When applied
Applied during Phase 1 (Generate Insights) for rapid categorization, especially under time or token constraints.

## Sub-concepts
none

## Part of
generate-insights, retrospective

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The Learning Matrix provides a fast, structured categorization grid that organizes raw findings into four actionable quadrants. It ensures balanced coverage of both positive reinforcements and corrective fixes, preventing retrospectives from degenerating into one-sided blame or unearned optimism.
