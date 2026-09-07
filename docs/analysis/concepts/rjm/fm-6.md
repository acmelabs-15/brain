---
package: rjm
name: FM-6
slug: fm-6
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-6

## Definition — verbatim
> "Multi-agent rubber-stamping" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 88 | used here | Mapped as failure mode FM-6 representing multi-agent rubber-stamping anchored by the 2025-12-24 parallel PR review session. |

## Consumes
Multi-agent review panels, automated peer review outputs, parallel approval gates.

## Produces
Superficial approval consensus masking underlying critical flaws or design defects.

## When applied
When auditing review panels where multiple agents failed to detect obvious bugs or defects in reviewed artifacts.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-6 defines the failure mode where concurrent or sequential review agents approve each other's outputs superficially without conducting adversarial critique or rigorous verification. In rjm, tracking FM-6 prompted the creation of asymmetric review personas, independent thinkers, and mandatory defect quotas that prevent superficial consensus.
