---
package: addy
name: SUPPRESSIONS
slug: suppressions
kind: name-only
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SUPPRESSIONS

## Definition — verbatim
(used, not defined)
> "const SUPPRESSIONS = /@ts-ignore|@ts-nocheck|eslint-disable|biome-ignore" — skills/constraint-driven-development/references/floor-guard.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 57 | defined here | Constant regular expression matching linter and type-checker suppression comments across various language stacks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
floor-guard-mjs

## Implementation status
clean

## Design notes
This is an internal constant and regex pattern identifier within the `floor-guard.mjs` reference script rather than an independent lifecycle concept.
