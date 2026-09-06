---
package: addy
name: GEMINI.md
slug: gemini-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# GEMINI.md

## Definition — verbatim
(used, not defined)
> "1. Read GEMINI.md and study project conventions" — .gemini/commands/code-simplify.toml:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/code-simplify.toml | 8 | used here | Instructs agent to read GEMINI.md to study project conventions before simplifying code. |
| .gemini/commands/constraints.toml | 24 | used here | Directs agent to add a pointer to CONSTRAINTS.md inside GEMINI.md. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A project configuration and instructions file path targeted by Gemini CLI commands, rather than a development lifecycle concept.
