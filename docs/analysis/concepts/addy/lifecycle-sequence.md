---
package: addy
name: Lifecycle Sequence
slug: lifecycle-sequence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Lifecycle Sequence

## Definition — verbatim
> "For a complete feature, the typical skill sequence is:" — skills/using-agent-skills/SKILL.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 141 | defined here | Defines the canonical 16-step sequential skill workflow for end-to-end feature delivery. |

## Consumes
Complete feature development lifecycle from ideation to production deployment.

## Produces
Chronologically ordered skill execution pipeline (interview-me through shipping-and-launch).

## When applied
When implementing end-to-end features or complex architectural changes.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
The canonical 16-skill linear lifecycle sequence in Addy's methodology, mapping from requirements elicitation (interview-me) to deployment (shipping-and-launch) while allowing subset pipelines for smaller tasks like bug fixes.
