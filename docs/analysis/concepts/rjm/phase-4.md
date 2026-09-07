---
package: rjm
name: Phase 4
slug: phase-4
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4

## Definition — verbatim
> "| **Phase 4** | Convergence check | Agents vote: Accept/D&C/Block |" — .claude/skills/adr-review/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 98 | defined here | Process table entry defining Phase 4 as the convergence check where review agents vote to Accept, Disagree-and-Commit, or Block. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 4 | used here | Module docstring noting Phase 4 of the retrospective workflow scores extracted learnings for atomicity. |

## Consumes
Proposed issue resolutions, revised ADR text, or extracted retrospective learnings.

## Produces
Consensus voting outcomes, convergence determinations, or atomicity scoring evaluations.

## When applied
Applied at the convergence stage of multi-agent debate or the final validation stage of retrospective learning extraction.

## Sub-concepts
strategic-validation-checklist, strategic-review-verdict

## Part of
multi-agent-debate

## Implementation status
clean

## Design notes
A critical terminal phase in rjm workflows—representing convergence voting and strategic validation in ADR debate, or atomicity verification in retrospective workflows—ensuring that proposed outputs meet final quality standards before acceptance.
