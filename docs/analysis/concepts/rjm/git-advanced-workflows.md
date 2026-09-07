---
package: rjm
name: git-advanced-workflows
slug: git-advanced-workflows
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# git-advanced-workflows

## Definition — verbatim
> "description: Resolve merge conflicts by analyzing git history and commit intent. Handles PR conflicts, branch conflicts, and session file conflicts with automated resolution for known patterns. Use when you say \"resolve merge conflicts\", \"fix conflicts on this branch\", \"PR has conflicts with main\", \"can't merge due to conflicts\", or \"resolve PR conflicts\". Do NOT use for rebasing, cherry-picking, or complex history rewrites (use git-advanced-workflows)." — .claude/skills/merge-resolver/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/SKILL.md | 4 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (git-advanced-workflows) utilized within the rjm ecosystem to ensure consistency and systematic execution.
