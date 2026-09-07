---
package: rjm
name: Deep review is the strict superset of CI
slug: deep-review-is-the-strict-superset-of-ci
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deep review is the strict superset of CI

## Definition — verbatim
> "- **Deep review is the strict superset of CI**. In deep-review mode, any finding CI surfaces, `/review` surfaces first." — .claude/skills/review/SKILL.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 186 | defined here | Core review architecture principle declaring that deep review detects all CI defects prior to remote push. |

## Consumes
Local diff and complete set of CI validation rules and linting configurations.

## Produces
Pre-push identification of defects, preventing failed CI runs on remote branches.

## When applied
Applied whenever /review is invoked in deep-review mode across repository code changes.

## Sub-concepts
none

## Part of
review-principles

## Implementation status
defects: missing-path, doc-drift

## Design notes
An architectural principle ensuring that comprehensive local agent review encompasses all static analysis, linting, and automated checks executed in CI pipelines, catching issues before remote push.
