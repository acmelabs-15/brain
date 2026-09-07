---
package: rjm
name: autonomous-execution guardrails
slug: autonomous-execution-guardrails
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
  - {path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md, sha256: 07862ef3fb6178b60c4d5f54fade0b93ea55718575377bdda6ea8e20ee506f03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# autonomous-execution guardrails

## Definition — verbatim
> "Stricter protocols for AI agents operating without supervision. Autonomous execution requires MORE validation, not less." — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:9

## Also called — verbatim
> "# Autonomous Execution Guardrails" — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 52 | used here | Reference cited for checking agent safety during PR review. |
| .claude/skills/review/references/agent-safety.md | 71 | defined here | Section heading establishing focus area for reviewing guardrail integrity. |
| .claude/skills/security-scan/references/agent-guardrails-template.md | 72 | used here | Cited as complementary reference covering pre-merge checklists alongside constraint templates. |
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 73 | used here | Cited as related safety reference preventing autonomous protocol bypass. |
| .claude/skills/security-scan/references/autonomous-execution-guardrails.md | 7 | defined here | Canonical reference defining strict pre-merge protocols for unsupervised agents. |

## Consumes
Agent execution context, review comments, session logs, and PR changes.

## Produces
Enforced pre-merge checklist validation and rejection of unanalyzed "won't fix" dismissals.

## When applied
Applied before any merge during autonomous agent execution.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
clean

## Design notes
Protocols and checklists in rjm designed to prevent unsupervised AI agents from optimizing for speed over correctness by bypassing validation gates, skipping orchestrator/critic/QA coordination, or dismissing review comments without substantive analysis.
