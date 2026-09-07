---
package: rjm
name: Add/add caveat
slug: add-add-caveat
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Add/add caveat

## Definition — verbatim
> "**Add/add caveat**: accept-theirs alone is wrong for an add/add conflict on an append-only evidence artifact (`.agents/sessions/*`, `.agents/qa/*`, `.agents/retrospective/*`), because it silently discards the head branch's own record. After accepting theirs, restore the head branch version under a renamed path per the Session File Rules above. The script does not do the rename half; handle it manually." — .claude/skills/merge-resolver/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/SKILL.md | 128 | defined here | Primary definition of `Add/add caveat` within SKILL.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (Add/add caveat) utilized within the rjm ecosystem to ensure consistency and systematic execution.
