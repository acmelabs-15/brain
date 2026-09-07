---
package: rjm
name: Declined
slug: declined
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

# Declined

## Definition — verbatim
> "Declined (refuted); reply with the file, line, commit, and evidence, no code change" — .claude/skills/reviewer-findings/SKILL.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 57 | defined here | Disposition verdict refuting invalid or already-addressed review findings without code modification. |

## Consumes
A review finding whose underlying premise is refuted by repository evidence or whose fix is already present.

## Produces
A documented rebuttal citing specific files, lines, and commits without making code changes.

## When applied
Assigned when premise checks demonstrate that a finding is false, stale, or already fixed.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
The triage outcome refuting a review finding with empirical repository evidence, preventing superfluous or regressive code edits.
