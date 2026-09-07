---
package: rjm
name: JIT prompt injection
slug: jit-prompt-injection
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JIT prompt injection

## Definition — verbatim
> "Seven-phase execution workflow with JIT prompt injection:" — .claude/skills/planner/scripts/executor.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 5 | defined here | Workflow description highlighting dynamic just-in-time prompt injection for plan execution steps. |

## Consumes
Plan file path, current execution step number, total steps, and agent thoughts.

## Produces
Step-tailored execution instructions, constraints, and delegation guidance injected into the agent context at runtime.

## When applied
Applied dynamically at each step of the seven-phase plan execution process.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
JIT prompt injection is a context-management technique in rjm that supplies an executing agent only with the specific instructions, rules, and guidance needed for its current execution step. By injecting guidance just-in-time rather than overloading the prompt upfront, it conserves context and prevents instructions from interfering across workflow phases.
