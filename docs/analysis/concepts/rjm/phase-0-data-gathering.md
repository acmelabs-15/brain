---
package: rjm
name: Phase 0: Data Gathering
slug: phase-0-data-gathering
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 0: Data Gathering

## Definition — verbatim
> "### Phase 0: Data Gathering" — .claude/skills/retrospective/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 227 | defined here | Renders the data gathering section populated with work items, outcomes, commits, and notes. |
| .claude/skills/retrospective/SKILL.md | 80 | defined here | First phase of the retrospective workflow establishing factual observation before diagnosis. |

## Consumes
Session logs under `.agents/sessions/`, git history, and GitHub PR/issue activity.

## Produces
Factual session context, execution trace chronology, outcome classification, and work items.

## When applied
Initiated at the start of the retrospective process before any interpretive analysis begins.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 0: Data Gathering establishes an objective factual foundation for retrospectives by gathering execution evidence from session logs, commits, and PRs before any subjective interpretation or diagnosis begins. By mandating observation before diagnosis, this phase prevents agents and reviewers from anchoring on premature conclusions.
