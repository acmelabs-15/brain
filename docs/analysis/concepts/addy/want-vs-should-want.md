---
package: addy
name: want vs. should want
slug: want-vs-should-want
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# want vs. should want

## Definition — verbatim
> "The most dangerous answers are the ones where the user says what a thoughtful answer *sounds like* rather than what they actually want." — skills/interview-me/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 79 | defined here | Step 3 heuristic for detecting convention-signaling answers and buzzwords instead of authentic intent. |

## Consumes
User responses containing industry buzzwords, conventional best practices, or justification language.

## Produces
Targeted diagnostic probing ("If you didn't have to justify this to anyone, what would you actually want?") to uncover authentic requirements.

## When applied
Whenever users answer with conventional architectural buzzwords ("scalable", "clean") or justify solutions based on perceived duty.

## Sub-concepts
none

## Part of
- interview-me

## Implementation status
clean

## Design notes
An active listening and diagnostic technique used to discern performative industry platitudes from genuine user needs, stripping away artificial complexity to uncover the actual problem to solve.
