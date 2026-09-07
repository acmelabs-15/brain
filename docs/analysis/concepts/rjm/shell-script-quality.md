---
package: rjm
name: Shell Script Quality
slug: shell-script-quality
kind: checklist
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

# Shell Script Quality

## Definition — verbatim
> "### 4. Shell Script Quality" — .claude/skills/review/references/devops.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 121 | defined here | Focus area checklist evaluating standalone shell and PowerShell scripts for cross-platform compatibility, quoting, error handling, and pipeline injection risks. |

## Consumes
Standalone shell scripts (`*.sh`, `*.ps1`) modified in pull requests and execution target environment requirements.

## Produces
DevOps review findings, recommendations, and quality verdicts targeting script portability, error propagation, and sanitization gaps.

## When applied
Applied during DevOps review for SCRIPT PRs or whenever standalone shell and PowerShell scripts are added or modified.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A specialized review checklist within rjm's DevOps review axis targeting subtle scripting defects that deterministic linters like actionlint and shellcheck do not catch, such as runner OS portability differences, quoting in heredocs, and unhandled non-zero exit codes.
