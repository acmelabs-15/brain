---
package: rjm
name: Question Discipline
slug: question-discipline
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Question Discipline

## Definition — verbatim
> "## Question Discipline" — .claude/skills/requirements-interview/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 33 | defined here | Modulates question discipline and action confidence based on location relative to circle of competence. |
| .claude/skills/requirements-interview/SKILL.md | 53 | defined here | Core operational rules mandating numbered, single-decision questions paired with evidence-backed recommended answers. |

## Consumes
Design tree decision nodes and gathered codebase evidence.

## Produces
Numbered, isolated questions paired with recommended answers, citations, and status markers (`CONFIRMED`, `OVERRIDDEN`, `DEFERRED`, `OUT_OF_SCOPE`).

## When applied
Applied continuously throughout the requirements interview when posing questions to the user.

## Sub-concepts
none

## Part of
grill-me-pattern

## Implementation status
clean

## Design notes
Question Discipline governs the strict interaction style of the requirements interview, prohibiting open-ended or bundled queries and requiring every question to provide a recommended answer supported by codebase or ADR evidence. This prevents decision fatigue and forces clear, testable commitments on each design branch.
