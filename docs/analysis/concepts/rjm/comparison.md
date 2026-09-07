---
package: rjm
name: Comparison
slug: comparison
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Comparison

## Definition — verbatim
> "3. **Comparison (if historical data)**" — .claude/skills/code-qualities-assessment/SKILL.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 92 | defined here | Third step of assessment process comparing head revision scores against historical baselines or base revisions. |

## Consumes
Head revision assessment scores and base revision assessment scores from git merge-base blobs.

## Produces
QualityDelta records, regression detection lists, and evidence loss flags.

## When applied
Executed in regression mode when `--base` revision data is available for modified files.

## Sub-concepts
qualitydelta, filecomparison

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Comparison` is the differential evaluation step that computes quality changes between a feature branch and its git merge base. By comparing the exact score deltas per file rather than checking absolute numbers in isolation, comparison enables regression gating, ensuring that developers are neither blocked by pre-existing legacy issues nor allowed to merge active code degradations.
