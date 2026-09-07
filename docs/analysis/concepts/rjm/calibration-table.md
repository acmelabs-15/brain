---
package: rjm
name: calibration table
slug: calibration-table
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# calibration table

## Definition — verbatim
> "3. Build the calibration table: threshold | PR | measured value | would it fire? Include the expected firing rate." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 66 | defines | Details Recipe 2 step 3 specifying calibration table columns and required expected firing rate. |
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 158 | defines | Cites process change rule 3 requiring numeric thresholds to ship with calibration tables replaying recent PRs. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 157 | defines | Mandates calibration tables for threshold-based detectors transitioning from research to enforcement. |

## Consumes
Candidate threshold values, historical pull request replay measurements, and expected firing rates.

## Produces
Tabular evidence artifact included in the pull request description demonstrating detector efficacy.

## When applied
During the authoring and review of any pull request introducing or tuning numeric guards.

## Sub-concepts
last-5-real-prs

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A standardized tabular artifact demonstrating how a proposed detector behaves when replayed against historical pull requests. By comparing the chosen threshold against measured historical values, it provides objective evidence that the detector is neither ineffective nor excessively noisy.
