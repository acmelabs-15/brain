---
package: rjm
name: Stage 1
slug: stage-1
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Stage 1

## Definition — verbatim
> "You are running Stage 1 of a two-stage review. Your one job: decide whether this PR's diff actually implements the acceptance criteria of the spec it claims to satisfy." — .claude/skills/review/references/spec-compliance.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 10 | defined here | Opening instructions establishing Stage 1 as the initial gating phase of a two-stage pull request review. |

## Consumes
Pull request diff and linked specification documents (`REQ-*`, `DESIGN-*`, `TASK-*`).

## Produces
Stage-1 compliance verdict (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`).

## When applied
Always executed first in `/review` before any Stage-2 quality axes run.

## Sub-concepts
spec-compliance

## Part of
review

## Implementation status
defects: internal-contradiction

## Design notes
Stage 1 is the initial phase of rjm's two-stage review architecture, tasked exclusively with verifying whether code changes deliver the agreed acceptance criteria of a linked specification before executing Stage-2 quality and craft evaluations.
