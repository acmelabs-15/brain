---
package: rjm
name: "Phase 5: Persist and Close"
slug: phase-5-persist-and-close
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

# Phase 5: Persist and Close

## Definition — verbatim
> "### Phase 5: Persist and Close" — .claude/skills/retrospective/SKILL.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 301 | defined here | Section heading scaffolding memory persistence records, +/Delta feedback, and delta triage. |
| .claude/skills/retrospective/SKILL.md | 147 | defined here | Final retrospective phase persisting validated learnings to memory and closing the session. |

## Consumes
Candidate learnings meeting the atomicity persistence threshold (>= 70%) and retrospective process evaluations.

## Produces
Updated persistent memory records, delta triage action items, and retrospective evaluation metrics (+/Delta).

## When applied
Applied as the concluding phase of the retrospective workflow.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 5: Persist and Close completes the retrospective lifecycle by committing high-scoring learnings into permanent memory and running meta-retrospective evaluation (+/Delta). This step ensures that verified insights become institutional knowledge while continually refining the retrospective procedure itself.
