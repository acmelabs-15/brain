---
package: rjm
name: A number needs the population it was read off
slug: a-number-needs-the-population-it-was-read-off
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# A number needs the population it was read off

## Definition — verbatim
> "## A number needs the population it was read off" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 25 | defined here | Section heading and principle mandating explicit declaration of denominators and measurement populations. |

## Consumes
Metric definitions, audit samples, evaluation data sets.

## Produces
Statistically grounded findings and bounded denominators for empirical claims.

## When applied
Applied when quoting counts, deltas, or percentages derived from codebases or evaluation corpora.

## Sub-concepts
moving-ref

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
A measurement discipline principle stating that quantitative figures are meaningless without explicit, closed population definitions, preventing misleading statistics derived from mismatched scopes or moving targets.
