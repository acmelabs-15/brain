---
package: addy
name: /build auto
slug: build-auto
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /build auto

## Definition — verbatim
> "- `/build auto` — generate the plan if needed, get a single approval, then implement every task without stopping between them." — .gemini/commands/build.toml:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 9 | defined here | Defines the autonomous multi-task execution mode of the build command. |
| README.md | 38 | defined here | Documents /build auto as the hands-off autonomous execution variant. |
| skills/constraint-driven-development/SKILL.md | 27 | used here | Warns of risks when agents run autonomously under /build auto without written constraints. |

## Consumes
Full task breakdown and explicit affirmative approval at the initial human gate.

## Produces
Sequential automated implementation of all plan tasks with individual task commits.

## When applied
When executing an entire implementation plan without human stepping between tasks.

## Sub-concepts
autonomous-mode, human-gate, clean-rollback-guarantee

## Part of
build

## Implementation status
clean

## Design notes
An autonomous command execution mode that runs every planned task through the test-driven loop without pausing for user intervention between tasks, gated by an upfront human checkpoint.
