---
package: rjm
name: Graceful Degradation and Health
slug: graceful-degradation-and-health
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Graceful Degradation and Health

## Definition — verbatim
> "### 6. Graceful Degradation and Health" — .claude/skills/review/references/reliability.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 90 | defined here | Focus area checklist verifying partial fallback behavior and health check accuracy. |

## Consumes
Fallback routines, optional data enrichment dependencies, and health check endpoints.

## Produces
Findings on silent default masking, misleading health check signals, or brittle all-or-nothing responses.

## When applied
Applied during reliability reviews of services with non-critical dependencies or status monitoring probes.

## Sub-concepts
none

## Part of
reliability

## Implementation status
clean

## Design notes
`Graceful Degradation and Health` is a reliability review checklist ensuring systems return minimum useful responses when secondary dependencies fail and fail health checks transparently when core dependencies become unreachable.
