---
package: rjm
name: File-set sensitivity
slug: file-set-sensitivity
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

# File-set sensitivity

## Definition — verbatim
> "A `--cov-fail-under=100` pin must run EVERY test file that exercises the module." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 110 | defined here | Documented as a coverage trap where splitting test suites causes isolated single-file runs to artificially fail coverage pins. |

## Consumes
Coverage threshold pins (`--cov-fail-under`) and partitioned test file suites.

## Produces
Comprehensive test execution commands that run all test files exercising the target module.

## When applied
When configuring coverage commands in CI workflows or splitting large test files.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A testing trap identified in Issue #1963 where strict coverage pins fail if a subset of test files is executed in isolation. Because coverage is computed across all exercising tests, omitting any test file artificially drops measured coverage and falsely trips CI gates.
