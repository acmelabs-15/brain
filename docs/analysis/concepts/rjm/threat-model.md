---
package: rjm
name: Threat Model
slug: threat-model
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Threat Model

## Definition — verbatim
(used, not defined)

> "## Threat Model" — .agents/security/ADR-045-framework-extraction-security-review.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 27 | defined here | Core section of the architectural security review enumerating system assets, threat actors, attack vectors, and STRIDE analysis. |

## Consumes
System architectural proposals, component boundaries, external interfaces, and data flow diagrams.

## Produces
Asset inventories, threat actor profiles, STRIDE matrices, and prioritized security mitigations.

## When applied
Conducted during architectural design reviews (ADRs) and PRD specification phases for complex features.

## Sub-concepts
stride

## Part of
security-review

## Implementation status
defects: missing-path

## Design notes
A `Threat Model` in rjm is a structured security analysis artifact produced by the security agent or `threat-modeling` skill. It systematically maps critical assets, evaluates potential threat actors and their capabilities, analyzes attack vectors using the STRIDE methodology, and produces actionable mitigations mapped to acceptance criteria.
