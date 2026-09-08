---
package: rjm
name: Agent Content Parity (.claude/agents vs src/claude)
slug: agent-content-parity-claude-agents-vs-src-claude
kind: gate
package_phase: rjm:ship
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

# Agent Content Parity (.claude/agents vs src/claude)

## Definition — verbatim
> "Agent Content Parity (.claude/agents vs src/claude)" — scripts/validation/pre_pr_sequence.py:373

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 373 | defined here | Pre-PR gate verifying on-disk byte content parity between `.claude/agents` and `src/claude`. |

## Consumes
Agent markdown files in `.claude/agents/` and corresponding mirror files in `src/claude/`.

## Produces
Pass/fail verification verdict reporting on-disk file differences or drift.

## When applied
Run unconditionally during pre-PR validation sequence execution.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
An unconditional validation gate in `pre_pr_sequence.py` (Issue #4082) that compares on-disk file content between `.claude/agents` and `src/claude`. Unlike `validate_install_parity` which only checks git co-change, this gate detects existing drift across agent mirrors regardless of what changed in the current PR.
