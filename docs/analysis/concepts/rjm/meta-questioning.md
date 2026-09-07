---
package: rjm
name: Meta-Questioning
slug: meta-questioning
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Meta-Questioning

## Definition — verbatim
> "Questions about the questioning process itself." — .claude/skills/skillforge/references/regression-questions.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 115 | defined here | Category 6 regression questioning auditing analytical fatigue, hidden assumptions, and missing inquiry avenues. |

## Consumes
The accumulated transcript and state of questioning rounds.

## Produces
Identification of analytical fatigue, blind spots, and controversial premises.

## When applied
Asked in later rounds of regression questioning to evaluate whether the inquiry has truly reached exhaustion.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A self-reflective analytical technique auditing the inquiry process itself to combat cognitive fatigue, identify questions that have not been asked, and surface controversial design choices.
