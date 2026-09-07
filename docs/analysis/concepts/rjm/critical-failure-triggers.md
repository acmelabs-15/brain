---
package: rjm
name: Critical Failure Triggers
slug: critical-failure-triggers
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critical Failure Triggers

## Definition — verbatim
> "## Critical Failure Triggers" — .claude/skills/review/references/agent-safety.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 127 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in agent safety review. |
| .claude/skills/review/references/analyst.md | 141 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in analyst review. |
| .claude/skills/review/references/architect.md | 175 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in architect review. |
| .claude/skills/review/references/code-quality.md | 130 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in code quality review. |
| .claude/skills/review/references/decision-rigor.md | 134 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in decision rigor review. |
| .claude/skills/review/references/observability.md | 124 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in observability review. |
| .claude/skills/review/references/reliability.md | 134 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in reliability review. |
| .claude/skills/review/references/roadmap.md | 160 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in roadmap review. |
| .claude/skills/review/references/spec-compliance.md | 138 | defined here | Enumerates conditions mandating an immediate CRITICAL_FAIL verdict in spec compliance review. |

## Consumes
Severe findings and critical defects identified during review analysis.

## Produces
Automatic assignment of CRITICAL_FAIL verdict for the affected review axis.

## When applied
Applied when evaluating review findings to determine the axis-level verdict.

## Sub-concepts
none

## Part of
rjm:review

## Implementation status
defects: doc-drift, other

## Design notes
A deterministic review gate across rjm review reference prompts specifying severe defect patterns that bypass scoring discretion and mandate an automatic CRITICAL_FAIL verdict.
