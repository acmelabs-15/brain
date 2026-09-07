---
package: rjm
name: Phase 4: Extracted Learnings
slug: phase-4-extracted-learnings
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4: Extracted Learnings

## Definition — verbatim
> "## Phase 4: Extracted Learnings" — .claude/skills/retrospective/scripts/run_retrospective.py:264

## Also called — verbatim
Phase 4: Learning Extraction — .claude/skills/retrospective/SKILL.md:134

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 264 | defined here | Section heading containing atomicity-scored learnings and skillbook modification blocks. |

## Consumes
SMART-validated decisions and classified actions from Phase 3.

## Produces
Atomicity-scored learning statements accompanied by structured skillbook operations (ADD, UPDATE, TAG, REMOVE).

## When applied
Applied after decisions to distill learnings into standalone, high-scoring statements suitable for storage.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
clean

## Design notes
Phase 4: Extracted Learnings extracts discrete, high-quality knowledge from retrospective decisions and validates each statement through atomicity scoring before it can be stored. This gate ensures that only focused, non-compound insights with concrete evidence are promoted to institutional memory.
