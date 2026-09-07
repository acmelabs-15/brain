---
package: rjm
name: Deep
slug: deep
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Deep

## Definition — verbatim
> "| **Deep** | >$500K | High | Hard | 1-2 weeks | Full 4 phases + POCs + External research + Consensus + Comprehensive ADR |" — .claude/skills/buy-vs-build-framework/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 68 | defined here | XML specification element declaring criteria and extensive deliverables for multi-week deep evaluations. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 67 | defined here | Depth tier matrix specification for high-stakes, irreversible decisions requiring proof-of-concept trials. |

## Consumes
High-budget sourcing proposals (>$500K), complex architectural options, and critical organizational capabilities.

## Produces
Four-phase evaluation reports, hands-on proof-of-concept outcomes, consensus panel reviews, and comprehensive ADRs.

## When applied
Triggered when decision magnitude exceeds $500,000 or when architectural choices are irreversible or prohibitively costly to reverse.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path

## Design notes
The maximum rigor pattern in rjm's decision framework. Applied to decisions with high capital exposure or irreversible technical impact, Deep demands that teams invest 1 to 2 weeks conducting hands-on proof-of-concept spikes, external market research, and consensus panel deliberation before committing the organization to code or contract.
