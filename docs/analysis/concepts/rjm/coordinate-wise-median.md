---
package: rjm
name: coordinate-wise median
slug: coordinate-wise-median
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# coordinate-wise median

## Definition — verbatim
> "coordinate-wise median need not be any sample the judge gave: three samples of" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 121 | defined here | Defines the flawed reduction technique taking medians of rubric fields independently across samples, creating synthetic scores no judge awarded. |

## Consumes
Multi-dimensional judge sample triples across repeated evaluation runs.

## Produces
Synthetic composite score vectors constructed from disparate judge ratings.

## When applied
Used in legacy evaluation reductions before being retired as a statistical defect.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The `coordinate-wise median` was an evaluation reduction defect in rjm where medians were calculated across judge samples for each rubric dimension independently (e.g. median of activations, median of citations, median of behaviors). This generated impossible composite scores never awarded by any actual judge (e.g., three judges giving 5/5/1, 5/1/5, and 1/5/5 collapsed to 5/5/5), necessitating a fix to average each judge's triple into a scalar first before medianing.
