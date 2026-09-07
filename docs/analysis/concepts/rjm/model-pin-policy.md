---
package: rjm
name: model-pin policy
slug: model-pin-policy
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# model-pin policy

## Definition — verbatim
(used, not defined)

> "ADR-080 (accepted, not yet implemented) sets the model-pin policy: an unpinned unit inherits the harness model, and that absence needs no justification." — .agents/governance/agent-design-principles.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 28 | used here | Describes ADR-080 governance rules where units inherit harness defaults unless an empirical sweep justifies a pin. |

## Consumes
Model benchmark evaluations, cost-performance sweeps, and ADR submissions.

## Produces
Governed model assignments across skills, commands, and agents.

## When applied
Applied when authoring or reviewing agent and skill definitions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
The governance policy defined in ADR-080 establishing that agent units default to inheriting harness models without justification, permitting explicit versioned pins only when backed by empirical benchmark sweep data.
