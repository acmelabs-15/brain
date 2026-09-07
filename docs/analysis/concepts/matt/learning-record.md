---
package: matt
name: Learning Record
slug: learning-record
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Learning Record

## Definition — verbatim
> "They are the teaching equivalent of ADRs: they capture non-obvious lessons, key insights, and stated prior knowledge that will steer future sessions. They are used to calculate the zone of proximal development." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 1 | defines | Format specification defining the schema, numbering, trigger conditions, and lifecycle of learning records. |

## Consumes
Demonstrated learner understanding, stated prior knowledge, corrected misconceptions, or mission adjustments.

## Produces
A numbered markdown file in `./learning-records/` (e.g. `0001-<slug>.md`) capturing verified knowledge and pedagogical implications.

## When applied
> "1. **The user demonstrated genuine understanding of something non-trivial**: not just exposure, but evidence they can use the concept correctly. This sets a new floor for what to teach next." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:33

## Sub-concepts
evidence, implications, supersession

## Part of
teach

## Implementation status
clean

## Design notes
A learning record functions as the teaching workspace counterpart to an architectural decision record, capturing durable, decision-grade milestones rather than transient lesson transcripts or coverage logs. By recording verified comprehension, corrected misconceptions, and disclosed prior knowledge, it establishes a persistent baseline that allows subsequent teaching sessions to dynamically calibrate the learner's zone of proximal development.
