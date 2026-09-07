---
package: matt
name: exploration subagent
slug: exploration-subagent
kind: role
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exploration subagent

## Definition — verbatim
> "2. (optional) Use an **exploration subagent** to conduct any exploration required by the tickets - relevant codebase files or external documentation." — skills/in-progress/implement-spec/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 21 | defined here | Optional preliminary subagent role executing codebase or external documentation exploration. |

## Consumes
Tickets and specification requirements demanding codebase or external documentation exploration.

## Produces
External markdown notes accessible to subsequent implementer subagents.

## When applied
Invoked during step 2 of implement-spec when tickets require exploration before coding begins.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
A specialized pre-implementation subagent role in implement-spec that separates exploration from code authoring. By delegating repository research and saving markdown notes outside the repository, it keeps subsequent implementer subagents focused purely on code changes without burning context on investigation.
