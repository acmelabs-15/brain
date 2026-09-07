---
package: rjm
name: pre-registered withholding
slug: pre-registered-withholding
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-registered withholding

## Definition — verbatim
> "None of the artifact evaluators that predate this ADR performs a *pre-registered withholding*." — .agents/architecture/ADR-087-held-out-validated-improvement.md:58-59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 59 | defined here | Defined as the discipline of committing a fixed held-out test split before initiating iterative optimization. |

## Consumes
Evaluation task fixtures, benchmark definitions, and corpus partitioning specifications.

## Produces
Pre-registered, split corpora ensuring held-out evaluation tasks are locked prior to running optimization iterations.

## When applied
Applied before commencing iterative prompt, rule, or agent optimization loops to guarantee evaluation integrity.

## Sub-concepts
none

## Part of
held-out-validated-improvement

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
Pre-registered withholding is an evaluation technique in rjm ensuring that held-out validation tasks are formally committed and isolated before optimization begins. It prevents experimenters or automated agents from selectively omitting failing tasks post-hoc, safeguarding the scientific validity of empirical claims.
