---
package: rjm
name: ADR Author Pledge
slug: adr-author-pledge
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Author Pledge

## Definition — verbatim
> "Five commitments (Zimmermann, 2023):" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 77 | defines | Section defining five professional commitments for ADR authors (collaborative, ambitious, open and realistic, succinct, honest and candid) based on Zimmermann (2023). |

## Consumes
Architectural intent, author mindset, and proposed decision justification.

## Produces
Authorial behavioral standard governing transparency, stakeholder collaboration, and honest trade-off disclosure.

## When applied
Adopted by decision authors during drafting and referenced during review when evaluating authorial objectivity and candor.

## Sub-concepts
none

## Part of
ad-quality-frameworks

## Implementation status
clean

## Design notes
The ADR Author Pledge sets ethical and technical expectations for decision creators in rjm. By codifying commitments to involve stakeholders early, explore genuine alternatives, document negative trade-offs candidly, maintain succinct prose, and openly disclose confidence levels and personal biases, it combats cognitive shortcuts and defensive documentation habits, fostering high-trust engineering governance.
