---
package: rjm
name: Detection Checklist for Analysis
slug: detection-checklist-for-analysis
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Detection Checklist for Analysis

## Definition — verbatim
(used, not defined)

> "## Detection Checklist for Analysis" — .claude/skills/analyze/references/design-tell-dont-ask.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 64 | defined here | Tabular checklist contrasting Ask patterns to flag against Tell patterns to accept. |

## Consumes
Candidate code snippets across validation, state change, calculation, and formatting.

## Produces
Specific acceptance or flagging determinations during architectural code smell analysis.

## When applied
Executed during Step 4 Deep Analysis to evaluate procedural vs object-oriented style.

## Sub-concepts
none

## Part of
tell-dont-ask

## Implementation status
defects: missing-path

## Design notes
A concrete 4-row detection checklist in rjm classifying code patterns across validation, state change, calculation, and formatting into Ask (flag it) versus Tell (accept it) categories, providing clear decision rules for automated code review agents.
