---
package: rjm
name: coverage theater
slug: coverage-theater
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# coverage theater

## Definition — verbatim
(used, not defined)

> "bans coverage theater (assertion-free tests)" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 53 | used here | Cited as a prohibited testing anti-pattern alongside brittle mocks and testing after the fact. |

## Consumes
Test suites constructed solely to increase line coverage statistics without validating behavioral correctness.

## Produces
Fragile test suites, hollow metrics, and undetected production defects.

## When applied
Prohibited across all test authoring, code reviews, and governance audits.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`coverage theater` refers to writing assertion-free tests or tautological suites solely to inflate coverage percentages without testing behavioral correctness or stakeholder concerns. Banned in rjm governance, it reminds developers that uncalibrated or assertion-less tests provide zero safety.
