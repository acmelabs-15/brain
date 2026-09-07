---
package: matt
name: request surface
slug: request-surface
kind: pattern
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# request surface

## Definition — verbatim
> "The tracker config also decides whether external pull requests count as a request surface, and who counts as external." — external/triage.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 33 | defined here | Defines the operational boundary of issue tracker input streams, including whether external PRs are triaged alongside issues. |

## Consumes
Tracker configuration in `docs/agents/issue-tracker.md`.

## Produces
An inclusion filter determining which external contributions enter the triage state machine.

## When applied
Applied during discovery when `/triage` scans for inbound contributions.

## Sub-concepts
external-PR

## Part of
triage, issue tracker

## Implementation status
defects: script-bug

## Design notes
The set of inbound channels (issues, bug reports, and external pull requests) designated as valid entry points for work arriving from outside contributors into the maintainer's triage funnel.
