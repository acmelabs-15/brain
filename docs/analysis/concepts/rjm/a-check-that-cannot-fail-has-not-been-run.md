---
package: rjm
name: A check that cannot fail has not been run
slug: a-check-that-cannot-fail-has-not-been-run
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# A check that cannot fail has not been run

## Definition — verbatim
> "## A check that cannot fail has not been run" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 11 | defined here | Section heading and core principle requiring negative controls to be validated by confirming failure on mutation. |

## Consumes
Test suites, negative controls, test harness configurations.

## Produces
Validated test assertions and verified negative controls that demonstrably fail when defects exist.

## When applied
Applied whenever implementing test suites, verification gates, or negative controls.

## Sub-concepts
none

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
A testing principle requiring that every verification check or negative control be proven capable of failing by intentionally introducing a defect or mutation before trusting its passing output.
