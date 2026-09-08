---
package: rjm
name: Orchestrator Citation Check
slug: orchestrator-citation-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Orchestrator Citation Check

## Definition — verbatim
> "Orchestrator Citation Check" — scripts/validation/pre_pr_sequence.py:337

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 337 | defined here | Pre-PR gate verifying that backtick path citations in .claude/commands/pr-quality/all.md point to existing files. |

## Consumes
Path citations in orchestrator command definitions (.claude/commands/pr-quality/all.md) and repository filesystem state.

## Produces
Pass/fail gate verdict ensuring orchestrator commands cite existing files.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Orchestrator Citation Check is a verification gate (Issue #1966) verifying that backtick path citations in composite orchestrator commands (such as pr-quality/all.md) point to existing repository files, preventing broken orchestrator pipelines.
