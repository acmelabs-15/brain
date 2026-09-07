---
package: rjm
name: scope_check
slug: scope-check
kind: gate
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# scope_check

## Definition — verbatim
> "<scope_check>" — .claude/skills/analyze/scripts/analyze.py:487

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 487 | defined here | Dynamic calibration checkpoint tag adjusting total step count based on discovered complexity. |

## Consumes
Current step index, total steps remaining, and findings complexity discovered during investigation.

## Produces
Dynamic adjustment instruction (increase total_steps, decrease total_steps, or jump directly to verification).

## When applied
Appended to every deep analysis step instruction in analyze.py.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`scope_check` provides an adaptive horizon control mechanism during deep analysis, enabling the workflow to expand when unexpected complexity arises or contract and skip ahead when answers are found early.
