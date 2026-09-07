---
package: matt
name: precondition
slug: precondition
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# precondition

## Definition — verbatim
> "the precondition everything else assumes rather than a step in the chain." — external/setup-matt-pocock-skills.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 70 | defined here | Defined in the dictionary section as an upfront requirement verified prior to skill execution. |

## Consumes
Current workspace and environment state (e.g., git status, tracker configuration).

## Produces
A gate verification decision permitting execution or halting with instructions to satisfy the requirement.

## When applied
Evaluated at the initial entry point of a skill prior to modifying state.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A precondition in Matt's architecture acts as an immediate guardrail at skill invocation. By validating foundational requirements (such as clean working trees, configured issue trackers, or existing domain definitions) up front, skills fail fast and prevent corrupting repository state or generating detached artifacts.
