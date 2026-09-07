---
package: rjm
name: Form Hypothesis
slug: form-hypothesis
kind: phase
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Form Hypothesis

## Definition — verbatim
> "### Phase 3: Form Hypothesis" — .claude/skills/chaos-experiment/SKILL.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 117 | defined here | Phase 3 of chaos experiment workflow establishing falsifiable predictions using Given/When/Then/Because structure. |

## Consumes
Steady-state baseline metrics and system architectural understanding of resilience mechanisms.

## Produces
Falsifiable hypothesis statement defining expected behavior and recovery timeframes under specific failure modes.

## When applied
Applied during Phase 3 after baseline quantification and before designing failure injection plans.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Form Hypothesis` enforces the scientific method in chaos engineering by requiring engineers to articulate an explicit, testable prediction of resilience behavior before breaking components.
