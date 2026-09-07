---
package: rjm
name: Persona Evaluation
slug: persona-evaluation
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Persona Evaluation

## Definition — verbatim
> "This pass applies **only to prose artifacts**: plans, ADRs, roadmaps, specs, design documents, and similar written deliverables." — .claude/agents/critic.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 58 | defines | Section heading defining the three-persona review pass for written prose artifacts. |
| templates/agents/critic.shared.md | 62 | defines | Shared template specification of the multi-persona review pass for prose documents. |

## Consumes
Written prose artifacts (plans, architecture records, specifications, roadmaps).

## Produces
Multi-perspective review findings identifying comprehension gaps, weak claims, and hidden assumptions.

## When applied
Executed during critique of prose artifacts; explicitly skipped for code diffs.

## Sub-concepts
naive-reader, hostile-expert, cynic

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
A review technique evaluating written technical documents through three specialized perspectives (Naive Reader, Hostile Expert, Cynic) to ensure clarity, rigor, and realistic assumptions.
