---
package: rjm
name: instrument
slug: instrument
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# instrument

## Definition — verbatim
> "Vocabulary, defined once: an \"instrument\" is a script whose output you read, not a gate you must pass." — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 13 | defined here | Defined formally as a read-only script whose output is read against a baseline rather than a blocking gate. |

## Consumes
Target codebase files, execution parameters, and repository git state.

## Produces
Diagnostic readings, output metrics, and delta comparisons against established baselines.

## When applied
Applied when developers or agents need to inspect codebase health, measure drift, or check token budgets without halting execution.

## Sub-concepts
instrument-index

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
In rjm's architecture, an instrument is strictly differentiated from a gate. While a gate halts workflows on failure, an instrument is a read-only command designed to turn qualitative concerns into quantitative numbers that can be evaluated against known baselines.
