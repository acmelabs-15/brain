---
package: rjm
name: short-circuit
slug: short-circuit
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# short-circuit

## Definition — verbatim
> "**CRITICAL_FAIL only**: short-circuit. Do NOT run the complexity classifier, the remaining axes, or any local skill axes." — .claude/skills/review/SKILL.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 73 | defined here | Aborts review execution early when Stage-1 spec compliance fails critically. |

## Consumes
Stage-1 spec-compliance gate verdict of `CRITICAL_FAIL`.

## Produces
Immediate termination of review execution, setting `FINAL VERDICT` to `CRITICAL_FAIL`, marking remaining axes `SKIPPED`, and emitting only Stage-1 findings.

## When applied
> "**CRITICAL_FAIL only**: short-circuit." — .claude/skills/review/SKILL.md:73

## Sub-concepts
none

## Part of
review, spec-compliance

## Implementation status
defects: missing-path, doc-drift

## Design notes
The short-circuit pattern halts multi-axis evaluation immediately when core specification compliance fails critically. In rjm, if code fails to fulfill essential requirements or acceptance criteria, proceeding with downstream code quality, style, or performance reviews wastes tokens and developer attention on code that requires fundamental reimplementation.
