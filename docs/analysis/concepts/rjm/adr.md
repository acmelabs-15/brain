---
package: rjm
name: ADR
slug: adr
kind: artifact
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/merge-resolver/references/strategies.md, sha256: 27835b54b377f6fa64b4d76ef60eb12370d0c95c40c9a7c39924ed7dc7a4b008}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_adr_uniqueness.py, sha256: 3edae483b4be86c2960b172be8a075d30959d47c1552eadc093b43e1fe2b0a4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR

## Definition — verbatim
> "Architectural Decision Record, structured documents capturing design decisions" — README.md:147

## Also called — verbatim
Architecture Decision Records — .claude/skills/merge-resolver/references/strategies.md:128

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 32 | used here | Cited as high-quality delivery artifacts from Session 15 that established architectural precedent. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 2 | used here | Monitored as target file patterns to automatically trigger peer review and debate skills upon creation or change. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 30 | defined here | used here | Catalogued as a canonical document of record residing in .agents/architecture/ governed by uniqueness and review gates. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 169 | used here | Listed as the mandatory output artifact for Tier 2 and Tier 3 build-vs-buy architectural analyses. |
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 28 | used here | Parsed to extract decision assumptions and monitoring conditions for periodic reassessment. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 55 | used here | Required deliverable for Phase 4 (Decide) of the buy-vs-build evaluation process. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 52 | used here | Identified as downstream documentation produced by the architect agent using CVA analysis artifacts. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 309 | used here | Listed as the next step after matrix validation: creating an ADR with the architect agent. |
| .claude/skills/merge-resolver/references/strategies.md | 128 | used here | Described in merge conflict strategies as numbered documents susceptible to concurrent sequence allocation conflicts. |
| .claude/skills/review/references/decision-rigor.md | 45 | used here | Triggers the decision rigor review axis whenever staged diffs include an ADR or design review file. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 12 | used here | Referenced in specification schemas as required prior art inputs to evaluate against Chesterton's Fence. |
| README.md | 147 | defined here | used here | Defined in system overview table as structured documents capturing design decisions. |
| scripts/validation/check_adr_links.py | 13 | used here | Targeted by automated validator detecting broken cross-references and mismatched ADR numbers. |
| scripts/validation/check_adr_uniqueness.py | 2 | used here | Validated for sequence number uniqueness across concurrent branches to prevent merge collisions. |

## Consumes
Architectural options, CVA analyses, trade-off evaluations, debate logs, and prior art references.

## Produces
Numbered markdown files under .agents/architecture/ capturing context, decisions, status, and consequences.

## When applied
Created whenever a significant, non-obvious, or semi-reversible architectural or governance choice is made.

## Sub-concepts
adr-review, adr-generator

## Part of
ai-agents-docs-of-record

## Implementation status
clean

## Design notes
Architectural Decision Records (ADRs) are the canonical documents of record for technical architecture in rjm. Stored under .agents/architecture/, each ADR records the context, trade-offs, decision drivers, and consequences of significant choices. ADRs are protected by automated uniqueness checks, markdown link validators, and peer review debate gates, ensuring that architectural decisions remain immutable, discoverable, and auditable.
