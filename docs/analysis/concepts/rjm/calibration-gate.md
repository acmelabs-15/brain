---
package: rjm
name: calibration gate
slug: calibration-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# calibration gate

## Definition — verbatim
> "The Graduate step has no calibration gate: nothing today forces a promoted pattern to prove it would have fired correctly on real history" — .claude/skills/ai-agents-research-frontier/SKILL.md:239-240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 239 | defined here \| used here | Identified as the missing requirement in Graduate step to ensure promoted guards fire accurately on past PRs. |

## Consumes
Candidate guard definitions, proposed detection thresholds, and historical pull request datasets.

## Produces
Replay verification evidence proving that the guard intercepts actual failure instances while remaining silent on valid code.

## When applied
Before shipping any correction-derived guard or threshold-based detector to ensure it is calibrated against real repository activity.

## Sub-concepts
none

## Part of
detect-log-graduate

## Implementation status
defects: missing-path

## Design notes
A calibration gate prevents the deployment of non-functional or overly disruptive enforcement rules by requiring empirical replay against historical pull requests. In rjm, retrospectives revealed that guards often shipped with thresholds that could never fire in practice or would have prevented zero historical defects; the calibration gate enforces backtesting before graduation into production.
