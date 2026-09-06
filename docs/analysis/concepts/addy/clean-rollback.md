---
package: addy
name: clean rollback
slug: clean-rollback
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

# clean rollback

## Definition — verbatim
> "make one commit per task so any point is a clean rollback." — .gemini/commands/build.toml:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/build.toml | 34 | defined here | Mandates staging only task-specific files and making one commit per task for rollback fidelity. |

## Consumes
Task-scoped code modifications and passing test verification.

## Produces
Atomic, isolated git commits corresponding exactly to one plan task.

## When applied
At task completion when committing changes in the build loop.

## Sub-concepts
none

## Part of
build

## Implementation status
clean

## Design notes
A commit discipline pattern ensuring that every task produces an isolated commit containing only files touched by that task, enabling clean reverts at any point.
