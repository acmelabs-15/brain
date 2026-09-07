---
package: rjm
name: Decision Classification Matrix
slug: decision-classification-matrix
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

# Decision Classification Matrix

## Definition — verbatim
> "### 1. Decision Classification Matrix" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 71 | defined here | Evaluation matrix mapping decision characteristics to ADR, Governance, or Split placement. |

## Consumes
Decision characteristics: primary concern, architectural impact, enforcement needs, change frequency, audience, and reversibility.

## Produces
Placement determination classifying a decision as ADR-only, Governance-only, or Split.

## When applied
Consulted during decision triage before authoring new ADRs or governance documents.

## Sub-concepts
adr-only, governance-only, split

## Part of
decision-workflow

## Implementation status
defects: missing-path

## Design notes
A multi-criteria evaluation matrix that classifies decisions along six dimensions: primary concern, architectural impact, enforcement requirement, change frequency, target audience, and reversibility. It provides objective criteria for determining where a decision should be authored and how its compliance should be monitored.
