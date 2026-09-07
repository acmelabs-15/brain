---
package: rjm
name: "\"Won't Fix\" Protocol"
slug: won-t-fix-protocol
kind: gate
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

# "Won't Fix" Protocol

## Definition — verbatim
> "## \"Won't Fix\" Protocol" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/autonomous-execution-guardrails.md | 33 | defined here | Defines the strict multi-agent review prerequisites required before dismissing review comments as won't fix. |

## Consumes
Review comments, analyst investigation findings, critic dismissal rationale evaluations, and security agent assessments.

## Produces
Validated and peer-reviewed dismissal justification for review comments that cannot or should not be addressed.

## When applied
When an autonomous agent intends to mark any code review comment as "won't fix".

## Sub-concepts
none

## Part of
pre-merge-checklist

## Implementation status
clean

## Design notes
A governance gate in rjm preventing autonomous agents from unilaterally dismissing reviewer feedback, requiring mandatory analyst investigation, critic review, and security sign-off prior to comment dismissal.
