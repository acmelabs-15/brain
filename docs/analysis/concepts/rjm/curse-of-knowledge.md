---
package: rjm
name: Curse of Knowledge
slug: curse-of-knowledge
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/made-to-stick.md, sha256: 5de46c0e87278655616732e8a810a2cbbc642565c3fcd3a9a3c7a43e89177cdd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Curse of Knowledge

## Definition — verbatim
> "watch for the Curse of Knowledge: you know too" — .claude/skills/business-strategy/references/made-to-stick.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/made-to-stick.md | 28 | defines | Cognitive impediment identified in communication where expert authors fail to recognize what uninitiated audiences lack. |

## Consumes
Deep domain expertise, specialized architectural knowledge, and technical familiarity.

## Produces
Premature abstraction, omitted contextual fundamentals, and alienated readers.

## When applied
Monitored continuously whenever technical architects, founders, or senior engineers write documentation or messaging for external audiences.

## Sub-concepts
none

## Part of
success-framework

## Implementation status
clean

## Design notes
Curse of Knowledge is identified in rjm as the principal enemy of effective communication. When engineers and founders acquire deep familiarity with an architecture or product, they lose the ability to recreate the novice state of mind, leading to opaque specs, alienating marketing copy, and misunderstood user onboarding.
