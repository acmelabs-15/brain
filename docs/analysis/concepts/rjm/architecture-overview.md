---
package: rjm
name: Architecture Overview
slug: architecture-overview
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architecture Overview

## Definition — verbatim
(used, not defined)

> "## 2. Architecture Overview" — .claude/skills/threat-modeling/templates/threat-model-template.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 39 | used here | Section heading organizing Data Flow Diagrams, Components, Data Flows, Trust Boundaries, and Assets. |

## Consumes
System architecture diagrams, service boundaries, component rosters, and data movement specifications.

## Produces
Comprehensive architectural decomposition section forming the basis for STRIDE threat identification.

## When applied
Applied during Phase 1 (Scope and Decompose) to document system structure prior to threat analysis.

## Sub-concepts
data-flows, trust-boundaries

## Part of
threat-model-template

## Implementation status
clean

## Design notes
`Architecture Overview` is the structural section of a threat model in `rjm` that captures system decomposition—including DFDs, components, data flows, and trust boundaries—providing the necessary spatial model for STRIDE evaluations.
