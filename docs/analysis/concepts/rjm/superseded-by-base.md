---
package: rjm
name: Superseded by base
slug: superseded-by-base
kind: gate
package_phase: rjm:review
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

# Superseded by base

## Definition — verbatim
> "2. **Superseded by base.** The gate resolves the exact PR head via `refs/pull/<n>/head` (fork-safe, branch-name-agnostic), then `git cherry origin/<base> <head>` reports every commit on the PR branch as already on `origin/<base>` (patch-id match)." — docs/autonomous-pr-monitor.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 109 | defined here | Defined as a blocking failure mode within live-state triage detecting when all commits on a PR branch have already landed on the base branch. |

## Consumes
Target PR head commit and base branch reference (`origin/<base>`).

## Produces
Detection flag (`fully_superseded == true`) resulting in a `SKIP` action verdict and recommendation to close the redundant PR.

## When applied
Applied during live-state re-triage via `check_pr_live_state.py` prior to taking action on queued pull requests.

## Sub-concepts
none

## Part of
per-pr-live-state-re-triage

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Superseded by base detects redundant pull requests whose commits have already been incorporated into the target base branch via sibling consolidated PRs, preventing duplicate pushes, redundant CI runs, and conflicting re-merges.
