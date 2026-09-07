---
package: rjm
name: Missing Elements
slug: missing-elements
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Missing Elements

## Definition — verbatim
> "These questions identify gaps in the current analysis." — .claude/skills/skillforge/references/regression-questions.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 20 | defined here | Category 1 regression questioning targeting gaps, blind spots, assumptions, and edge cases. |

## Consumes
Current draft requirements and design assumptions.

## Produces
Discovered requirements, unstated edge cases, and exposed assumptions for inclusion in the skill specification.

## When applied
Asked during every round of regression questioning.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
An inquiry lens in SkillForge Phase 1 focused on uncovering blind spots, implicit requirements, and edge cases that initial prompt specifications failed to declare.
