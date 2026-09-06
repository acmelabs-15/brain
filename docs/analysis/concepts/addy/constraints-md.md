---
package: addy
name: CONSTRAINTS.md
slug: constraints-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONSTRAINTS.md

## Definition — verbatim
> "at the repo root with a Floor section, enforced numbers, measured-only metrics with today's values, and an exceptions table with owners and expiry dates." — .gemini/commands/constraints.toml:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 1 | defined here | Command description defining CONSTRAINTS.md as the repository quality bar record. |
| commands/constraints.toml | 1 | defined here | Claude Code command description identifying CONSTRAINTS.md as the project standard. |
| evals/cases/constraint-driven-development.json | 74 | used here | Eval case asserting command verdicts are recorded in CONSTRAINTS.md. |
| skills/constraint-driven-development/references/floor-guard.md | 3 | used here | Describes mapping numbered dimensions in CONSTRAINTS.md to tools. |
| skills/constraint-driven-development/SKILL.md | 93 | defined here | Step 3 heading for writing the CONSTRAINTS.md quality contract. |

## Consumes
Quality interview responses, baseline metric measurements, and tool configurations.

## Produces
Repo-root quality contract defining enforced numbers, floor checks, and exception expiries.

## When applied
Created during constraint definition; enforced across all development and review steps.

## Sub-concepts
floor-section, exceptions-table, check-fast, check-task, check-full

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
A persistent repository quality contract that captures thresholds and verification commands in an auditable markdown file, preventing agents from lowering standards across sessions.
