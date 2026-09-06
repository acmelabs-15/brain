---
package: rjm
path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md
type: reference
bytes: 4574
unit: inv-rjm-146
in_scope_via: .claude/skills/requirements-interview/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md

## Purpose — required, verbatim
> "Use this lens during the interview to calibrate how hard to push on a recommended answer and how much verification to demand before a decision is CONFIRMED." — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:22

## Design intent — required
Adapts the "Circle of Competence" mental model (Buffett, Munger, Parrish) into an operational calibration rubric for requirements elicitation. Solves the problem of engineering overconfidence and unexamined assumptions during specification by categorizing requirements answers into three zones: inside the circle (tested knowledge, code paths, ADRs; proceed with recommendation), at the edge (require spikes or primary source citation before confirmation), and outside the circle (mark unconfirmed, spike, or delegate to specialist). Provides red-flag indicators, practical checklists, and operating moves to prevent guesses from masquerading as settled system requirements.

## Phase — required
rjm:spec

## Inputs — required
- Interview questions and candidate recommended answers across the requirements design tree.
- Evidence citations (code paths, ADRs, benchmarks, user assertions).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill requirements-interview — .claude/skills/requirements-interview/SKILL.md:112

## Concepts named — required, verbatim
- `Circle of Competence` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:7 — defined here
- `Principle` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:9 — defined here
- `Requirements Interview Application` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:20 — defined here
- `Calibration Questions` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:24 — defined here
- `Question Discipline` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:33 — defined here
- `Red Flags in an Interview` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:39 — defined here
- `Operating Moves` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:48 — defined here
- `Practical Checklist` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:54 — defined here
- `Falsifiability` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:65 — used here
- `Chesterton's Fence` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:66 — used here
- `Survivorship Bias` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:67 — used here

## Structure
- `# Circle of Competence` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:7
- `## Principle` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:9
- `## Requirements Interview Application` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:20
- `### Calibration Questions` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:24
- `### Effect on Question Discipline` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:33
- `### Red Flags in an Interview` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:39
- `## Operating Moves` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:48
- `## Practical Checklist` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:54
- `## Related Models` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:63
- `## Sources` — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:69

## Defects — required
none

## Observations
- Excellent mental model application that operationalizes epistemic discipline into concrete requirements engineering rules (demanding a spike or primary source before marking a decision `CONFIRMED`).
- Context cost: 4574 bytes, ~1145 tokens.

## Context cost
4574 bytes, ~1145 tokens.
