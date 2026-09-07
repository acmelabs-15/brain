---
package: rjm
name: verification-based governance
slug: verification-based-governance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# verification-based governance

## Definition — verbatim
> "This repo runs verification-based governance: a claim is true when a gate, test, or command output says it is, not when an agent asserts it." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 11 | defined here | Cited as the core principle governing repository continuity and documentation of record. |
| .claude/skills/ai-agents-external-claims/SKILL.md | 11 | defined here | Stated as the governing philosophy requiring primary source verification before external claims enter durable artifacts. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 105 | defined here | Characterized as inspectable gate artifacts that leave evidence of rule compliance or violation. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 17 | defined here | Defined as requiring verification mechanisms rather than authoritative labels for accepted ideas. |
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 11 | defined here | Defined as the evidence standard where claims are validated exclusively by gates, tests, or command outputs. |

## Consumes
Test suites, mechanical gates, CLI commands, and verifiable evidence artifacts.

## Produces
Objective verification evidence, inspectable logs, and validated gate verdicts.

## When applied
Applied universally across all code changes, architectural decisions, and factual assertions in the repository.

## Sub-concepts
failure-canon, resume-verification-checklist, per-issue-handoffs

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The fundamental governance doctrine of the rjm repository. It rejects trust-based compliance and unverified agent declarations, mandating that all claims, requirements, and quality checks be substantiated by executable gates, reproducible command outputs, or byte-exact citations.
