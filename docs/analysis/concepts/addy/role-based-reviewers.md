---
package: addy
name: role-based reviewers
slug: role-based-reviewers
kind: role
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# role-based reviewers

## Definition — verbatim
(used, not defined)
> "In Claude Code, the role-based reviewers in `agents/` start with isolated context by design and are usable here" — skills/doubt-driven-development/SKILL.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 108 | used here | Recommends using the isolated subagents in `agents/` as specialized domain reviewers during Step 3. |

## Consumes
Adversarial review prompt with isolated ARTIFACT and CONTRACT.

## Produces
Domain-focused adversarial findings from an isolated subagent context.

## When applied
Invoked in Step 3 (DOUBT) when a specialized review persona (e.g. security, performance) matches the artifact.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
`role-based reviewers` leverage predefined subagent personas with clean context windows to inspect artifacts from distinct architectural, security, or performance perspectives, ensuring domain depth while preventing context pollution.
