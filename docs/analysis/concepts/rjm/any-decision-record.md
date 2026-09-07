---
package: rjm
name: Any Decision Record
slug: any-decision-record
kind: pattern
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

# Any Decision Record

## Definition — verbatim
> "The "Any Decision Record" movement has expanded ADR usage from strictly architectural decisions to include design, process, tool selection, and governance decisions." — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 24 | used here | Industry movement discussed as context for expanding ADR formats to operational and process choices. |

## Consumes
Technical, organizational, and operational decisions across engineering teams.

## Produces
Unified decision record files across architectural and non-architectural subjects.

## When applied
Evaluated when deciding whether to capture non-architectural decisions within an architecture repository.

## Sub-concepts
madr

## Part of
decision-classification-matrix

## Implementation status
defects: missing-path

## Design notes
A documentation pattern that generalizes Architectural Decision Records to capture any significant engineering, operational, or managerial choice. In rjm, ADR-022 evaluates this pattern and deliberately chooses a hybrid split instead, keeping technical system architecture distinct from operational governance policies to avoid diluting architectural clarity.
