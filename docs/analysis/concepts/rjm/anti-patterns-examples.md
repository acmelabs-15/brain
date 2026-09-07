---
package: rjm
name: Anti-Patterns > Examples
slug: anti-patterns-examples
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Patterns > Examples

## Definition — verbatim
> "## Key Insight: Anti-Patterns > Examples" — .claude/skills/context-optimizer/references/vibe-engineering.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 49 | defined here | Core pedagogical principle stating that illustrating what NOT to do teaches model boundaries faster than positive examples. |

## Consumes
Common failure modes, negative behavioral examples, and agent boundary definitions.

## Produces
Negative constraint guidelines and boundary-focused instruction framing.

## When applied
Applied when designing prompt instructions, skills, and agent guidance.

## Sub-concepts
none

## Part of
vibe-engineering

## Implementation status
defects: missing-path

## Design notes
A prompt engineering and skill design heuristic asserting that showing what NOT to do (negative examples and failure modes) establishes clear behavioral boundaries for LLMs much faster and more reliably than positive examples alone.
