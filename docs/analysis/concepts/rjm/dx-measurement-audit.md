---
package: rjm
name: DX Measurement Audit
slug: dx-measurement-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DX Measurement Audit

## Definition — verbatim
> "### Step 8: DX Measurement Audit" — .claude/skills/dx-review/SKILL.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 165 | defined here | Step 8 of the DX review protocol evaluating feedback widgets, bug report templates, and documentation analytics. |

## Consumes
Repository bug report templates, documentation analytics indicators, in-product feedback widgets, and NPS collection mechanisms.

## Produces
DX Measurement dimension score (0-10) with evidence summary and method label for the DX audit scorecard.

## When applied
Executed during step 8 of the `dx-review` audit process to verify whether the target platform instruments developer feedback loops.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The DX Measurement Audit assesses whether a product actively monitors and collects developer feedback. Without this evaluation, teams risk operating without visibility into ongoing developer friction and sentiment shifts over time.
