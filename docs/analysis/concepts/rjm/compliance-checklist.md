---
package: rjm
name: Compliance Checklist
slug: compliance-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
  - {path: docs/third-party-license-attribution.md, sha256: 273f0ae5e3a041689084c309b0b3d321d0185b87ab33d74343a115816d56e321}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Compliance Checklist

## Definition — verbatim
> "## Compliance Checklist" — .agents/governance/SKILL-PHASE-GATES.md:205

## Also called — verbatim
`Compliance Checklist` — docs/third-party-license-attribution.md:118

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 205 | defined here | Checklist outlining required steps when implementing phase gates in skills. |
| docs/third-party-license-attribution.md | 118 | defined here | Pre-release verification checklist for open-source license attribution and dependency hygiene. |

## Consumes
Skill specifications or release candidate build artifacts.

## Produces
Verified adherence to phase gate governance or third-party license requirements.

## When applied
Run during skill authoring/review and prior to preparing software release distributions.

## Sub-concepts
none

## Part of
skill-phase-gates, third-party-license-attribution

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Procedural checklists verifying compliance against repository governance requirements. In skill development, it verifies transition point identification and gate definition; in release workflows, it confirms third-party attribution and license compatibility.
