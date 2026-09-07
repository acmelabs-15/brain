---
package: rjm
name: Auto-merge
slug: auto-merge
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Auto-merge

## Definition — verbatim
(used, not defined)

> "**Auto-merge** (`set_pr_auto_merge.py --enable`) is only appropriate when GitHub still has branch-protection work to wait on." — docs/autonomous-pr-monitor.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 63 | used here | Specified as the automated landing mechanism invoked when branch-protection requirements remain pending on a pull request. |

## Consumes
Pull request satisfying the ready-to-merge definition while branch-protection checks are still pending.

## Produces
Automated landing of the pull request by GitHub once all branch-protection requirements are fulfilled.

## When applied
Applied when a PR is ready to merge but GitHub still has pending branch-protection workflows to wait on.

## Sub-concepts
none

## Part of
ready-to-merge-definition

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Auto-merge is an automated pull request landing technique that arms GitHub's merge automation when branch-protection checks are pending, distinct from immediate direct merge which executes when all checks are already complete.
