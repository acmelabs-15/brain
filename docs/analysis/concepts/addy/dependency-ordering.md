---
package: addy
name: "dependency ordering"
slug: dependency-ordering
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# dependency ordering

## Definition — verbatim
(used, not defined)

> "Breaks work into ordered tasks with acceptance criteria and dependency ordering." — external/planning-and-task-breakdown.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/planning-and-task-breakdown.md | 5 | used here | Specified in the planning skill summary as a fundamental mechanism of task breakdown. |

## Consumes
Unordered task list, architectural component dependencies, and interface requirements.

## Produces
Topologically sorted task sequence where prerequisites precede dependents.

## When applied
Applied during the Plan phase when structuring tasks for execution.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
defects: doc-drift

## Design notes
Dependency ordering ensures tasks are scheduled so that foundational layers (schemas, interfaces, utilities) are built and verified before dependent consumer layers, avoiding deadlock and rework.
