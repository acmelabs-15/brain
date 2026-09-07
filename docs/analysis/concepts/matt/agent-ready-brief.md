---
package: matt
name: agent-ready brief
slug: agent-ready-brief
kind: artifact
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

# agent-ready brief

## Definition — verbatim
> "leaving behind either an agent-ready brief, a specific question for the reporter, or a closed issue with a recorded reason." — external/triage.md:25

## Also called — verbatim
`agent brief` — external/triage.md:44

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 25 | defined here | Defines the agent-ready brief as the primary deliverable comment posted when an issue transitions to ready-for-agent. |

## Consumes
Verified reproduction of a bug, confirmed feature requirement, codebase inspection, and domain types/contracts.

## Produces
A durable structured comment posted to the issue tracker specifying types, signatures, and behavioral expectations.

## When applied
Applied when an inbound tracker issue is transitioned to `ready-for-agent` during `/triage`.

## Sub-concepts
behavioural contracts, durable

## Part of
triage, ready-for-agent

## Implementation status
clean

## Design notes
A structured, durable specification comment attached to an issue when it transitions to `ready-for-agent`, establishing an immutable behavioral contract that future autonomous agents execute against even if the surrounding codebase evolves.
