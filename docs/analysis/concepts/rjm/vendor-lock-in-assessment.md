---
package: rjm
name: Vendor Lock-in Assessment
slug: vendor-lock-in-assessment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vendor Lock-in Assessment

## Definition — verbatim
> "Add this section to all ADRs that introduce external dependencies:" — .claude/agents/architect.md:374

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 377 | defined here | Mandatory ADR section evaluating external dependency lock-in indicators, switching costs, and exit strategies. |

## Consumes
Proposed external services, third-party libraries, cloud platforms, or runtime dependencies.

## Produces
Quantified lock-in classification (None to Critical), identified lock-in indicators, documented exit strategy, and accepted trade-offs.

## When applied
Required for all Architectural Decision Records that introduce external dependencies.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Vendor Lock-in Assessment enforces explicit long-term agency and reversibility analysis whenever third-party services or frameworks are considered. By requiring ADR authors to assess lock-in levels, identify indicators such as proprietary APIs and conversion-heavy data formats, and define concrete migration paths and exit strategies before adoption, rjm prevents irreversible coupling to external vendors.
