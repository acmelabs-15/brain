---
package: rjm
name: code-reviewer
slug: code-reviewer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md, sha256: f92484a428624acb2a63ba01debe7986e783a7eb8a6a26e15e352b126f2d3202}
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# code-reviewer

## Definition — verbatim
> "name: code-reviewer" — .claude/agents/code-reviewer.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md | 21 | used here | Review agent deployed to audit code quality, project guidelines, and best practices in PR-60. |
| .claude/agents/code-reviewer.md | 2 | defined here | Agent definition declaring the read-only code reviewer agent persona and configuration. |
| .claude/skills/dx-review/SKILL.md | 244 | used here | Invoked as a subagent in the review gate to analyze audit scorecards with untrusted data marking. |
| docs/agent-catalog.md | 19 | used here | Catalog entry describing the code reviewer agent, its model tier, and its operational scope. |

## Consumes
Code diffs, modified files, repository style conventions, and pull request metadata.

## Produces
Structured code review reports classifying findings by severity and confidence, identifying correctness defects and convention violations.

## When applied
Invoked after code changes, before commit or pull request creation, or when an audit gate requests focused code inspection.

## Sub-concepts
none

## Part of
pr-review-toolkit

## Implementation status
clean

## Design notes
A dedicated read-only agent persona that evaluates code modifications for correctness, project convention compliance, and duplication, operating under prompt-injection resilience rules where reviewed content is treated strictly as untrusted data.
