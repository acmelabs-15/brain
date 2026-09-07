---
package: rjm
name: Thinking Tags
slug: thinking-tags
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Thinking Tags

## Definition — verbatim
> "Force systematic analysis before action by requiring the model to wrap reasoning in specific XML tags." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:821

## Also called — verbatim
`Basic Thinking Tags` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:819

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 819 | defined here | Defined as an XML structure pattern forcing systematic analysis before action by wrapping reasoning in specific tags. |

## Consumes
Task inputs and pre-action analysis directives.

## Produces
Tagged reasoning blocks (e.g. `<commit_analysis>`) preceding final action or output.

## When applied
> "Without tags, models often skip steps or provide incomplete analysis." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:837

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Thinking Tags leverage domain-specific XML tags to enforce explicit cognitive deliberation before an agent performs tool calls or produces final text. By wrapping intermediate steps in semantic tags, they compel the model to complete required analytical sub-points rather than jumping directly to execution.
