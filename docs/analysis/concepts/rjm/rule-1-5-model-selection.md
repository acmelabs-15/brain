---
package: rjm
name: RULE 1.5: Model Selection
slug: rule-1-5-model-selection
kind: pattern
package_phase: cross-phase
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

# RULE 1.5: Model Selection

## Definition — verbatim
> "RULE 1.5: Model Selection" — .claude/skills/planner/scripts/executor.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 84 | defined here | Rule heading defining model selection constraints, permitting upward adjustment to opus while strictly prohibiting downgrade to haiku. |

## Consumes
Task complexity assessment and agent delegation requests.

## Produces
Model tier assignments for delegated subagents.

## When applied
Applied when selecting models for agent delegation during plan execution.

## Sub-concepts
sonnet, opus

## Part of
execution-rules

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Rule 1.5 governs model tier selection for agent delegations. It establishes Sonnet as the quality baseline, allows upgrading to Opus for challenging reasoning tasks, and strictly forbids downgrading to Haiku to prevent quality degradation.
