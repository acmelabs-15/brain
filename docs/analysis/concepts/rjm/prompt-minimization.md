---
package: rjm
name: Prompt minimization
slug: prompt-minimization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Prompt minimization

## Definition — verbatim
> "Prompt minimization works. This is the model Shihipar was written for, and cutting always-on content is the lever that moves it." — .claude/skills/context-optimizer/references/model-context-doctrine.md:152-153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 152 | defined here | Defined as the primary behavioral optimization lever for Claude Opus 5 by reducing always-on system prompt content. |

## Consumes
System prompt definitions, always-on rules, and audit metrics.

## Produces
Minimized system prompt and reduced token overhead without loss of coding accuracy.

## When applied
Applied when optimizing prompts and context budgets for Claude Opus 5.

## Sub-concepts
none

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
An empirical optimization technique for Claude Opus 5 where cutting always-on instructions from the system prompt prevents behavioral overconstraint and improves agent performance.
