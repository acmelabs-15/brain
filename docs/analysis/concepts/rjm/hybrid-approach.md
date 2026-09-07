---
package: rjm
name: hybrid approach
slug: hybrid-approach
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

# hybrid approach

## Definition — verbatim
> "Adopt a **hybrid approach** with explicit split criteria:" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 69 | defined here | Core decision adopting explicit split criteria between architecture ADRs and governance policies. |

## Consumes
Technical decisions, operational policies, and organizational compliance mandates.

## Produces
Explicit document separation between `.agents/architecture/` and `.agents/governance/`.

## When applied
Applied when classifying and placing newly proposed engineering decisions across repository structures.

## Sub-concepts
adr-only, governance-only, split, decision-classification-matrix

## Part of
decision-workflow

## Implementation status
defects: missing-path

## Design notes
An architectural governance strategy in ADR-022 balancing pure ADR-centric and pure policy-centric documentation. By defining placement criteria for ADR-only technical decisions, governance-only operational policies, and coupled split pairs, it ensures architectural records remain focused on system design while governance policies remain living and enforceable.
