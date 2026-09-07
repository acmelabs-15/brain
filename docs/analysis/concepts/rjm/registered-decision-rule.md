---
package: rjm
name: Registered decision rule
slug: registered-decision-rule
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Registered decision rule

## Definition — verbatim
> "#### Registered decision rule, 2026-08-03" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 67 | defined here | Pre-registered criteria specifying exact sign count thresholds (8/8, 7/8, 7/7, 6/6, 5/5) required to decide prompt keeps or additions. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 282 | defined here | Formal procedure protocol fixing decision criteria before subsequent audit runs to serve as confirmatory tests. |

## Consumes
Sign test results across a fixed 8-run evaluation suite (4 Opus, 4 Sol).

## Produces
Deterministic verdicts: `keep`, `cut`, `add`, or `inconclusive`.

## When applied
Applied during Step 3 (Decide) of prompt rule optimization procedures.

## Sub-concepts
- sign-test
- two-tailed
- fair-coin-null

## Part of
none

## Implementation status
clean

## Design notes
The `Registered decision rule` is a formal governance gate in rjm that pre-registers statistical decision criteria before running evaluation suites. By binding decisions to fixed sign-count thresholds under a fair-coin null (e.g., 7 of 8 or 8 of 8 required to add or keep) and forbidding post-hoc modifications, it prevents teams from rationalizing ambiguous evaluation outcomes.
