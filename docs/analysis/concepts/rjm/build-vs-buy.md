---
package: rjm
name: Build vs Buy
slug: build-vs-buy
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

# Build vs Buy

## Definition — verbatim
(used, not defined)

> "## Implications for Build vs Buy" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 59 | used here | Section evaluating how rapid model capability improvements devalue custom scaffolding in build vs buy decisions. |

## Consumes
System requirements, third-party library/SaaS alternatives, and model capability trajectories.

## Produces
Build vs buy evaluation recommendation accounting for custom scaffolding depreciation.

## When applied
Applied during specification when deciding between custom implementation and commercial/open-source adoption.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Build vs Buy in rjm is an evaluation technique that weighs custom development against external solutions, specifically incorporating the principle that step-change model improvements rapidly devalue custom prompt scaffolding and procedural code.
