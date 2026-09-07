---
package: rjm
name: GETTING STARTED AUDIT
slug: getting-started-audit
kind: template
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

# GETTING STARTED AUDIT

## Definition — verbatim
> "GETTING STARTED AUDIT" — .claude/skills/dx-review/SKILL.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 82 | defines | Header and layout template for logging step-by-step onboarding friction and timing. |

## Consumes
Sequence of onboarding actions, measured execution durations, friction ratings, and evidence sources.

## Produces
A structured step-by-step table summarizing onboarding actions, individual friction ratings, evidence citations, and total time elapsed.

## When applied
Formulated during Step 1 (Onboarding Audit) of dx-review to systematically document each onboarding interaction.

## Sub-concepts
none

## Part of
onboarding-audit, dx-review

## Implementation status
defects: orphan

## Design notes
The structured text table template in rjm's dx-review skill used to record individual onboarding actions, time taken, friction levels, and evidence citations, producing an auditable log of new developer onboarding.
