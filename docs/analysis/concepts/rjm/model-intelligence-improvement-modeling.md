---
package: rjm
name: Model intelligence improvement modeling
slug: model-intelligence-improvement-modeling
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Model intelligence improvement modeling

## Definition — verbatim
> "Model intelligence improvement modeling: seeing a new model coming and proactively simplifying workflows before it arrives." — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 55 | defined here | Meta-skill for anticipating upcoming model upgrades and proactively pruning prompt scaffolding and procedural constraints. |

## Consumes
none

## Produces
none

## When applied
When architecting AI systems and planning workflow simplification ahead of step-change model upgrades.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A forecasting technique and meta-skill that instructs engineers to anticipate model intelligence jumps and aggressively remove unnecessary prompt scaffolding and rigid workflow constraints before the next generation renders them counterproductive.
