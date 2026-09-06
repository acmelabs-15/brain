---
package: addy
name: Architecture Decision Records
slug: architecture-decision-records
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Architecture Decision Records

## Definition — verbatim
> "ADRs capture the reasoning behind significant technical decisions. They're the highest-value documentation you can write." — skills/documentation-and-adrs/SKILL.md:25

## Also called — verbatim
> "ADRs" — skills/documentation-and-adrs/SKILL.md:23
> "Architecture Decision Records" — README.md:280

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Cites Architecture Decision Records in the documentation-and-adrs related skill card |
| external/documentation-and-adrs.md | 1 | defined here | Highlighted in meta description for documentation-and-adrs |
| external/git-workflow-and-versioning.md | 12 | used here | Listed under documentation-and-adrs card in related Ship skills |
| README.md | 280 | used here | Summarized in catalog table as core focus of documentation-and-adrs |
| skills/documentation-and-adrs/SKILL.md | 23 | defined here | Defined in main heading and detailed with template, lifecycle, and examples |

## Consumes
Significant technical choices, architectural context, alternatives considered, accepted trade-offs.

## Produces
Numbered Markdown ADR records in `docs/decisions/` or `.adr-dir` recording decision context, alternatives, and consequences.

## When applied
When choosing libraries, designing schemas, introducing patterns, or making any significant technical decision.

## Sub-concepts
none

## Part of
`none`

## Implementation status
clean

## Design notes
Architecture Decision Records (ADRs) capture the architectural context, evaluated trade-offs, and consequences of key decisions so future engineers and autonomous agents understand the rationale behind the code and avoid revisiting settled choices.
