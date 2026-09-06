---
package: addy
name: Phase 0
slug: phase-0
kind: phase
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Phase 0

## Definition — verbatim
> "If the request bundles several independently testable capabilities, first propose a capability map (module ids, dependency direction, build order) per the skill's Phase 0 and get it approved, then spec each module in dependency order." — commands/spec.toml:14

## Also called — verbatim
`Scope Check` — skills/spec-driven-development/SKILL.md:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/spec.toml | 14 | applies | Instructs the agent to decompose bundled capabilities into a capability map before specifying. |
| commands/spec.toml | 14 | applies | Governs multi-capability decomposition per the skill's Phase 0 prior to module specification. |

## Consumes
User requests bundling multiple independently testable features or architectural capabilities

## Produces
An approved capability map containing module IDs, responsibilities, dependencies, and build order

## When applied
Activates when an initiative describes more than one capability that could ship or be tested separately; single-capability requests skip this phase.

## Sub-concepts
capability-map

## Part of
spec-driven-development

## Implementation status
clean

## Design notes
Phase 0 provides a decomposition gate at the beginning of the definition lifecycle. Rather than forcing large initiatives into a single monolithic specification, Phase 0 creates a module dependency map so each capability can be specified, planned, and implemented independently.
