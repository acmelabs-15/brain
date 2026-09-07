---
package: rjm
name: ADR Template
slug: adr-template
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Template

## Definition — verbatim
> "# ADR Template" — .claude/skills/adr-generator/references/adr-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 1 | defined here | Title and structural specification of the project's canonical ADR template. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 311 | defined here | Reference template for documenting build versus buy capability choices. |
| docs/agent-governance.md | 11 | used here | Listed as a primary governance artifact for documenting agent architecture decisions. |
| templates/agents/architect.shared.md | 247 | defined here | Specified by the Architect agent persona for MADR 4.0 decision capture. |

## Consumes
Architectural context, options considered, trade-offs, and downstream consequences.

## Produces
A standardized markdown decision record conforming to project standards.

## When applied
Applied whenever an engineer or agent drafts an architectural decision record.

## Sub-concepts
context, decision, what-currently-exists, why-change-now, consequences, related-decisions

## Part of
none

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
The core document template in rjm for capturing technical decisions. It establishes standard sections—including context, decision, prior art investigation, alternatives considered, consequences, and related decisions—ensuring uniform rigor and facilitating automated lifecycle tracking and multi-agent review.
