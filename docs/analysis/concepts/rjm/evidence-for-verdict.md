---
package: rjm
name: Evidence for Verdict
slug: evidence-for-verdict
kind: template
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence for Verdict

## Definition — verbatim
> "### Evidence for Verdict" — templates/agents/qa.shared.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 190 | defines | Structured report template for documenting specific test files, anti-patterns, and required fixes when rejecting insufficient tests. |

## Consumes
Identified test suite anti-patterns, missing assertions, and structural-only validations.

## Produces
Tabular defect report identifying test file, test name, anti-pattern, line reference, verdict (`[FAIL]`), reason, and required remediation.

## When applied
Used when flagging insufficient tests or rejecting test suites that fail behavioral verification standards.

## Sub-concepts
none

## Part of
quality-assurance-specialist

## Implementation status
defects: missing-path

## Design notes
A structured reporting template within the QA agent protocol that standardizes evidence presentation when rejecting test suites. Instead of subjective dissatisfaction, it requires itemizing the offending test file, test name, anti-pattern, and code line reference alongside an explicit failure verdict and required fix.
