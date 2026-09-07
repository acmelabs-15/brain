---
package: rjm
name: Levels of Separation
slug: levels-of-separation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Levels of Separation

## Definition — verbatim
> "## Levels of Separation" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 22 | defined here | Section heading structuring architectural decomposition into method, class, layer, and service granularities. |

## Consumes
Overall system topology, code components, modules, interfaces, and network architecture.

## Produces
A multi-tier separation hierarchy providing clear decomposition guidelines across procedural, object-oriented, layered, and distributed boundaries.

## When applied
Applied during macro- and micro-architectural design to determine the appropriate granularity for isolating distinct system concerns.

## Sub-concepts
method-level, class-level, layer-level, service-level

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
Levels of Separation provides a coherent hierarchical taxonomy for applying separation of concerns in rjm. By categorizing separation into four distinct granularities (Method, Class, Layer, Service), it gives engineers and agents actionable criteria for deciding where a boundary belongs, preventing premature distributed complexity while stopping code clutter at the method level.
