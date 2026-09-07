---
package: rjm
name: Optional
slug: optional
kind: pattern
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Optional

## Definition — verbatim
> "| **Optional** | WHERE [feature enabled] THE SYSTEM SHALL [action] | Configurable features |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 52 | defined here | Defined in EARS patterns table as configurable features following "WHERE [feature enabled] THE SYSTEM SHALL [action]". |

## Consumes
A feature flag, configuration option, or optional system capability.

## Produces
A requirement scoped specifically to environments where the designated feature is enabled.

## When applied
> "| **Optional** | WHERE [feature enabled] THE SYSTEM SHALL [action] | Configurable features |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:52

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
An EARS requirement pattern for specifying optional or configurable capabilities, scoping requirements cleanly to contexts where the optional feature is turned on.
