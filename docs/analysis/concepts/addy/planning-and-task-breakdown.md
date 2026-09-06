---
package: addy
name: planning-and-task-breakdown
slug: planning-and-task-breakdown
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# planning-and-task-breakdown

## Definition — verbatim
> "Decompose specs into small, verifiable tasks with acceptance criteria and dependency ordering" — README.md:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 4 | applies | Command prompt directive invoking the planning-and-task-breakdown skill |
| evals/cases/planning-and-task-breakdown.json | 2 | applies | Evaluation test case manifest identifying the skill under test |
| external/planning-and-task-breakdown.md | 5 | defines | Web catalog page detailing skill summary, trigger conditions, and workflow |
| README.md | 243 | applies | Repository README table summarizing skill capabilities and trigger rules |
| references/definition-of-done.md | 3 | references | DoD checklist header cross-referencing planning-and-task-breakdown |
| skills/interview-me/SKILL.md | 184 | references | Next-steps recommendation directing larger initiatives to planning skill |
| skills/spec-driven-development/SKILL.md | 174 | references | Designates planning-and-task-breakdown as canonical source for task breakdown |

## Consumes
A specification (`SPEC.md` or equivalent) or clear requirements.

## Produces
`tasks/plan.md` and `tasks/todo.md`.

## When applied
When a spec or clear requirements exist and need to be broken into small, implementable units before coding.

## Sub-concepts
plan-mode, dependency-graph, slice-work-vertically, verification-steps, checkpoints, human-review

## Part of
addy:Plan

## Implementation status
defects: doc-drift, orphan

## Design notes
`planning-and-task-breakdown` is the core skill of Addy's Plan phase. It bridges the gap between high-level architectural specifications and tactical code generation by decomposing requirements into vertical slices with explicit dependency ordering, task sizing, and acceptance criteria. Without it, agents attempt large, unbounded changes and frequently hallucinate missing intermediate components.
