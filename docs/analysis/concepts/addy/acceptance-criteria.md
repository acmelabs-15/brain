---
package: addy
name: acceptance criteria
slug: acceptance-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# acceptance criteria

## Definition — verbatim
> "Unlike acceptance criteria, which vary per task and answer \"did we build the right thing?\", the Definition of Done is the same every time and answers \"is this finished to our standard?\"." — references/definition-of-done.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 17 | used here | Instructs the build loop to read the task's acceptance criteria as step 1. |
| .gemini/commands/planning.toml | 11 | used here | Mandates that every task in the plan declare explicit, testable acceptance criteria. |
| .gemini/commands/spec.toml | 8 | used here | Directs requirements gathering to establish testable acceptance criteria. |
| commands/build.toml | 17 | used here | Claude Code command step reading acceptance criteria before writing code. |
| commands/planning.toml | 1 | used here | Command description emphasizing breaking down work into tasks with acceptance criteria. |
| commands/spec.toml | 8 | used here | Claude Code spec command step defining clear acceptance criteria. |
| evals/cases/planning-and-task-breakdown.json | 6 | used here | Eval case verification asserting tasks include concrete acceptance criteria. |
| external/planning-and-task-breakdown.md | 5 | used here | External catalog summary highlighting task breakdown with acceptance criteria. |
| references/definition-of-done.md | 3 | defined here | Defines acceptance criteria in contrast to Definition of Done as task-specific verification bars. |
| skills/planning-and-task-breakdown/SKILL.md | 10 | used here | Emphasizes decomposing work into small verifiable tasks with explicit acceptance criteria. |

## Consumes
Feature requirements, specifications, and scope boundaries.

## Produces
Task-specific success conditions that determine if the right functionality was built.

## When applied
Defined during Spec and Plan phases; validated during Build and Verify phases.

## Sub-concepts
none

## Part of
spec, plan

## Implementation status
defects: doc-drift, orphan (external/planning-and-task-breakdown.md drifts in anatomy structure and is unreferenced)

## Design notes
Task-level verification criteria answering 'did we build the right thing?', providing unambiguous, testable target behaviors for test-driven development.
