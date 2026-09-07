---
package: rjm
name: High Freedom
slug: high-freedom
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# High Freedom

## Definition — verbatim
> "### High Freedom (Text-Based Instructions)" — .claude/skills/skillforge/references/degrees-of-freedom.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/degrees-of-freedom.md | 13 | defined here | Defines the high freedom level using prose descriptions and heuristics for context-dependent decisions. |

## Consumes
Context-dependent problem statements, heuristics, and domain goals.

## Produces
Flexible, prose-guided agent instructions allowing multiple valid execution paths.

## When applied
Applied in analysis phases, decision-making, recommendations, and explanations where creative judgment adds value.

## Sub-concepts
none

## Part of
degrees-of-freedom

## Implementation status
clean

## Design notes
High Freedom provides broad latitude through natural language descriptions and heuristics rather than rigid rules. It enables agents to handle ambiguous, context-dependent analysis without being artificially constrained by overly rigid workflows.
