---
package: addy
name: Lifecycle Mapping (Implicit Commands)
slug: lifecycle-mapping-implicit-commands
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Lifecycle Mapping (Implicit Commands)

## Definition — verbatim
> "OpenCode does not support slash commands like `/spec` or `/plan`." — AGENTS.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 34 | defines | Establishes the implicit lifecycle stages (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) and their mapped skills in environments without slash command support |

## Consumes
User task state and the six-stage product lifecycle model.

## Produces
Sequential execution of corresponding lifecycle skills (e.g. `spec-driven-development`, `planning-and-task-breakdown`).

## When applied
Applied in platforms like OpenCode that lack native slash command routing.

## Sub-concepts
define, plan, verify, review, ship

## Part of
skill-driven-execution-model

## Implementation status
clean

## Design notes
Provides an implicit mapping from abstract development phases to concrete skill directories, ensuring the six-phase lifecycle model functions identically in CLI tools that lack command hooks.
