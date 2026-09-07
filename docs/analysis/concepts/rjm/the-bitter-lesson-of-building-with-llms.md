---
package: rjm
name: The Bitter Lesson of Building with LLMs
slug: the-bitter-lesson-of-building-with-llms
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Bitter Lesson of Building with LLMs

## Definition — verbatim
> "# The Bitter Lesson of Building with LLMs" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 7 | defined here | Reference document title establishing the principle that simpler architectures outperform complex custom scaffolding as foundation models advance. |

## Consumes
System design proposals, prompt chains, multi-agent architectures, and build-vs-buy evaluations.

## Produces
Strategic guidance directing engineers to reduce prompt scaffolding, simplify retrieval, avoid hardcoded domain rules, and build step-change-ready architectures.

## When applied
Applied during specification and architectural design reviews when creating LLM-based systems or multi-agent workflows.

## Sub-concepts
prompt-scaffolding, retrieval-architecture, hardcoded-domain-knowledge, evaluation-strategy, mythos-ready-system-architecture

## Part of
programming-advisor

## Implementation status
defects: missing-path

## Design notes
The Bitter Lesson of Building with LLMs translates Rich Sutton's computational lesson into modern agent architecture: as model intelligence increases in step changes, custom prompt scaffolding, brittle procedural chains, and hardcoded domain heuristics rapidly turn into technical debt. The document guides teams to specify outcomes and durable constraints rather than over-engineering procedural workflows.
