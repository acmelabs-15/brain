---
package: rjm
name: Multi-Agent Parallel
slug: multi-agent-parallel
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/architecture-patterns.md, sha256: 8d435e1860a20134846db5bd3f3af1ed981de5fb03546d77575bce623b83ad01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-Agent Parallel

## Definition — verbatim
> "| **Multi-Agent Parallel** | Independent subtasks | Launch agents concurrently |" — .claude/skills/skillforge/references/architecture-patterns.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 11 | defined here | Architecture patterns table entry defining Multi-Agent Parallel for concurrent execution of independent subtasks. |

## Consumes
Partitionable subtasks that do not depend on each other's outputs.

## Produces
Aggregated outputs from concurrently executed agent processes.

## When applied
Selected when subtasks can be executed in parallel to minimize wall time and maintain isolated agent contexts.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Multi-Agent Parallel is an orchestration pattern in SkillForge where an orchestrator spawns multiple sub-agents simultaneously with fresh contexts to work on independent problem facets, synthesizing their outputs upon completion.
