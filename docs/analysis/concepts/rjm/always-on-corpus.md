---
package: rjm
name: always-on corpus
slug: always-on-corpus
kind: artifact
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

# always-on corpus

## Definition — verbatim
> "always-on corpus is 7 rules, 70,469 bytes**: the ones that load regardless" — .claude/skills/context-optimizer/references/model-context-doctrine.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 178 | defined here | Defined as the set of baseline instruction rules that unconditionally load on every session regardless of files touched. |

## Consumes
Always-on rule files in `.claude/rules/` or `.github/instructions/`.

## Produces
Baseline system prompt context payload (~70KB across 7 rules) loaded on every agent interaction.

## When applied
Loaded unconditionally on every turn and file edit across the repository.

## Sub-concepts
effective-context, always-on-status

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
The baseline collection of repository rules and instructions that inject into the context window unconditionally for every turn, requiring strict measurement and budget governance to avoid context inflation.
