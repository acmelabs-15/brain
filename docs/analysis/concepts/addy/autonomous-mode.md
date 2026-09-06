---
package: addy
name: autonomous mode
slug: autonomous-mode
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# autonomous mode

## Definition — verbatim
> "Treat `auto` (canonical) or `all` as autonomous mode; anything else (or empty) is the default single-task mode." — .gemini/commands/build.toml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 11 | defined here | Defines autonomous mode as removing human stepping while retaining the full test-driven loop. |
| commands/build.toml | 11 | defined here | Claude Code command definition specifying autonomous mode arguments and loop behavior. |

## Consumes
Complete plan and single human gate approval.

## Produces
End-to-end task completion across the full plan without mid-run pauses.

## When applied
Invoked via /build auto or /build all.

## Sub-concepts
human-gate, clean-rollback-guarantee

## Part of
build

## Implementation status
clean

## Design notes
An operational execution pattern that streamlines multi-task implementation by automating transitions between tasks while maintaining strict test-driven discipline and per-task commits.
