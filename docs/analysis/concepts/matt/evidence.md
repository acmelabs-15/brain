---
package: matt
name: Evidence
slug: evidence
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

# Evidence

## Definition — verbatim
> "how the user demonstrated the understanding (a question answered, an exercise completed, prior experience cited). Useful when the claim might be revisited." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 22 | defines | Defines the optional Evidence section in a learning record documenting how learner understanding was demonstrated. |

## Consumes
Demonstrated user comprehension, such as an answered question, completed exercise, or cited prior experience.

## Produces
An Evidence section within a learning record artifact.

## When applied
Useful when the claim might be revisited.

## Sub-concepts
none

## Part of
learning-record

## Implementation status
clean

## Design notes
An optional section within a learning record that grounds claimed learner understanding in concrete, verifiable demonstrations. By demanding observable proof—such as successfully completed exercises or correctly answered retrieval questions—it prevents an agent from mistaking passive exposure or superficial fluency for authentic mastery.
