---
package: rjm
name: Red Flags
slug: red-flags
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Red Flags

## Definition — verbatim
> "#### 9.5 Red Flags to Call Out" — .claude/skills/programming-advisor/SKILL.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 254 | defined here | Warning checklist identifying common developer rationalizations that lead to insecure or underestimated custom development. |

## Consumes
Developer claims, scoping statements, and assumptions made during feature planning.

## Produces
Targeted warning alerts and counterarguments challenging naive development assumptions.

## When applied
Applied during Step 9.5 of programming-advisor when a user makes common rationalizations ("just a simple auth system", "build it in a weekend").

## Sub-concepts
none

## Part of
cost-analysis, programming-advisor

## Implementation status
clean

## Design notes
A heuristic checklist in programming-advisor that detects dangerous developer fallacies during solution evaluation. By actively flagging rationalizations like "it's just a simple auth system" or "we'll add security later", it prevents naive commitments to high-risk custom code and directs teams toward secure external alternatives.
