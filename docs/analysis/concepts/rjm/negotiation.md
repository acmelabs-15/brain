---
package: rjm
name: Negotiation
slug: negotiation
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Negotiation

## Definition — verbatim
> "| **negotiation** | Offer analysis and counter-proposals | Value-gap analysis with RADAR protocol | both |" — README.md:418

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/influence.md | 55 | used here | Contrasted with influence as requiring slowed decision timelines rather than urgency. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 20 | used here | Cited as an example of a token that exists as both a skill and an agent template. |
| docs/agent-catalog.md | 34 | used here | Cataloged as a support agent specialized in offer analysis, counter-proposals, and deal intelligence. |
| README.md | 418 | defined here \| used here | Introduced in agent catalog table for offer analysis and RADAR protocol counter-proposals. |

## Consumes
Contractual proposals, offer sheets, compensation packages, or vendor terms.

## Produces
Counter-proposals, value-gap analyses, and tactical bargaining recommendations using the RADAR protocol.

## When applied
"Use when reviewing any offer (real estate, compensation, vendor contract, resource allocation) or when you need to detect information asymmetry, anchor manipulation, or value gaps." — docs/agent-catalog.md:34

## Sub-concepts
radar-protocol

## Part of
agent-catalog

## Implementation status
defects: missing-path, doc-drift

## Design notes
Negotiation operates as a specialized agent role and behavioral methodology dedicated to analyzing proposals, countering tactical anchoring, and maximizing deal value. In rjm, it stands in deliberate contrast to rapid persuasion techniques by advocating deliberative pacing and rigorous term examination.
