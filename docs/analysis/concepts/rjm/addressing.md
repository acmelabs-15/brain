---
package: rjm
name: Addressing
slug: addressing
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md, sha256: 07862ef3fb6178b60c4d5f54fade0b93ea55718575377bdda6ea8e20ee506f03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Addressing

## Definition — verbatim
> "- **Addressing** = fixing the issue OR providing substantive reply with rationale" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/autonomous-execution-guardrails.md | 53 | defined here | Defined in contrast to mere thread resolution as fixing the underlying issue or supplying substantive rationale. |

## Consumes
Code review comments and identified defects or questions.

## Produces
Implemented code corrections or substantive written replies providing technical justification.

## When applied
Applied before resolving any code review comment thread during autonomous execution.

## Sub-concepts
none

## Part of
pre-merge-checklist

## Implementation status
clean

## Design notes
A review-phase standard distinguishing genuine defect resolution or substantive rationale from mere UI comment hiding, ensuring autonomous agents do not circumvent feedback.
