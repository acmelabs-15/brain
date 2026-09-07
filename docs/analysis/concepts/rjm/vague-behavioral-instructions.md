---
package: rjm
name: Vague Behavioral Instructions
slug: vague-behavioral-instructions
kind: pattern
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

# Vague Behavioral Instructions

## Definition — verbatim
> "Abstract descriptions instead of concrete examples." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1553

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1551 | defined here | Defined as an anti-pattern relying on abstract behavioral prose rather than concrete contrastive examples. |

## Consumes
Abstract behavioral prose and vague stylistic requirements.

## Produces
Ambiguous model responses and unpredictable formatting variability.

## When applied
> "Show exactly what you mean" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1560

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Vague Behavioral Instructions occurs when prompts attempt to shape output style using high-level qualitative words (e.g. "be concise", "avoid verbosity") rather than concrete bounds. Because models interpret abstract guidelines inconsistently, rjm replaces vague descriptions with explicit numeric caps (e.g. "under 4 lines") and contrastive pairs of correct and incorrect examples.
