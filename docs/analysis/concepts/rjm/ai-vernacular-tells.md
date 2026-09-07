---
package: rjm
name: AI-vernacular tells
slug: ai-vernacular-tells
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI-vernacular tells

## Definition — verbatim
> "Run this on prose you are about to emit. It catches AI-vernacular tells before" — .claude/skills/prose-self-check/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 15 | defined here | Introduced as the set of linguistic, structural, and semantic writing patterns caught by prose-self-check. |

## Consumes
Agent-authored prose before publication or emission.

## Produces
Identification and elimination of telltale stylistic patterns that degrade reader confidence.

## When applied
Evaluated during prose self-checks before emitting any documentation or explanatory artifact.

## Sub-concepts
contrast-framing, trailing-offer, signposting, flat-rhythm

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
Stylistic and structural anti-patterns characteristic of LLM generation (such as contrast framing, flat sentence rhythm, and vacuous filler) that destroy human reader trust.
