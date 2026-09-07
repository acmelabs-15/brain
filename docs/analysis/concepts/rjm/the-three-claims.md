---
package: rjm
name: The three claims
slug: the-three-claims
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

# The three claims

## Definition — verbatim
> "## The three claims" — .claude/skills/reviewer-findings/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 26 | defined here | Section heading introducing the decomposition of review findings into verdict, diagnosis, and prescription. |

## Consumes
External review findings, bot comments, or cross-session review handoffs.

## Produces
Structured decomposition of findings into three independently verifiable claims.

## When applied
Applied whenever consuming and triaging code review comments before taking corrective action.

## Sub-concepts
prescription

## Part of
reviewer-findings

## Implementation status
defects: orphan, missing-path

## Design notes
An analytical technique deconstructing review feedback into three distinct components—verdict, diagnosis, and prescription—requiring separate evidence for each to prevent premature or erroneous code changes.
