---
package: rjm
name: Scenario files
slug: scenario-files
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scenario files

## Definition — verbatim
> "## Scenario files" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:621

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 621 | defined here | Section defining format and requirements for JSON scenario test suites. |
| CONTRIBUTING.md | 375 | defined here | Contributing guide section detailing how to write scenario files for rule evaluation. |

## Consumes
Test cases, prompts, expected gate labels, expected verdicts, and rule activation conditions.

## Produces
Structured JSON scenario suites containing positive and negative test cases for rule evaluation.

## When applied
Authored whenever creating or modifying rules, gates, or skills to enable empirical evaluation.

## Sub-concepts
skip-rule-not-applicable

## Part of
rule-audit-procedure

## Implementation status
defects: doc-drift

## Design notes
JSON-formatted evaluation test suites containing paired positive activation cases and negative discrimination cases used by the evaluation harness to empirically test whether prompt instructions fire when appropriate and stay dormant otherwise.
