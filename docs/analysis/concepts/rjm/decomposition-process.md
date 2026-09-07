---
package: rjm
name: Decomposition Process
slug: decomposition-process
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decomposition Process

## Definition — verbatim
> "## Decomposition Process" — .claude/agents/task-decomposer.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 76 | defined here | Three-phase methodology for breaking PRDs and epics into atomic tasks. |
| templates/agents/task-decomposer.shared.md | 84 | defined here | Shared template specification detailing the 3-phase task breakdown process. |

## Consumes
PRD documents (`.agents/planning/PRD-[name].md`), epic scopes, functional requirements, and technical constraints.

## Produces
Sequenced, atomic task lists grouped by milestones with acceptance criteria and dependency graphs.

## When applied
Applied during planning after PRD completion to produce an implementer-ready task breakdown.

## Sub-concepts
task-definition-format, complexity-guidelines, estimate-reconciliation-protocol, 10-threshold-rule

## Part of
task-decomposer

## Implementation status
clean

## Design notes
Decomposition Process is the three-phase methodology (Understand Scope, Break Down, Sequence) executed by task-decomposer to convert high-level PRD requirements and architecture epics into atomic, estimable work units.
