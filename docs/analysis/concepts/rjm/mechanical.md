---
package: rjm
name: Mechanical
slug: mechanical
kind: pattern
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

# Mechanical

## Definition — verbatim
> "| Mechanical | One defensible answer (run tests, fix lint, sync a mirror) | Decide silently |" — .claude/skills/autoplan/SKILL.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 168 | defined here | Defines the decision classification tier for actions with one defensible answer, resolved silently. |

## Consumes
Deterministic engineering choices with a single correct resolution.

## Produces
Silent execution and an incremented count of auto-decided mechanical items in the final gate.

## When applied
When an action has only one defensible course of action (e.g., executing test suites or updating mirrors).

## Sub-concepts
none

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Mechanical represents the baseline tier in rjm's decision classification taxonomy. Decisions classified as mechanical have only one defensible answer. The agent executes them silently without asking permission, logging the total count in the Phase 4 final gate to provide auditability without inducing cognitive friction or conversational interruption.
