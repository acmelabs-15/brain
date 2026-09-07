---
package: rjm
name: Test Coverage
slug: test-coverage
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Test Coverage

## Definition — verbatim
> "### 1. Test Coverage (For CODE and WORKFLOW PRs)" — .claude/skills/review/references/qa.md:99

## Also called — verbatim
> "| Test coverage | actual pytest/Pester run + measured coverage % |" — docs/design/external-signal-gating.md:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 99 | defined here | Focus area checklist requiring unit tests, edge case coverage, error path testing, and meaningful assertions for new or modified code. |
| docs/design/external-signal-gating.md | 34 | used here | Deterministic external quality gate grounded in actual pytest/Pester test suite execution and measured coverage percentage. |

## Consumes
Executable code diffs, automated test suites, test runner execution logs, and coverage reports.

## Produces
Quality gate verdicts and QA review findings verifying that new and modified code paths are exercised by passing tests.

## When applied
Enforced during pull request gating and QA review for all CODE and WORKFLOW changes.

## Sub-concepts
- test-coverage-assessment

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
A foundational quality gate in rjm combining deterministic external test execution signals with rigorous review scrutiny to guarantee that new functionality and error paths are covered by automated tests before merging.
