---
package: rjm
name: Commits per PR
slug: commits-per-pr
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commits per PR

## Definition — verbatim
> "| Commits per PR | Advisory only: notice at 10, alert at 15, no block |" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 28 | defines | Commit discipline table entry defining advisory PR commit thresholds (notice at 10, alert at 15, no hard block). |

## Consumes
Branch commit history compared against `origin/main`.

## Produces
Advisory notices at 10 commits and alerts at 15 commits to encourage pull request splitting without blocking delivery.

## When applied
Evaluated during PR validation workflows (`pr-validation.yml`) and local mid-session checks.

## Sub-concepts
mid-session-check

## Part of
gate-ladder

## Implementation status
clean

## Design notes
An advisory governance gate monitoring commit volume on pull requests. Following the removal of rigid 20/40 commit blocking limits in issue #5233 (which forced fragile branch stacking workarounds), this policy provides warning feedback at 10 commits and alert feedback at 15 commits without halting progress.
