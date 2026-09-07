---
package: rjm
name: Iterate vs Redesign
slug: iterate-vs-redesign
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/iteration-guide.md, sha256: 5118f4210e260b60388478c9f4035a565622871dcda0747f0765dc510aac2d2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Iterate vs Redesign

## Definition — verbatim
> "## Iterate vs Redesign" — .claude/skills/skillforge/references/iteration-guide.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/iteration-guide.md | 49 | defined here | Defines criteria for deciding between additive behavioral tuning (<30% changes) and architectural redesign (>50% changes). |

## Consumes
Assessment of skill failures and scope of required modifications.

## Produces
Triage decision between localized iterative updates or full skill redesign.

## When applied
Applied when a skill fails to perform satisfactorily and requires structural decision-making on repair scope.

## Sub-concepts
none

## Part of
iteration-guide

## Implementation status
defects: orphan

## Design notes
A decision boundary establishing quantitative and qualitative criteria to distinguish whether a defective skill requires additive minor tuning (less than 30% change) or full conceptual redesign (more than 50% change or fundamental purpose drift).
