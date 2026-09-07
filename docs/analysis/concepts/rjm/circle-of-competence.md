---
package: rjm
name: Circle of Competence
slug: circle-of-competence
kind: pattern
package_phase: cross-phase
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

# Circle of Competence

## Definition — verbatim
> "Your circle of competence is the domain where your knowledge is deep enough, tested enough, and current enough that your judgment is reliable." — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 7 | defined here | Reference document defining the mental model, calibration questions, question discipline, and red flags. |
| .claude/skills/requirements-interview/SKILL.md | 112 | used here | Mental model reference cited to calibrate confidence in recommended answers during interview branch walkthroughs. |

## Consumes
Proposed answers, design decisions, architectural claims, and evidence sources (benchmarks, code paths, ADRs).

## Produces
Calibrated decision status (`CONFIRMED`, `DEFERRED`, spike, or specialist escalation) based on domain expertise boundary.

## When applied
Applied during requirements interviews and design reviews when evaluating recommended answers across design tree branches.

## Sub-concepts
calibration-questions, question-discipline, red-flags-in-an-interview, practical-checklist

## Part of
requirements-interview

## Implementation status
clean

## Design notes
Circle of Competence is a decision calibration pattern applied during requirements interviews to assess whether a proposed decision or recommendation is grounded in tested, current expertise or merely remembered assumptions. By demanding explicit spikes, specialist consultations, or primary-source citations for outside-the-circle decisions, it prevents overconfident guesses from masquerading as settled system requirements.
