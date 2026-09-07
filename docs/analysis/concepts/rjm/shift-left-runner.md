---
package: rjm
name: Shift-left runner
slug: shift-left-runner
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

# Shift-left runner

## Definition — verbatim
> "Roughly 30 validations: session end, tests, scoped markdownlint, workflow YAML, dash prohibition, plugin version field, install parity, hook anchoring." — .claude/skills/ai-agents-change-control/references/gate-ladder.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 13 | defines | Rung 1 entry of the Gate Ladder table defining the primary local validation runner pre_pr.py. |

## Consumes
Uncommitted and unpushed working directory changes, test suites, and configuration files.

## Produces
Comprehensive local validation status across ~30 validation checks with ADR-035 compliant exit codes.

## When applied
Executed locally before creating commits or pushing branches (`uv run python scripts/validation/pre_pr.py`).

## Sub-concepts
lint-scope

## Part of
gate-ladder

## Implementation status
clean

## Design notes
The Shift-left runner represents Rung 1 of rjm's gate ladder, realized via `pre_pr.py`. It executes roughly 30 automated validations locally to catch test failures, schema drifts, markdown issues, and hook misconfigurations before any remote interaction occurs, dramatically reducing CI failure rates.
