---
package: rjm
name: Single-Phase
slug: single-phase
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

# Single-Phase

## Definition — verbatim
> "| **Single-Phase** | Simple linear tasks | Steps 1-2-3 |" — .claude/skills/skillforge/references/architecture-patterns.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/architecture-patterns.md | 7 | defined here | Architecture patterns table entry defining Single-Phase for simple linear tasks structured as sequential steps 1-2-3. |

## Consumes
Simple procedural task requirements without complex branching or intermediate review gates.

## Produces
A streamlined, step-by-step skill instruction document.

## When applied
Selected when a task is a straightforward procedure that can be executed linearly in a single pass.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Single-Phase is the simplest skill architecture pattern in SkillForge, structuring instructions as a single linear sequence of steps when a task requires no sub-agent delegation, complex gating, or multi-stage artifact transformations.
