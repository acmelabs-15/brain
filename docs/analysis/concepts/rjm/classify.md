---
package: rjm
name: Classify
slug: classify
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: scripts/ci/classify_semantic_title_result.py, sha256: b9414829dc1a70004dc8c0803990761701d761ee85c9800cc1ff89e6a57b960d}
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
  - {path: scripts/github_core/pr_merge_state.py, sha256: 11604a6b3e6c7d85f97f123b4a945a8b18465811c07e89316eee03a3d957afda}
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Classify

## Definition — verbatim
> "| 1. Classify | 30 min - 2 hours | Core vs Context + Strategic score |" — .claude/skills/buy-vs-build-framework/SKILL.md:52

## Also called — verbatim
> "### Step 3: Classify" — templates/agents/dependency-auditor.shared.md:92

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 11 | defined here | First step of the four-phase sourcing evaluation process defining Core vs Context differentiation. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 78 | defined here | Phase element definition in skill specification specifying purpose to determine if capability is Core or Context. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 52 | defined here | Phase 1 execution table entry establishing Core vs Context classification and strategic scoring. |
| scripts/ci/classify_semantic_title_result.py | 62 | defined here | Function classifying whether a semantic PR title check job should pass or fail. |
| scripts/eval/_pr_churn.py | 134 | defined here | Function classifying git commit headlines into churn categories. |
| scripts/github_core/pr_merge_state.py | 175 | defined here | Function determining PR merge eligibility and state based on GitHub status checks. |
| scripts/github_core/recovery_manifest.py | 214 | defined here | Helper classifying GitHub workflow runs into recovery candidate states. |
| scripts/issue_triage.py | 367 | defined here | Function classifying issue records based on priority, component, and labels. |
| scripts/llm_classification/classifier.py | 117 | defined here | Method classifying triage comments using LLM inference with retry logic. |
| scripts/validation/check_worktree_recipes.py | 168 | defined here | Function classifying git worktree recipe violation categories. |
| templates/agents/dependency-auditor.shared.md | 92 | defined here | Step 3 in dependency auditing agent classifying vulnerability findings by severity. |

## Consumes
Raw inputs, capabilities, PR metadata, issue records, or dependency scan findings.

## Produces
Categorized entity, severity level, strategic alignment score, or decision bucket.

## When applied
Executed as an initial triage or evaluation phase to partition items into well-defined domains or risk categories.

## Sub-concepts
core-vs-context-classification

## Part of
buy-vs-build-framework

## Implementation status
defects: orphan, script-bug, exit-code-mismatch, doc-drift, missing-doc

## Design notes
A cross-cutting categorization phase and function name across rjm. In the buy-vs-build lifecycle, it serves as Phase 1 to partition capabilities into Core or Context; across scripts and agents, it provides the deterministic triage step that routes data into appropriate downstream processing branches.
