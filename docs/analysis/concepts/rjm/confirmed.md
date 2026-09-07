---
package: rjm
name: Confirmed
slug: confirmed
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

# Confirmed

## Definition — verbatim
> "Confirmed; proceed to fix" — .claude/skills/reviewer-findings/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 56 | defined here | Disposition verdict for review findings whose premise is verified against the current repository state. |

## Consumes
A review finding whose claims match verified evidence in the current repository tree.

## Produces
Authorization to proceed with implementing a code fix.

## When applied
Assigned when shape-matched Git checks confirm the validity of the reported defect.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
The triage outcome indicating that a review finding has been substantiated by concrete evidence in the current repository state, clearing it for remediation.
