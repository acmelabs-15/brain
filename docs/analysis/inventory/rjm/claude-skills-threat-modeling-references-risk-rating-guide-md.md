---
package: rjm
path: .claude/skills/threat-modeling/references/risk-rating-guide.md
type: reference
bytes: 4765
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/risk-rating-guide.md, sha256: c467af69c46f046dcb04189bf1bc274ac7788dad223bf79fa0faa7bf9d277c58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/references/risk-rating-guide.md

## Purpose — required, verbatim
> "Consistent risk rating ensures threats are prioritized appropriately." — .claude/skills/threat-modeling/references/risk-rating-guide.md:3

## Design intent — required
Provides a quantitative risk scoring framework (Risk = Likelihood × Impact) on a 1-3 scale mapping to 4 risk response tiers (Critical, High, Medium, Low), calibration guidelines based on historical incidents, residual risk calculation after mitigation, and an optional DREAD scoring alternative for fine-grained risk assessment.

## Phase — required
rjm:spec

## Inputs — required
Threat descriptions, likelihood factors (attacker skill, access, tools, detection, motivation), and impact factors (data sensitivity, volume, system criticality, recovery time, regulatory liability, reputation).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:473

## Concepts named — required, verbatim
- `Risk Formula` — .claude/skills/threat-modeling/references/risk-rating-guide.md:5 — defined here
- `Likelihood Scale` — .claude/skills/threat-modeling/references/risk-rating-guide.md:13 — defined here
- `Impact Scale` — .claude/skills/threat-modeling/references/risk-rating-guide.md:35 — defined here
- `Risk Matrix` — .claude/skills/threat-modeling/references/risk-rating-guide.md:58 — defined here
- `DREAD` — .claude/skills/threat-modeling/references/risk-rating-guide.md:77 — defined here
- `Residual Risk` — .claude/skills/threat-modeling/references/risk-rating-guide.md:102 — defined here
- `OWASP Risk Rating Methodology` — .claude/skills/threat-modeling/references/risk-rating-guide.md:146 — used here
- `CVSS Calculator` — .claude/skills/threat-modeling/references/risk-rating-guide.md:147 — used here
- `FAIR Risk Quantification` — .claude/skills/threat-modeling/references/risk-rating-guide.md:148 — used here

## Structure
- `# Risk Rating Guide` — .claude/skills/threat-modeling/references/risk-rating-guide.md:1
- `## Risk Formula` — .claude/skills/threat-modeling/references/risk-rating-guide.md:5
- `## Likelihood Scale` — .claude/skills/threat-modeling/references/risk-rating-guide.md:13
- `### Likelihood Factors` — .claude/skills/threat-modeling/references/risk-rating-guide.md:21
- `## Impact Scale` — .claude/skills/threat-modeling/references/risk-rating-guide.md:35
- `### Impact Factors` — .claude/skills/threat-modeling/references/risk-rating-guide.md:43
- `## Risk Matrix` — .claude/skills/threat-modeling/references/risk-rating-guide.md:58
- `### Risk Levels` — .claude/skills/threat-modeling/references/risk-rating-guide.md:66
- `## DREAD Alternative (Optional)` — .claude/skills/threat-modeling/references/risk-rating-guide.md:77
- `## Residual Risk` — .claude/skills/threat-modeling/references/risk-rating-guide.md:102
- `### Example` — .claude/skills/threat-modeling/references/risk-rating-guide.md:110
- `## Common Pitfalls` — .claude/skills/threat-modeling/references/risk-rating-guide.md:121
- `## Calibration Questions` — .claude/skills/threat-modeling/references/risk-rating-guide.md:132
- `## References` — .claude/skills/threat-modeling/references/risk-rating-guide.md:144

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes standardized numeric ratings (Critical = 9, High = 6, Medium = 3-4, Low = 1-2) with explicit response timelines: Critical halts deployment, High addressed in current sprint, Medium in next release, and Low opportunistically or accepted.

## Context cost
4765 bytes, ~1190 tokens.
