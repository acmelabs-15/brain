---
package: addy
name: human gate
slug: human-gate
kind: gate
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# human gate

## Definition — verbatim
> "This is the only human gate — after approval, run autonomously." — .gemini/commands/build.toml:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 33 | defined here | Establishes plan approval as the single human gate before autonomous execution. |
| commands/build.toml | 33 | defined here | Specifies unambiguous affirmative approval requirements in Claude Code build command. |
| docs/comparison.md | 94 | used here | Compares agent-skills checkpointing by default against hands-off frameworks. |

## Consumes
Completed, decomposed implementation plan.

## Produces
Unambiguous human affirmative authorization to proceed autonomously.

## When applied
At the transition between planning and autonomous build execution.

## Sub-concepts
none

## Part of
build-auto

## Implementation status
clean

## Design notes
A deliberate approval checkpoint requiring unambiguous affirmative human consent on the complete plan before the agent enters autonomous execution mode.
