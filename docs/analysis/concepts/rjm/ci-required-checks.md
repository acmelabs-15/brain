---
package: rjm
name: CI required checks
slug: ci-required-checks
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

# CI required checks

## Definition — verbatim
> "Nine deterministic contexts are pinned in `scripts/ci/ruleset_required_contexts.py:REQUIRED_CONTEXTS`. Neither AI specialist verdicts nor committed session logs block merge; their workflows were deleted" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 16 | references | Rung 4 entry of the Gate Ladder table defining required GitHub Actions workflows and status checks. |

## Consumes
Pull request events, pushed branches, and committed changesets.

## Produces
Merge-blocking status checks in GitHub Actions required for pull request integration.

## When applied
Evaluated on remote push and pull request events as the final automated gate before merge.

## Sub-concepts
none

## Part of
gate-ladder

## Implementation status
clean

## Design notes
CI required checks form Rung 4 of the Gate Ladder, enforcing deterministic merge gating in GitHub Actions. By pinning nine exact contexts in `ruleset_required_contexts.py` while explicitly preventing non-deterministic AI agent verdicts from blocking merges, rjm guarantees objective, repeatable CI verification.
