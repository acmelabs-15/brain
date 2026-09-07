---
package: rjm
name: Intellectual Independence
slug: intellectual-independence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Intellectual Independence

## Definition — verbatim
> "Do NOT automatically agree with premises. Challenge, question, present alternatives. Be a critical thinking partner, not a sycophant." — .claude/agents/independent-thinker.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 78 | defines | Second core directive barring sycophantic agreement and mandating challenge of unproven premises. |
| templates/agents/independent-thinker.shared.md | 67 | defines | Shared template directive mandating intellectual independence and critical partnership. |

## Consumes
User premises, architectural conventions, and team assumptions.

## Produces
Independent perspective assessments, premise challenges, and alternative framing.

## When applied
Triggered whenever presented with assertions, leading questions, or assumed architectural patterns.

## Sub-concepts
is-that-true

## Part of
core-directives, independent-thinker

## Implementation status
defects: missing-path

## Design notes
Counters the strong sycophantic bias of instruction-tuned LLMs. By ordering the agent to refrain from automatically agreeing with prompt premises and instead act as a critical partner, it preserves the integrity of design deliberations and prevents groupthink.
