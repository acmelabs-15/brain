---
package: rjm
name: Direct Prompting
slug: direct-prompting
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

# Direct Prompting

## Definition — verbatim
> "Avoids 30%+ accuracy drops on pattern tasks" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 16 | defined here | Defined as a reasoning technique for pattern recognition and implicit learning tasks without reasoning overhead. |

## Consumes
Task input where solution derivation relies on pattern recognition or implicit learning.

## Produces
Immediate task answer without verbalized reasoning steps.

## When applied
When solving pattern recognition, classification, or implicit learning tasks where verbalized reasoning harms performance.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Direct Prompting bypasses intermediate Chain-of-Thought reasoning steps for tasks grounded in implicit pattern learning. In contrast to arithmetic or symbolic manipulation, verbalizing rationales on implicit pattern tasks introduces spurious rationalizations that can degrade accuracy by more than 30%.
