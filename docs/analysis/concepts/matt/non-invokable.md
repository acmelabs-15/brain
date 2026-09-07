---
package: matt
name: non-invokable
slug: non-invokable
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# non-invokable

## Definition — verbatim
> "It is deliberately marked non-invokable, so no other skill can fire it for you." — external/setup-matt-pocock-skills.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 29 | defined here | Contrasts auto-invoked skills (domain-modeling, diagnosing-bugs, wayfinder) with user-invoked slash commands. |

## Consumes
Situational matching in the agent harness context.

## Produces
Automatic invocation of relevant skills without user command input.

## When applied
When agent context matches the skill's triggers.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Non-invokable skills represent a core invocation pattern in Matt's design. Unlike command-style skills triggered manually by user slash commands, non-invokable skills function as behavioral instructions loaded into the agent's context, allowing the agent to spontaneously activate domain modeling, bug diagnosis, or architectural exploration when relevant conditions occur.
