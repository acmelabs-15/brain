---
package: rjm
name: core vs context analysis
slug: core-vs-context-analysis
kind: technique
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# core vs context analysis

## Definition — verbatim
> "- `core vs context analysis for {capability}`" — .claude/skills/buy-vs-build-framework/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 21 | used here | Documented invocation trigger activating strategic classification of capabilities into core vs. context. |

## Consumes
Business capability requirements, competitive landscape analysis, and product differentiation goals.

## Produces
Definitive classification of capabilities into Core (differentiating) or Context (commodity/supportive).

## When applied
Executed in Phase 1 of the buy-vs-build framework to establish initial build vs. buy boundaries.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
core vs context analysis is a strategic classification technique that distinguishes between capabilities that create proprietary competitive advantage (Core) and those that are essential but non-differentiating (Context). It prevents organizations from wasting development capacity rebuilding commodity infrastructure.
