---
package: rjm
name: Low Risks
slug: low-risks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/templates/risk-inventory.md, sha256: ac90b8b19de3d44ddec3086ac8f70f38610f00b2092ef38908bba8bba9474dfa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Low Risks

## Definition — verbatim
(used, not defined)

> "## Low Risks (Score 1-3)" — .claude/skills/pre-mortem/templates/risk-inventory.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/templates/risk-inventory.md | 92 | defined here | Section heading in the risk inventory template for low-priority risks scoring 1 to 3 tracked in a minimal table. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Low Risks is a section heading in the risk inventory template tracking low-impact failure modes rather than an independent lifecycle concept.
