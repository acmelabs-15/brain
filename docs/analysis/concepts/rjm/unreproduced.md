---
package: rjm
name: Unreproduced
slug: unreproduced
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unreproduced

## Definition — verbatim
> "Unreproduced; reply with what you tried, leave the thread open" — .claude/skills/reviewer-findings/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 58 | defined here | Disposition verdict for unverifiable review claims, recording reproduction steps while keeping the thread open. |

## Consumes
A review finding that cannot be definitively confirmed or refuted through standard checks.

## Produces
A recorded account of attempted reproduction steps with the review thread kept open for clarification.

## When applied
Assigned when evidence is insufficient to confirm or refute a review finding.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
The triage outcome for review findings that cannot be verified or reproduced, maintaining an open audit trail rather than guessing or prematurely closing the discussion.
