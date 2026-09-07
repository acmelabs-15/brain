---
package: rjm
name: PR Description Validation
slug: pr-description-validation
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PR Description Validation

## Definition — verbatim
> "#### Step 5: PR Description Validation" — .claude/agents/qa.md:498

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 498 | defines | Step 5 of Pre-PR Quality Gate checking PR title and body for required sections, issue links, and risk assessment. |
| .claude/skills/pipeline-validator/SKILL.md | 150 | defines | Section in pipeline validator specifying required PR metadata, testing notes, and template compliance. |
| CONTRIBUTING.md | 879 | defines | Contributor guidelines specifying mandatory PR description format, breaking change declarations, and test evidence. |
| docs/technical-guardrails.md | 31 | defines | Technical guardrail enforcing blocking CI validation on PR descriptions for required structural headers. |

## Consumes
Draft PR markdown description, commit message history, and issue tracking identifiers.

## Produces
Binary compliance verification confirming PR description adheres to structural and content standards.

## When applied
Executed as the fifth step of the pre-PR quality gate and as a blocking check in CI pipelines.

## Sub-concepts
none

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
A structural validation check ensuring pull request descriptions contain mandatory metadata, including concise summaries, issue references, risk assessments, and testing instructions. Enforcing description quality in both QA gates and CI guardrails preserves git history clarity and ensures human reviewers have necessary context.
