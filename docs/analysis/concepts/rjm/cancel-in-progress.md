---
package: rjm
name: cancel-in-progress
slug: cancel-in-progress
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cancel-in-progress

## Definition — verbatim
(used, not defined)

> "cancel-in-progress: true" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md | 45 | used here | Configured within workflow concurrency groups to cancel older runs when newer commits are pushed. |
| .github/AGENTS.md | 391 | used here | Cited as standard setting across AI workflows to abort obsolete runs upon rapid commit events. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A GitHub Actions boolean setting within concurrency blocks that aborts in-flight workflow runs when superseded by a new event, representing a CI platform configuration property rather than an agent lifecycle concept.
