---
package: matt
name: router skill
slug: router-skill
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# router skill

## Definition — verbatim
> "one user-invoked skill that names the others and when to reach for each, so the human has one skill to remember instead of many. It can only hint, never fire them: user-invoked skills have no description, so nothing but the human can reach them." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:22

## Also called — verbatim
`Router skills` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 22 | defined here | Single user-invoked entrypoint skill that indexes multiple underlying skills to reduce human cognitive load. |

## Consumes
A growing suite of user-invoked skills with disabled model invocation.

## Produces
A unified entrypoint skill (such as `ask-matt`) that guides users on which specialized skill to run.

## When applied
When user-invoked skills multiply past the human user's ability to remember and index them.

## Sub-concepts
none

## Part of
skill-mechanics

## Implementation status
clean

## Design notes
Solves the cognitive indexing bottleneck of user-invoked skills without incurring token context costs. Since user-invoked skills hide their descriptions from models to save tokens, a router skill gives the human a single memorizable front door that explains which underlying tool to invoke for a given task.
