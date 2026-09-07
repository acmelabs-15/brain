---
package: rjm
name: Decision Workflow
slug: decision-workflow
kind: technique
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Workflow

## Definition — verbatim
> "### 3. Decision Workflow" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 213 | defined here | Sequential flowchart guiding contributors to classify decisions into governance, ADR, or split. |

## Consumes
New decision proposals, scope descriptions, and enforcement requirements.

## Produces
Routing path directing authoring to architecture/, governance/, or both.

## When applied
Followed when initiating any new architectural, operational, or process decision.

## Sub-concepts
decision-classification-matrix

## Part of
hybrid-approach

## Implementation status
defects: missing-path

## Design notes
A triage process and decision-tree methodology guiding developers and agents through structured questions regarding architectural impact, enforcement necessity, and coupling. It ensures consistent placement of decision artifacts across repository directories.
