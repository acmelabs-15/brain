---
package: matt
name: grilling session
slug: grilling-session
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# grilling session

## Definition — verbatim
> "This is just the same in the AI age. There is a communication gap between you and the agent. The fix for this is a **grilling session** - getting the agent to ask you detailed questions about what you're building." — README.md:96

## Also called — verbatim
`grilling` — skills/in-progress/writing-fragments/SKILL.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 40 | used here | Contradistinguishes topic grilling from audience-and-return grilling in `to-questionnaire`. |
| README.md | 96 | defined here | Introduces grilling as the foundational remedy for alignment communication gaps with agents. |
| skills/in-progress/writing-fragments/SKILL.md | 9 | defined here | Directs the agent to conduct a relentless interview to discover raw writing fragments. |
| skills/in-progress/writing-shape/SKILL.md | 43 | defined here | Adapts the grilling technique to interrogate article structure, argumentative order, and narrative flow. |

## Consumes
An initial plan, problem statement, feature request, or writing topic.

## Produces
Resolved decision branches, surfaced assumptions, and aligned shared context between human and agent.

## When applied
Before making code changes, beginning implementations, or committing to document structure.

## Sub-concepts
decision-tree, natural-language-steering

## Part of
none

## Implementation status
clean (in README.md, skills/in-progress/writing-fragments/, skills/in-progress/writing-shape/); defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
A grilling session is Matt's core conversational alignment technique where the agent relentlessly interviews the developer to expose ambiguities and resolve decision branches before writing code or documents.
