---
package: rjm
name: EdgeX
slug: edgex
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

# EdgeX

## Definition — verbatim
> "| **EdgeX** | Medium | IoT/edge computing projects | Structured for distributed systems |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 16 | defined here | Compared in template catalog as an ADR format tailored for IoT, edge computing, and distributed architectures. |

## Consumes
IoT device constraints, hardware limitations, and distributed networking requirements.

## Produces
An edge-computing-specific architecture decision record.

## When applied
Selected when documenting technical decisions for edge computing, IoT deployments, or distributed edge nodes.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
An ADR template format cataloged in rjm adapted from the open-source EdgeX Foundry framework. It structures decision records specifically around the physical, operational, and network constraints unique to edge computing, distributed microservices, and IoT device deployments.
