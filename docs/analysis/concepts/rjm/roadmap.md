---
package: rjm
name: roadmap
slug: roadmap
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# roadmap

## Definition — verbatim
> "**Role**: Strategic product owner defining WHAT and WHY" — .agents/AGENT-SYSTEM.md:614

## Also called — verbatim
- `CEO of the product` — docs/agent-catalog.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 610 | defined here | Defined as a strategic product owner agent defining epics, RICE/KANO prioritization, and product vision. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 101 | used here | Re-evaluated for model selection and assigned to Sonnet 4.5 for strategic planning tasks. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 18 | used here | Listed as an informed agent role in context corpus governance decisions. |
| .claude/skills/review/references/roadmap.md | 2 | defined here | Defined as a dedicated PR review task persona assessing strategic alignment, feature scope, and user value. |
| .claude/skills/review/SKILL.md | 29 | used here | Listed as one of 11 Stage-2 canonical review axes evaluated by change risk before merge. |
| docs/agent-catalog.md | 41 | used here | Cataloged as the strategic product owner who guards against strategic drift and prioritizes by user value. |
| README.md | 295 | defined here, used here | Demonstrated evaluating candidate quarterly features using RICE and KANO frameworks. |
| src/claude/AGENTS.md | 168 | used here | Listed in strategy agents reference table mapped to `roadmap.md`. |
| templates/AGENTS.md | 174 | used here | Cataloged in shared agent roles table for epic definition, prioritization, and RICE scoring. |

## Consumes
Feature ideas, business context, user needs, and candidate feature lists.

## Produces
Structured epic definitions in `.agents/roadmap/`, roadmap updates, RICE/KANO priority rankings, and PR review verdicts.

## When applied
> "**When to Use**: - Defining new features" — .agents/AGENT-SYSTEM.md:632-633

## Sub-concepts
- rice-scoring

## Part of
- strategic
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (from .agents/AGENT-SYSTEM.md broken relative paths and missing backlog file, ADR-039 provisional window drift, and templates/AGENTS.md agent catalog drift)

## Design notes
In rjm's architecture, `roadmap` acts as the outcome-focused "CEO of the product" agent that ensures development activity directly aligns with user and business value. It counteracts feature factories and strategic drift by rigorously scoping epics, enforcing measurable hypotheses and kill criteria, and prioritizing backlog candidates using RICE and KANO models. Additionally, it serves as a canonical review axis in the review skill to detect unapproved scope expansion or non-strategic features before pull requests merge.
