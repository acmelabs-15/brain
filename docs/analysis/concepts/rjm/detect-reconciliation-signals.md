---
package: rjm
name: detect_reconciliation_signals
slug: detect-reconciliation-signals
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# detect_reconciliation_signals

## Definition — verbatim
(used, not defined)

> "reconciliation_detected = detect_reconciliation_signals(thoughts)" — .claude/skills/planner/scripts/executor.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 42 | defined here | Python function invoked during step 1 guidance generation to test thoughts for reconciliation triggers. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
`detect_reconciliation_signals` is a Python function identifier in `executor.py` for parsing user thoughts rather than an independent lifecycle concept.
