---
package: rjm
name: Predict Numbers Before Running
slug: predict-numbers-before-running
kind: technique
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Predict Numbers Before Running

## Definition — verbatim
> "Write the predicted outcome down BEFORE running the measurement. A prediction made after seeing the data is a description, not a test." — .claude/skills/ai-agents-research-methodology/SKILL.md:65-66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 63 | defined here \| used here | Section heading and core methodological discipline requiring pre-registered numbers before executing evaluations. |

## Consumes
Experimental hypotheses, target scenario fixtures, and designated quantitative metrics (pass rate, activation score, latency).

## Produces
Pre-registered quantitative predictions documented in session logs or spike notes prior to experimental runs.

## When applied
Before executing any paid evaluation, model benchmark, or empirical measurement suite.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
Predict Numbers Before Running establishes an anti-rationalization discipline for research and evaluation in rjm. By mandating that expected quantitative outcomes be recorded prior to running measurements, rjm ensures that evaluations serve as genuine falsifiable tests rather than post-hoc descriptions, turning unexpected deltas into clear diagnostic signals.
