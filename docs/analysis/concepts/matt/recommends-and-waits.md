---
package: matt
name: recommends and waits
slug: recommends-and-waits
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

# recommends and waits

## Definition — verbatim
> "The second thing that separates it from labelling by hand: it recommends and waits. It tells you its category and state call with reasoning, plus what it found in the codebase, and applies nothing until you direct it." — external/triage.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 27 | defined here | Defines the operational interaction pattern where triage presents findings and proposed transitions to the user before modifying tracker state. |

## Consumes
Triage verification findings and suggested category and state roles.

## Produces
An interactive recommendation awaiting explicit human approval or modification.

## When applied
Applied throughout interactive execution of `/triage`.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
A human-in-the-loop interaction pattern governing `/triage`, ensuring that an agent acts strictly as an advisory analyst that surfaces evidence and proposed state transitions without mutating public issue trackers until directed by a maintainer.
