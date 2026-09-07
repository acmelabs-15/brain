---
package: rjm
name: Calibration Questions
slug: calibration-questions
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Calibration Questions

## Definition — verbatim
> "### Calibration Questions" — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 24 | defined here | Checklist of four inquiry criteria to calibrate confidence in recommended answers against domain competence. |

## Consumes
Recommended design decision answers and their underlying evidence sources.

## Produces
Assessment of decision location relative to competence boundary (inside, edge, outside).

## When applied
For each branch in the requirements interview design tree before confirming decisions.

## Sub-concepts
none

## Part of
circle-of-competence

## Implementation status
clean

## Design notes
Calibration Questions is a four-point verification checklist used during requirements interviews to test whether proposed answers stem from tested, codebase-backed knowledge or remembered assumptions, preventing overconfidence from confirming unvetted decisions.
