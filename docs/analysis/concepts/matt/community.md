---
package: matt
name: community
slug: community
kind: reference
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# community

## Definition — verbatim
> "A community is a place (online or offline) where the user can test their skills in the real world. This might be a forum, a subreddit, a real-world class (budget permitting) or a local interest group." — skills/productivity/teach/SKILL.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 116 | defined here | Defined as an external online or offline venue where users test skills against authentic real-world feedback. |

## Consumes
User topic and willingness to participate in external practitioner groups.

## Produces
High-reputation forums, subreddits, classes, or local interest groups.

## When applied
When the learner requires real-world feedback, calibration, or wisdom that an isolated teaching workspace cannot supply.

## Sub-concepts
none

## Part of
acquiring-wisdom

## Implementation status
defects: doc-drift, other

## Design notes
Serves as an external human feedback channel in the learning lifecycle. Rather than pretending an AI tutor can simulate human peer review and nuanced real-world practice, the teaching architecture explicitly delegates high-order validation to authentic practitioner communities.
