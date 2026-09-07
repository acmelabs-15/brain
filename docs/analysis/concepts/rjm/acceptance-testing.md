---
package: rjm
name: acceptance_testing
slug: acceptance-testing
kind: gate
package_phase: rjm:execution
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# acceptance_testing

## Definition — verbatim
> "Pass criteria: 100% tests pass, zero linter warnings." — .claude/skills/planner/scripts/executor.py:303

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 288 | defined here | Defines mandatory post-milestone automated test suites and pass criteria. |

## Consumes
Implemented milestone source code and language-specific test and lint toolchains (pytest, mypy, tsc, eslint, go test).

## Produces
Automated test suite execution verdicts and static analysis linting reports.

## When applied
Run immediately after each milestone completes during Step 3 of plan execution.

## Sub-concepts
self-consistency-check

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A post-milestone verification gate enforcing 100% test pass rates and zero linter warnings across supported languages before the executor permits advancement to subsequent milestones.
