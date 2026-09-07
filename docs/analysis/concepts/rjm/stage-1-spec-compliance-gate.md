---
package: rjm
name: Stage-1 spec-compliance gate
slug: stage-1-spec-compliance-gate
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Stage-1 spec-compliance gate

## Definition — verbatim
> "Stage-1 spec-compliance gate" — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Frontmatter description establishing the mandatory prerequisite gate evaluated before Stage-2 quality axes. |

## Consumes
Pull request diff and linked specification documents (`REQ-*`, `DESIGN-*`, `TASK-*`).

## Produces
Stage-1 compliance verdict (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`) that gates invocation of Stage-2 review axes.

## When applied
Invoked at the very beginning of `/review` before any code quality, architecture, or security evaluations run.

## Sub-concepts
spec-compliance, stage-1

## Part of
review

## Implementation status
defects: missing-path

## Design notes
The Stage-1 spec-compliance gate is the architectural gatekeeper of rjm's review phase, short-circuiting the review pipeline on CRITICAL_FAIL to ensure agents do not waste resources evaluating the code quality of changes that fail to implement agreed specification requirements.
