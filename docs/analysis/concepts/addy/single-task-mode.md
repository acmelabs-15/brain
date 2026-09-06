---
package: addy
name: single-task mode
slug: single-task-mode
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# single-task mode

## Definition — verbatim
> "anything else (or empty) is the default single-task mode." — .gemini/commands/build.toml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 11 | defined here | Contrasts default single-task execution against autonomous mode. |

## Consumes
Next pending task from the implementation plan.

## Produces
A single completed task slice with tests and git commit before stopping.

## When applied
Default invocation of /build without arguments.

## Sub-concepts
none

## Part of
build

## Implementation status
clean

## Design notes
The conservative default execution pattern in Addy's build loop, ensuring each task slice is implemented, tested, and inspected individually before proceeding.
