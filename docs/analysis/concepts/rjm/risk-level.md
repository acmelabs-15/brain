---
package: rjm
name: Risk Level
slug: risk-level
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Level

## Definition — verbatim
> "3. **Risk Level**: What's the potential impact of errors?" — docs/task-classification-guide.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/devops/arm-runner-migration-analysis.md | 12 | used here | Specified as LOW for runner migration since most infrastructure is already proven on ARM. |
| docs/task-classification-guide.md | 13 | defined here | Defined as one of three classification dimensions (Low, Medium, High, Critical) governing agent sequence routing and validation gates. |

## Consumes
Task descriptions, error reports, and proposed code changes.

## Produces
Task risk categorization (Low, Medium, High, Critical) that enforces required validation gates (QA, Critic, Security).

## When applied
Applied during initial task intake and classification prior to agent sequence orchestration.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A core task classification dimension in rjm that quantifies potential operational impact and failure reversibility to ensure appropriate agent verification gates (such as mandatory Security or Critic review) are enforced without imposing unnecessary overhead on low-risk tasks.
