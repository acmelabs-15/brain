---
package: matt
name: knowledge-assessment
slug: knowledge-assessment
kind: gate
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# knowledge-assessment

## Definition — verbatim
(used, not defined)
> "An explicit knowledge-assessment step is a standing feature request" — external/teach.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 54 | used here | Identified as a missing intake step requested in issue #725 to establish baseline user knowledge before lesson generation. |

## Consumes
User background, prior experience, and domain knowledge boundaries.

## Produces
Calibrated starting tier for lessons inside the learner's zone of proximal development.

## When applied
At initial onboarding before authoring the first lesson in session one.

## Sub-concepts
none

## Part of
teach

## Implementation status
not-implemented

## Design notes
Knowledge-assessment is a requested initial evaluation step in the teach skill to establish baseline familiarity with a topic before lesson authoring begins. Without it, the agent frequently makes inaccurate assumptions about user expertise in the first session, forcing users to manually declare gaps and verbally correct vocabulary.
