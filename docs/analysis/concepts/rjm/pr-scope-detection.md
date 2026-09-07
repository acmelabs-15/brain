---
package: rjm
name: PR Scope Detection
slug: pr-scope-detection
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Scope Detection

## Definition — verbatim
> "## PR Scope Detection (FIRST STEP)" — .claude/skills/review/references/devops.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 43 | defined here | Initial review step categorizing changed files into WORKFLOW, ACTION, SCRIPT, TEMPLATE, CODE, DOCS, or CONFIG to scope review focus. |

## Consumes
File patterns and paths changed in the pull request diff.

## Produces
A scoped category assignment determining which review focus areas apply and which are safely skipped.

## When applied
As the first step in DevOps review before evaluating any substantive pipeline or build concerns.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A triage technique in rjm's DevOps review that categorizes pull request changes by file pattern, scoping review focus to relevant pipeline checks and preventing unnecessary analysis of documentation or static configurations.
