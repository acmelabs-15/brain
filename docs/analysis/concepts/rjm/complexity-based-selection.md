---
package: rjm
name: Complexity-Based Selection
slug: complexity-based-selection
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

# Complexity-Based Selection

## Definition — verbatim
> "Teaching thorough reasoning" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:25

## Also called — verbatim
> "### Complexity-Based Example Selection" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:551

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 25 | defined here | Defined as an example selection strategy teaching thorough reasoning by prioritizing multi-step examples. |

## Consumes
Pool of candidate few-shot demonstration examples.

## Produces
Curated set of few-shot examples with high reasoning step counts.

## When applied
When designing few-shot prompts for complex reasoning tasks where brief demonstrations risk teaching shortcuts.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Complexity-Based Selection prioritizes few-shot demonstrations that feature greater reasoning depth and step counts rather than simpler ones. Demonstrating thorough derivations teaches the model to engage in complete intermediate reasoning, preventing premature conclusions on difficult problems.
