---
package: rjm
name: calibrated gate
slug: calibrated-gate
kind: gate
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

# calibrated gate

## Definition — verbatim
> "Adoption means the artifact set is complete: probe memory, eval numbers, ADR (if governance), calibrated gate, monitoring hook." — .claude/skills/ai-agents-research-methodology/SKILL.md:182-183

## Also called — verbatim
`calibration gate` — .claude/skills/ai-agents-research-frontier/SKILL.md:239

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 183 | defined here \| used here | Named as an indispensable component of a complete research adoption artifact set. |

## Consumes
Candidate detector logic, threshold settings, and historical pull request commit samples.

## Produces
A verified calibration table documenting threshold values, sampled PR results, and expected firing rates.

## When applied
When shipping any threshold-based detector, lint gate, or hook in Stage 5 of the idea lifecycle.

## Sub-concepts
none

## Part of
idea-lifecycle

## Implementation status
defects: missing-path

## Design notes
A calibrated gate operationalizes the hard-won lesson that speculative thresholds fail in practice. Originating from PR #1989's retrospective (where a threshold was shipped that could never fire in the repo), rjm requires every detector to include a calibration table showing that the rule fires appropriately against recent real-world PRs before adoption is finalized.
