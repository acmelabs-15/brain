---
package: rjm
name: AI PR Quality Gate
slug: ai-pr-quality-gate
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI PR Quality Gate

## Definition — verbatim
> "The AI PR Quality Gate prompts (`pr-quality-gate-qa.md`, `pr-quality-gate-security.md`, `pr-quality-gate-devops.md`) control critical CI/CD decision-making." — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26

## Also called — verbatim
> "- `ai-pr-quality-gate`" — .agents/metrics/workflow-coalescing.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 26 | used here | CI/CD gate whose prompts control PR mergeability across QA, security, and DevOps. |
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 10 | used here | Subject of PRD resolving false CRITICAL_FAIL verdicts on documentation-only pull requests. |
| .agents/metrics/workflow-coalescing.md | 42 | used here | Monitored AI workflow tracked for concurrency coalescing and race condition detection. |

## Consumes
Pull request diffs, metadata, and specialized prompt instructions across QA, security, and DevOps.

## Produces
Automated gate verdicts (PASS, WARN, CRITICAL_FAIL) and structured review feedback.

## When applied
Executed automatically on pull request creation and update events in GitHub Actions.

## Sub-concepts
false-critical-fail, false-pass, pester-structural-tests, docs-only-exemptions

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
The automated AI-driven quality gate in rjm's CI pipeline responsible for evaluating pull requests against QA, security, and DevOps standards. It enforces critical quality criteria before code merges into the default branch, preventing human reviewer overload while maintaining rigorous architectural compliance.
