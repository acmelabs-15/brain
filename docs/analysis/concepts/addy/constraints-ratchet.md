---
package: addy
name: /constraints ratchet
slug: constraints-ratchet
kind: gate
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /constraints ratchet

## Definition — verbatim
> "record today's measured values as the floor that must not fall" — .gemini/commands/constraints.toml:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 31 | defines | Sub-command to record measured values as quality floor |
| commands/constraints.toml | 31 | defines | Sub-command to record measured values as quality floor |

## Consumes
Current measured metric values from installed constraint tools (e.g. test coverage, bundle size, lint/type status).

## Produces
Updated floor values in `CONSTRAINTS.md`.

## When applied
When setting or raising baseline quality thresholds that subsequent changes must not drop below.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
`/constraints ratchet` establishes an irreversible quality ratchet: once a project achieves a certain test coverage, bundle size, or lint cleanliness, that measured level becomes the new baseline. It prevents gradual codebase degradation by ensuring future commits cannot degrade quality below recorded metrics.
