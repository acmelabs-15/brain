---
package: addy
name: confirmed statement of intent
slug: confirmed-statement-of-intent
kind: artifact
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

# confirmed statement of intent

## Definition — verbatim
> "The output of this skill is a **confirmed statement of intent**: the restate from Step 4, with an explicit yes from Step 5." — skills/interview-me/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 136 | defined here | Core deliverable of the interview skill summarizing outcome, user, constraints, and non-goals with explicit user confirmation. |

## Consumes
Completed interview dialogue and explicit affirmative confirmation ("yes") from the user.

## Produces
A validated intent record (optionally saved to `docs/intent/[topic].md`).

## When applied
At the conclusion of the interview process before handoff to downstream specification or planning skills.

## Sub-concepts
- out-of-scope

## Part of
- interview-me

## Implementation status
clean

## Design notes
The tangible output of requirements elicitation, summarizing the user's authentic goals, constraints, and explicit non-goals to serve as the immutable input for specifications and architectural plans.
