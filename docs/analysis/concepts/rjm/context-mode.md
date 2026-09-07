---
package: rjm
name: CONTEXT_MODE
slug: context-mode
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
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

# CONTEXT_MODE

## Definition — verbatim
> "Build one `CONTEXT_MODE` value before invoking any canonical axis: use `full` only when the complete diff plus any linked REQ/DESIGN/TASK docs or PR-body acceptance criteria are present; use `summary` when only file names or diff stats are present; use `partial` when only a bounded slice is present." — .claude/skills/review/SKILL.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 165 | used here | Outlined as evidence sufficiency rule requiring CONTEXT_MODE validation in review policy. |
| .claude/skills/review/references/agent-safety.md | 14 | used here | Requires reading CONTEXT_MODE header to enforce evidence sufficiency before deciding verdicts. |
| .claude/skills/review/references/analyst.md | 14 | used here | Enforces CONTEXT_MODE header check to forbid PASS when diff context is not full. |
| .claude/skills/review/references/architect.md | 14 | used here | Instructs architect review axis to inspect CONTEXT_MODE header before issuing architectural verdicts. |
| .claude/skills/review/references/code-quality.md | 14 | used here | Mandates CONTEXT_MODE header validation to govern code quality assessment scope. |
| .claude/skills/review/references/decision-rigor.md | 14 | used here | Directs decision-rigor axis to evaluate decision evidence based on CONTEXT_MODE header. |
| .claude/skills/review/references/devops.md | 14 | used here | Enforces CONTEXT_MODE header inspection for CI/CD and infrastructure review tasks. |
| .claude/skills/review/references/observability.md | 14 | used here | Requires checking CONTEXT_MODE before passing observability and monitoring reviews. |
| .claude/skills/review/references/qa.md | 14 | used here | Enforces CONTEXT_MODE header validation to ensure test adequacy cannot PASS on partial diffs. |
| .claude/skills/review/references/reliability.md | 14 | used here | Instructs reliability axis to condition pass verdicts on full CONTEXT_MODE availability. |
| .claude/skills/review/references/roadmap.md | 14 | used here | Checks CONTEXT_MODE header to calibrate roadmap alignment evaluations. |
| .claude/skills/review/references/security.md | 14 | used here | Enforces strict CONTEXT_MODE check forbidding security PASS on partial or summary context. |
| .claude/skills/review/references/spec-compliance.md | 16 | used here | Mandates reading CONTEXT_MODE header before checking requirement and spec satisfaction. |
| .claude/skills/review/SKILL.md | 70 | defined here | Defines CONTEXT_MODE construction rules (full, summary, partial) prepended to all review prompts. |

## Consumes
Raw diff lines, PR body acceptance criteria, and linked REQ/DESIGN/TASK artifacts.

## Produces
A standardized header string (`CONTEXT_MODE: full|summary|partial`) prepended to every axis evaluation task.

## When applied
Constructed before invoking any review axis subagent or CI review workflow.

## Sub-concepts
summary-mode

## Part of
tiered-model-routing-strategy

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, other

## Design notes
A standardized context classification mechanism ensuring that every review subagent knows the exact boundaries of the evidence it receives. By mechanically attaching `CONTEXT_MODE` to task prompts and instructing agents that non-full contexts forbid PASS verdicts, the system prevents AI reviewers from hallucinating code quality over uninspected files.
