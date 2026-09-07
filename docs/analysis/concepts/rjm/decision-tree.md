---
package: rjm
name: decision tree
slug: decision-tree
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# decision tree

## Definition — verbatim
> "## Decision Tree" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 20 | used here | Core structural component of strategy skills routing symptoms to specific frameworks. |
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 205 | defined here | Section heading providing a structured branching guide for selecting software design patterns. |
| .claude/skills/reflect/references/decision-tree-and-examples.md | 6 | defined here | Section heading guiding reflection analysis, signal extraction, and memory updates. |

## Consumes
Concrete symptoms, codebase variation metrics, or reflection feedback signals.

## Produces
Deterministic routing paths, selected architectural patterns, or verified memory actions.

## When applied
Applied whenever an agent or engineer faces multi-branching diagnostic choices.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Decision trees provide explicit branching logic across rjm's skills, from business symptom routing to design pattern selection and memory consolidation. By replacing open-ended LLM heuristics with deterministic conditional steps, decision trees enforce consistent and repeatable analytical outcomes.
