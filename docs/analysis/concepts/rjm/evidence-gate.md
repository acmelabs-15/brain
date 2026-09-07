---
package: rjm
name: Evidence Gate
slug: evidence-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evidence Gate

## Definition — verbatim
> "### 1. Evidence Gate" — .agents/governance/SKILL-PHASE-GATES.md:13

## Also called — verbatim
`Evidence Gate` — .claude/skills/dx-review/SKILL.md:231

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 13 | defined here | Defines the evidence gate requiring sufficient independent sources before drawing conclusions. |
| .claude/skills/dx-review/SKILL.md | 231 | defined here | Enforces blocking evidence gate requiring two independent sources for high-impact DX findings. |

## Consumes
Gathered evidence, source citations, file paths, URLs, and conflicting evidence notes.

## Produces
Evidence sufficiency verification and `GATE_STATUS: Evidence Gate = PASS` or `FAIL`.

## When applied
Triggered whenever a skill or agent generates recommendations, conclusions, or architectural decisions.

## Sub-concepts
none

## Part of
skill-phase-gates, dx-review

## Implementation status
defects: missing-path, internal-contradiction, orphan

## Design notes
A blocking quality gate requiring agents to substantiate conclusions with documented, independent sources before formulating final recommendations or decisions. It prevents hallucinated or unverified assertions from entering repository artifacts.
