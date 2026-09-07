---
package: rjm
name: Context Mode Enforcement
slug: context-mode-enforcement
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
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Mode Enforcement

## Definition — verbatim
> "## Context Mode Enforcement (REQUIRED)" — .claude/skills/review/references/agent-safety.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/analyst.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/architect.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/code-quality.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/decision-rigor.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/devops.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/observability.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/qa.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/reliability.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/roadmap.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/security.md | 12 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |
| .claude/skills/review/references/spec-compliance.md | 14 | defined here | Mandatory gate requiring verification of CONTEXT_MODE header before issuing verdicts. |

## Consumes
`CONTEXT_MODE` header (`full`, `summary`, or `partial`) provided by the CI harness.

## Produces
Enforced restriction on allowable review verdicts, forbidding PASS on non-full contexts.

## When applied
Evaluated at the start of every review axis before deciding a verdict.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, other

## Design notes
Context Mode Enforcement is a foundational security and integrity gate across all twelve review axes that prevents AI reviewers from issuing a PASS verdict when only a summary or partial diff is available, ensuring that PRs exceeding context windows cannot bypass thorough human or automated scrutiny.
