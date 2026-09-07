---
package: matt
name: manual procedure
slug: manual-procedure
kind: pattern
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# manual procedure

## Definition — verbatim
> "walks a human, step by step, through a manual procedure: wiring up third-party services, running a one-off migration, moving a project from state A to state B." — external/wizard.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 25 | defines | Identifies the target operational domain of the wizard skill for multi-stage human workflows. |

## Consumes
A setup, configuration, migration, or provisioning task requiring human access, dashboard interactions, or secret entry.

## Produces
An interactive bash script that coordinates each step of the procedure on the user's local machine.

## When applied
When an AI coding agent encounters setup or infrastructure tasks that it cannot execute autonomously.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A manual procedure defines the boundary where autonomous agent capability halts and human intervention is required (e.g., OAuth approvals, cloud console clicks, credit card setups, production database migrations). Matt's design codifies these handoffs into structured, executable scripts rather than chat instructions.
