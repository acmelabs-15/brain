---
package: rjm
name: conventional commit
slug: conventional-commit
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
  - {path: .claude/skills/metrics/collect_metrics.py, sha256: aae715e460693787e19570b0a4b426f67d52e990a4a8781448708151603286c5}
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# conventional commit

## Definition — verbatim
(used, not defined)

> "Determine commit type from conventional commit message." — .claude/skills/metrics/collect_metrics.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/push-pr.md | 23 | used here | Mandates branch and commit naming based on conventional commit types (fix, feat, chore, etc.). |
| .claude/skills/metrics/collect_metrics.py | 125 | used here | Parsed in automated metric collection to classify commit distribution across agent work sessions. |
| scripts/new_validated_pr.py | 41 | used here | PR creation argument description specifying that PR titles must follow conventional commit format. |

## Consumes
Commit subject line and PR titles.

## Produces
Structured commit classification enabling automated changelog generation and metrics tracking.

## When applied
When staging commits, branching for PR creation, and running commit classification metrics.

## Sub-concepts
none

## Part of
push-pr-command, collect-metrics

## Implementation status
defects: doc-drift, orphan

## Design notes
A standardized commit message specification (e.g. `feat:`, `fix:`, `docs:`) adopted throughout rjm. It ensures machine-readable commit histories that facilitate automatic semantic versioning, metric aggregation across agent contributions, and clear pull request titling.
