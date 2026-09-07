---
package: rjm
name: Auto-CoT
slug: auto-cot
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

# Auto-CoT

## Definition — verbatim
> "Even when presented with 50% wrong demonstrations, Auto-CoT (using diversity-based clustering) performance does not degrade significantly." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:584

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 584 | used here | Cited as empirical research evidence demonstrating that diversity-based clustering preserves reasoning performance even with imperfect demonstrations. |

## Consumes
A candidate demonstration pool partitioned into distinct problem types or semantic clusters.

## Produces
A diverse demonstration set covering disparate problem categories without reinforcing failure clusters.

## When applied
When selecting few-shot demonstrations from a candidate pool to construct in-context examples.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Auto-CoT (Automatic Chain-of-Thought with diversity-based clustering) provides theoretical and empirical grounding for example selection in prompt engineering. By demonstrating that clustering and diverse sampling maintain model accuracy even when demonstration errors exist, it establishes the package principle that diversity across the problem space outperforms selection by similarity.
