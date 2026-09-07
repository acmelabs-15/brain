---
package: rjm
name: Tab-CoT
slug: tab-cot
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

# Tab-CoT

## Definition — verbatim
(used, not defined)

> "Tab-CoT consists of a Zero-Shot CoT prompt that makes the LLM output reasoning as a markdown table." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:910

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 910 | used here | Cited from academic literature as a Zero-Shot CoT technique producing reasoning in markdown tables. |

## Consumes
Multi-variable reasoning prompts and tabular layout instructions.

## Produces
Markdown table formatted reasoning outputs with variable tracking.

## When applied
> "This tabular design enables the LLM to improve the structure and thus the reasoning of its output." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:910

## Sub-concepts
none

## Part of
tabular-reasoning-structure

## Implementation status
clean

## Design notes
Tab-CoT is an academic Zero-Shot Chain-of-Thought technique cited in rjm that directs models to express intermediate reasoning within markdown tables. It demonstrates empirically that formatting deductions as a table improves structural rigor and reasoning accuracy for multi-variable tasks.
