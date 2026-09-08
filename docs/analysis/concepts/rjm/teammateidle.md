---
package: rjm
name: TeammateIdle
slug: teammateidle
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TeammateIdle

## Definition — verbatim
(used, not defined)

> "\"TeammateIdle\"," — scripts/validation/hook_contracts.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/hook_contracts.py | 41 | applies | Listed as a recognized non-blocking hook event type in hook contract validation. |

## Consumes
Teammate idle event triggered by the harness when a teammate agent enters an idle state.

## Produces
Execution of non-blocking hooks responding to teammate idle notifications.

## When applied
Fires in multi-agent workflows when a teammate agent becomes idle.

## Sub-concepts
none

## Part of
non-blocking-hook-types

## Implementation status
defects: doc-drift

## Design notes
TeammateIdle is a non-blocking hook event type in Claude Code and agent harness workflows triggered when a subagent or teammate finishes its work or pauses waiting for input.
