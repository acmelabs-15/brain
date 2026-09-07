---
package: rjm
name: Agent Pre-Submission
slug: agent-pre-submission
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Pre-Submission

## Definition — verbatim
> "### Agent Pre-Submission" — .claude/skills/style-enforcement/SKILL.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/SKILL.md | 254 | defined here | Integration subsection defining mandatory pre-submission style verification for agents before opening a PR. |

## Consumes
Git staged changes (`--git-staged`).

## Produces
Exit code 0 allowing PR creation, or exit code 10 blocking PR submission until detected style violations are resolved.

## When applied
Applied by an agent before creating a pull request.

## Sub-concepts
none

## Part of
style-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
Agent Pre-Submission is a gate in the build phase requiring coding agents to run style enforcement on staged git changes and rectify violations prior to creating a pull request.
