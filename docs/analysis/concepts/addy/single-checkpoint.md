---
package: addy
name: Single checkpoint
slug: single-checkpoint
kind: gate
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Single checkpoint

## Definition — verbatim
> "Single checkpoint. Present the full plan and wait for an unambiguous affirmative" — commands/build.toml:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/build.toml | 33 | defines | Step 4 of /build auto establishing the single human approval gate before switching into autonomous execution. |

## Consumes
Full task implementation breakdown (tasks/plan.md).

## Produces
Explicit human approval and a preparatory git commit of the plan before task execution.

## When applied
Executed once after plan generation and immediately prior to running autonomous build tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Single checkpoint defines the sole human-in-the-loop gate in autonomous builds, requiring unambiguous approval of the overall plan while eliminating step-by-step human prompts between individual tasks.
