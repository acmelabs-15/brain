---
package: rjm
name: shallow-clone hazard
slug: shallow-clone-hazard
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shallow-clone hazard

## Definition — verbatim
(used, not defined)

> "### The `git rev-list --count` shallow-clone hazard" — .agents/architecture/ADR-091-post-merge-version-bot.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 110 | defines | Identifies pitfall where depth-truncated git checkouts in CI produce false commit counts when computing dynamic version numbers. |

## Consumes
CI workflows using shallow git fetches (`--depth=1`).

## Produces
Incorrect version numbers (e.g. version 1 instead of repository commit count 5444).

## When applied
Considered during the design of automated or derived build versioning schemes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Architectural hazard documented in ADR-091 where deriving version numbers from `git rev-list --count HEAD` fails in CI environments that perform shallow clones, leading to severe discrepancies between local and CI-built version strings.
