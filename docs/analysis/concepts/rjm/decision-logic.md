---
package: rjm
name: Decision Logic
slug: decision-logic
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Logic

## Definition — verbatim
> "3. **Decision Logic**: 3-5 scenarios with input signal, action, output format" — .claude/skills/analyze/references/agent-architecture-patterns.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 19 | defined here | Step 3 of the 6-step prompt design establishing scenario-based input/action/output rules. |

## Consumes
Anticipated operational scenarios, input signals, and fallback handling protocols.

## Produces
Explicit mapping of 3-5 operational scenarios to deterministic actions and output formats.

## When applied
Incorporated into agent system prompts to guide runtime decision-making under expected and ambiguous inputs.

## Sub-concepts
none

## Part of
6-step-structured-prompt-design

## Implementation status
defects: missing-path

## Design notes
Decision Logic provides agents with deterministic behavioral mappings across primary operating scenarios. By structuring each scenario as a concrete trigger signal, required action, and expected output format—coupled with an explicit fallback when signals are ambiguous—rjm minimizes probabilistic decision errors and keeps agent actions predictable.
