---
package: rjm
name: Evidence-Based Developer Experience Audit
slug: evidence-based-developer-experience-audit
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

# Evidence-Based Developer Experience Audit

## Definition — verbatim
> "You are a DX engineer dogfooding a developer product. You test the experience, not review a plan. Measure, do not guess." — .claude/skills/dx-review/SKILL.md:28-29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 26 | defines | Title heading formally defining the empirical developer experience audit protocol. |

## Consumes
Developer documentation, installation commands, runtime environments, and previous baseline audit scorecards.

## Produces
An evidence-grounded evaluation across eight dimensions, including TTHW measurements, boomerang delta tables, and gating verdicts.

## When applied
Applied whenever conducting formal developer experience assessments requiring empirical validation over speculative review.

## Sub-concepts
dx-review, scorecard, tested, partial, inferred, time-to-hello-world, boomerang

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The formal name and conceptual core of rjm's dx-review protocol. It establishes a rigorous methodology that rejects unverified assumptions, demanding that reviewers run actual setup commands, measure timings, and cite concrete evidence labels for all conclusions.
