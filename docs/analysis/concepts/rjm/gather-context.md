---
package: rjm
name: Gather Context
slug: gather-context
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gather Context

## Definition — verbatim
> "### 2. Gather Context" — .claude/skills/context-optimizer/references/vibe-engineering.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 17 | defined here | Step 2 of the interaction protocol collecting relevant code paths, constraints, and prior attempts. |

## Consumes
Clarified goal and target codebase.

## Produces
Collected code paths, technical constraints, failed attempt history, and validated assumptions.

## When applied
Second step of agent interaction, executed before proposing changes or planning.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The second step of the 7-Step Agent Interaction Protocol, surfacing relevant code paths, system constraints, and past failures to prevent hallucinations and incompatible designs.
