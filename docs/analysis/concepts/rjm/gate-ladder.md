---
package: rjm
name: Gate Ladder
slug: gate-ladder
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gate Ladder

## Definition — verbatim
> "The gate ladder runs in feedback-cost order: pre-commit beats CI beats code review beats documentation, so catch violations at rung 1 (`uv run python scripts/validation/pre_pr.py`, `--quick` skips slow checks), not rung 4 (CI round-trip plus reviewer attention)." — .claude/skills/ai-agents-change-control/SKILL.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 1 | defines | Reference document detailing the four rungs, execution commands, and commit discipline rules of the gate ladder. |
| .claude/skills/ai-agents-change-control/SKILL.md | 75 | references | Explains the feedback-cost ordering of the gate ladder and establishes shift-left validation discipline. |

## Consumes
Local code modifications, staged commits, and branch diffs.

## Produces
Validation verdicts across four successive feedback tiers: shift-left runner, pre-commit, pre-push, and CI checks.

## When applied
Applied throughout active development sessions, before staging commits, before pushing branches, and during pull request review.

## Sub-concepts
shift-left-runner, ci-required-checks, files-per-commit, commits-per-pr, mid-session-check, lint-scope

## Part of
quality-gates

## Implementation status
clean

## Design notes
The Gate Ladder structures change control into four rungs ordered strictly by feedback cost: local shift-left execution, pre-commit hooks, pre-push hooks, and CI required checks. By catching logic errors, lint drifts, and contract violations at Rung 1 rather than after an expensive CI round-trip or human code review, it minimizes developer cycle time and prevents broken changes from polluting the repository.
