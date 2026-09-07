---
package: rjm
name: Refactoring
slug: refactoring
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Refactoring

## Definition — verbatim
> "## Refactoring" — .claude/skills/analyze/references/design-legacy-code.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 11 | defined here | Defines refactoring as behavior-preserving transformations making code easier to understand. |
| .claude/skills/software-engineering-library/references/refactoring.md | 4 | defined here | Encodes Fowler's refactoring discipline separating structural changes from behavioral modifications. |
| docs/task-classification-guide.md | 98 | defined here | Classifies refactoring tasks requiring explainer and critic review. |
| scripts/eval/software_engineering_library_activation_ci.py | 18 | used here | Tests rule scenario activation for refactoring tasks in CI. |
| scripts/eval/software_engineering_library_activation_gate.py | 24 | used here | Gates release on software engineering library refactoring scenario coverage. |

## Consumes
Working code with green tests and clear behavioral expectations.

## Produces
Transformed code with improved internal structure and identical external behavior.

## When applied
Applied when preparing a codebase for new features, eliminating code smells, or reducing complexity.

## Sub-concepts
bottom-up-approach, redundancy

## Part of
software-engineering-library

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Refactoring in rjm encodes Martin Fowler's rigorous discipline: altering internal code structure without changing observable behavior. Refactorings must directly facilitate an immediate next change, and are segregated from functional changes so that reviewers and automated checks can verify behavior preservation in isolation.
