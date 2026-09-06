---
package: addy
name: capability map
slug: capability-map
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: commands/spec.toml, sha256: ef26c247995ff2cdacf8e0474e3b7433b0a851c258ba33a626da6525f842af8d}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# capability map

## Definition — verbatim
> "**Propose a capability map before writing any spec.** Small and reviewable — a module table plus a build order, not a project plan:" — skills/spec-driven-development/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/spec.toml | 14 | defines | Prescribed as initial architectural proposal when requests bundle multiple capabilities. |
| commands/spec.toml | 14 | defines | Mandated in /spec prompt to define module IDs, dependency direction, and build order. |
| evals/cases/spec-driven-development.json | 59 | applies | Tested in evaluation cases to ensure capability decomposition occurs before specification. |
| skills/spec-driven-development/SKILL.md | 44 | defines | Establishes the capability map structure, module table schema, and acyclic build order rules. |

## Consumes
Complex user requests spanning multiple independent functional domains or subsystems

## Produces
A structured document defining stable module IDs, module responsibilities, dependencies, and an acyclic build order

## When applied
Produced during Phase 0: Scope Check when a single requirement bundles distinct capabilities that can be verified separately.

## Sub-concepts
none

## Part of
phase-0, spec-driven-development

## Implementation status
clean

## Design notes
The capability map acts as a high-level architectural decomposition tool in addy. By establishing stable module IDs and one-way dependency directions prior to drafting module specifications, it prevents cyclic couplings and allows complex multi-part projects to be executed iteratively and cleanly.
