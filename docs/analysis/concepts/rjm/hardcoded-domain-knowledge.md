---
package: rjm
name: Hardcoded Domain Knowledge
slug: hardcoded-domain-knowledge
kind: pattern
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

# Hardcoded Domain Knowledge

## Definition — verbatim
> "### 3. Hardcoded Domain Knowledge" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 31 | defined here | Warns that hardcoding exhaustive domain rules into prompts over-constrains models and becomes obsolete as intelligence increases. |

## Consumes
Domain-specific rulebooks, style guides, report schemas, and heuristic constraints.

## Produces
Lean, example-based prompting strategies that demonstrate desired outputs rather than prescribing endless rules.

## When applied
Applied when reviewing and writing domain guidelines, prompt instructions, and research agent configurations.

## Sub-concepts
none

## Part of
the-bitter-lesson-of-building-with-llms

## Implementation status
defects: missing-path

## Design notes
Hardcoded Domain Knowledge describes the common anti-pattern of embedding rigid, exhaustive rule lists into agent system prompts. In rjm's Bitter Lesson doctrine, such hardcoded heuristics over-constrain frontier models; providing representative few-shot examples enables the model to infer house style, format, and methodology at high fidelity without brittle manual rule codification.
