---
package: addy
name: clean baseline
slug: clean-baseline
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

# clean baseline

## Definition — verbatim
> "Establish a clean baseline. Run `git status --porcelain`." — commands/build.toml:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/build.toml | 31 | defines | Step 2 of /build auto requiring verification of a clean git working tree to prevent autonomous commits from absorbing unrelated local edits. |

## Consumes
Clean git status output with no uncommitted changes outside expected planning documents.

## Produces
Confirmation of an isolated baseline supporting discrete per-task rollback points.

## When applied
Required before executing autonomous multi-task builds via /build auto.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Clean baseline acts as a pre-execution safety gate for autonomous implementation loops, guaranteeing that per-task commits can be cleanly reverted without destroying uncommitted developer work.
