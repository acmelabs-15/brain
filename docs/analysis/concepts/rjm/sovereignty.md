---
package: rjm
name: Sovereignty
slug: sovereignty
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sovereignty

## Definition — verbatim
> "| Sovereignty | Architecture, new ADRs, breaking changes, security posture, anything external or irreversible | Stop and ask. Never auto-decide |" — .claude/skills/autoplan/SKILL.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 170 | defined here | Defines the paramount decision class covering architecture, ADRs, breaking changes, and security requiring explicit user authorization. |

## Consumes
Architectural proposals, new ADR requirements, public API breaks, security modifications, or irreversible external actions.

## Produces
Mandatory execution stop presenting structured options and trade-offs to the human user.

## When applied
Whenever an action crosses into irreversible, architectural, or security-sensitive boundaries.

## Sub-concepts
confusion-protocol

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Sovereignty is the foundational autonomy boundary in rjm. Encompassing system architecture, new ADRs, breaking changes, and security posture, Sovereignty strictly forbids autonomous decision-making. When an agent reaches a sovereignty boundary, it must stop immediately, formulate options with trade-offs via the Confusion Protocol, and await explicit human instruction.
