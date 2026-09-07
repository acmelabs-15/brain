---
package: rjm
name: Multi-Agent Sequential
slug: multi-agent-sequential
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

# Multi-Agent Sequential

## Definition — verbatim
> "| **Multi-Agent Sequential** | Dependent subtasks | Agent 1 → Agent 2 → Agent 3 |" — .claude/skills/skillforge/references/architecture-patterns.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 12 | defined here | Architecture patterns table entry defining Multi-Agent Sequential for dependent subtasks chained in sequence. |

## Consumes
Multi-stage workflows where subsequent stages strictly require the verified outputs of earlier stages.

## Produces
Progressively refined artifacts handed off across specialized agent boundaries.

## When applied
Selected when subtasks are interdependent and must be tackled sequentially by distinct specialized personas.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Multi-Agent Sequential is an agent pipeline pattern in SkillForge where specialized agents execute in a strict chain, each consuming the preceding agent's deliverable and producing verified input for the next agent.
