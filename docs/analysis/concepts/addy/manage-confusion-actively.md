---
package: addy
name: Manage Confusion Actively
slug: manage-confusion-actively
kind: technique
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

# Manage Confusion Actively

## Definition — verbatim
> "1. **STOP.** Do not proceed with a guess." — skills/using-agent-skills/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 63 | defined here | Second core operating behavior mandating stopping immediately when confused and resolving contradictions before proceeding. |

## Consumes
Contradictory requirements, inconsistent codebase patterns, ambiguous specifications.

## Produces
Explicit clarification questions and tradeoff options presented to the user instead of unverified guesses.

## When applied
Whenever an inconsistency, contradictory requirement, or unclear specification is discovered.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A critical behavioral rule halting autonomous execution whenever an agent detects contradictions or ambiguity, requiring it to name the confusion and present tradeoff options rather than guessing and hoping for the best.
