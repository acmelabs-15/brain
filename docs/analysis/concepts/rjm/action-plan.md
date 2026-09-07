---
package: rjm
name: action plan
slug: action-plan
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# action plan

## Definition — verbatim
> "Consolidate verified findings by severity (critical, high, medium, low). Identify systemic patterns. Produce prioritized action plan." — .claude/skills/analyze/SKILL.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 127 | defined here | Final synthesized artifact prioritizing immediate, short-term, and long-term remediation recommendations. |

## Consumes
Verified findings, severity tiers, and identified systemic patterns.

## Produces
Phased recommendations grouped into Immediate (blocking/security), Short-Term (sprint-level), and Long-Term (strategic/architectural).

## When applied
Generated during Step N (Synthesis), the final step of analyze.py.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`action plan` is the terminal deliverable of `analyze`, providing an actionable, time-horizened roadmap for fixing uncovered issues rather than an undifferentiated list of bugs.
