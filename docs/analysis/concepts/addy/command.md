---
package: addy
name: Command
slug: command
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: hooks/hooks.json, sha256: 870c97c9cb6f526b66cc1d684e261ad2f7b45066a41e56ca5cb3fa6784df8888}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Command

## Definition — verbatim
> "A user-facing entry point" — docs/agents.md:20

## Also called — verbatim
> "slash command" — docs/agents.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 20 | defines | Defines command as the user-facing entry point that composes personas and skills |
| hooks/hooks.json | 7 | applies | Specifies the execution type for the SessionStart hook script |

## Consumes
User invocation (e.g. slash command in terminal or chat) and optional arguments.

## Produces
Orchestrated invocation of corresponding skills and agent personas.

## When applied
When a developer initiates a lifecycle phase or administrative action.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean in docs/agents.md; defects: unfailable-gate, missing-path in hooks/hooks.json

## Design notes
Commands serve as the 'when' layer in addy's three-tier model, providing simple, human-memorable slash command entry points that bind user intent to underlying skills and persona orchestrations.
