---
package: addy
name: "Phase 0: Scope Check"
slug: phase-0-scope-check
kind: phase
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Phase 0: Scope Check

## Definition — verbatim
> "### Phase 0: Scope Check" — skills/spec-driven-development/SKILL.md:34
> "Most requests describe one capability. If this one does, skip this phase and go straight to Specify — Phase 0 exists for the exception, not the rule, and it puts no hierarchy on single-capability features." — skills/spec-driven-development/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 34 | defined here | Architectural decomposition gate executed before specification when requirements bundle multiple capabilities. |

## Consumes
Requirements that potentially bundle multiple independently testable capabilities.

## Produces
Capability map with stable module IDs and acyclic dependency order.

## When applied
When a single requirement bundles several independently testable capabilities; skipped for single-capability tasks.

## Sub-concepts
capability-map, stable-module-ids

## Part of
the-gated-workflow

## Implementation status
defects: doc-drift

## Design notes
A preliminary scope assessment gate that identifies multi-capability requirements and decomposes them into an acyclic capability map before module-level specifications are drafted.
