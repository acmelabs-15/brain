---
package: rjm
name: premise verification
slug: premise-verification
kind: technique
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

# premise verification

## Definition — verbatim
> "Treat premise verification as its own triage outcome, not a variant of an" — .claude/skills/reviewer-findings/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 51 | defined here | Core verification practice establishing that finding premises must be validated against the current tree state. |

## Consumes
Review findings and current Git repository state.

## Produces
Triage outcomes settling whether a finding's underlying premise is Confirmed, Declined, or Unreproduced.

## When applied
Applied before writing any fix in response to a code review finding or bot report.

## Sub-concepts
confirmed, declined, unreproduced

## Part of
reviewer-findings

## Implementation status
defects: orphan, missing-path

## Design notes
Premise verification is an adversarial triage practice ensuring agents independently substantiate the factual basis of review findings against current code before committing fixes.
