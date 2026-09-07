---
package: rjm
name: Always-on status
slug: always-on-status
kind: pattern
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

# Always-on status

## Definition — verbatim
> "Always-on status is declared **three** ways in this tree, which is the trap:" — .claude/skills/context-optimizer/references/model-context-doctrine.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 227 | defined here | Explains the three different frontmatter conventions (`applyTo: '**'`, `alwaysApply: true`, `paths: ["**"]`) that declare always-on instruction status. |

## Consumes
Rule frontmatter declarations in `.claude/rules/`.

## Produces
Unconditional rule loading in agent sessions across all files.

## When applied
Evaluated during rule parsing and instruction generation to determine whether a rule loads unconditionally.

## Sub-concepts
none

## Part of
model-context-doctrine, always-on-corpus

## Implementation status
clean

## Design notes
The frontmatter configuration property indicating that an instruction rule loads unconditionally on every turn. In rjm, it was historically represented by three divergent keys (`applyTo: '**'`, `alwaysApply: true`, and `paths: ["**"]`), creating an audit hazard where simple greps missed loaded rules.
