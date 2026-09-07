---
package: rjm
name: Git hook configuration
slug: git-hook-configuration
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Git hook configuration

## Definition — verbatim
> "| Git hook configuration | `lefthook.yml` | Named-job validation and relevant validator tests |" — .claude/skills/ai-agents-change-control/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 36 | defined here | Classification table row specifying verification requirements for edits to lefthook.yml. |

## Consumes
lefthook.yml configuration files and hook definitions.

## Produces
Validated Git hook jobs and execution policies.

## When applied
Triggered whenever lefthook.yml is updated or reconfigured.

## Sub-concepts
git-hook-jobs

## Part of
change-control

## Implementation status
clean

## Design notes
Git hook configuration governs repository-wide pre-commit and pre-push hook definitions in lefthook.yml, requiring dedicated validator testing to ensure local checks execute reliably.
