---
package: rjm
name: Pre-Mortem Risk Inventory
slug: pre-mortem-risk-inventory
kind: artifact
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/pre-mortem/templates/risk-inventory.md, sha256: ac90b8b19de3d44ddec3086ac8f70f38610f00b2092ef38908bba8bba9474dfa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Mortem Risk Inventory

## Definition — verbatim
> "# Pre-Mortem Risk Inventory" — .claude/skills/pre-mortem/SKILL.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/SKILL.md | 181 | defined here | Output template defining the required structure for the generated risk inventory document. |
| .claude/skills/pre-mortem/templates/risk-inventory.md | 1 | defined here | Standalone template file defining the markdown schema for pre-mortem risk inventories. |

## Consumes
Project context, brainstormed failure causes, quantitative likelihood and impact scores, and mitigation strategies.

## Produces
A structured risk inventory document organizing prioritized risks (Critical, High, Medium, Low), Prevention/Detection/Response mitigations, action items, and review schedules.

## When applied
Generated during the final phase of a pre-mortem exercise and maintained iteratively throughout project execution.

## Sub-concepts
project-context, risk-summary, critical-risks, high-risks, medium-risks, low-risks, action-items, review-schedule

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch, orphan, internal-contradiction, doc-drift

## Design notes
Pre-Mortem Risk Inventory is the primary artifact produced by the pre-mortem skill, recording prospective failure analyses into an actionable register. By grouping risks into explicit severity tiers and mandating a Prevention/Detection/Response mitigation triad for Critical and High risks, it transforms abstract risk discussions into auditable commitments with assigned owners and review dates.
