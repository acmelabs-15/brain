---
package: rjm
name: Decision Drivers
slug: decision-drivers
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Drivers

## Definition — verbatim
(used, not defined)

> "## Decision Drivers" — .claude/skills/adr-generator/references/adr-templates-catalog.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 54 | defines | Section heading in the MADR 4.0 template enumerating qualities, concerns, and constraints motivating the decision. |

## Consumes
Business requirements, quality attributes, system constraints, and stakeholder concerns.

## Produces
Prioritized list of decision drivers used to evaluate and compare architectural options.

## When applied
Defined in MADR 4.0 and related architectural templates during ADR generation and evaluation.

## Sub-concepts
none

## Part of
madr

## Implementation status
clean

## Design notes
A core section in the MADR 4.0 architectural decision record template that enumerates the specific forces, software qualities, concerns, and constraints driving a choice. Documenting drivers makes trade-offs explicit and prevents decisions from being driven by subjective or implicit preferences.
