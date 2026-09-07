---
package: rjm
name: Halt Rule
slug: halt-rule
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Halt Rule

## Definition — verbatim
(used, not defined)

> "## Halt Rule" — .claude/skills/decision-critic/references/rewrite-regression-check.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 30 | defined here | Section heading specifying the decision halting logic and verdict mapping table for rewrite proposals. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Halt Rule is a documentation section heading in rewrite-regression-check.md detailing verdict mapping rules for unevidenced rewrite proposals rather than an operational lifecycle concept, classified as name-only per D-023.
