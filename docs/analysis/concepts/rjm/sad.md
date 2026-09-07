---
package: rjm
name: Sad
slug: sad
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

# Sad

## Definition — verbatim
> "Worked but poorly" — .claude/skills/retrospective/references/frameworks.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 96 | defined here | Outcome classification category capturing suboptimal execution, inefficiency, and excessive retries. |

## Consumes
Execution trace logs showing slow execution, redundant queries, and iterative retries.

## Produces
Documented list of inefficient or suboptimal behaviors requiring optimization.

## When applied
Applied during Outcome Classification in Phase 0 data gathering.

## Sub-concepts
none

## Part of
outcome-classification

## Implementation status
clean

## Design notes
Sad reinterprets the emotional category as suboptimal agent performance. It captures tasks that technically completed but suffered from inefficiencies, repeated retries, excessive token consumption, or circuitous reasoning, highlighting opportunities for optimization.
