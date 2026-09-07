---
package: rjm
name: Insufficient Test Patterns
slug: insufficient-test-patterns
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Insufficient Test Patterns

## Definition — verbatim
> "Flag tests that match these anti-patterns:" — .claude/agents/qa.md:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 150 | defined here | Catalogs anti-patterns such as regex checks on source code, unexecuted AAA claims, and unmocked external calls. |
| templates/agents/qa.shared.md | 140 | defined here | Catalogs anti-patterns such as regex checks on source code, unexecuted AAA claims, and unmocked external calls. |

## Consumes
Test suite source code, test execution traces.

## Produces
Test failure verdicts (`[FAIL]`) and concrete remediation instructions.

## When applied
Used by reviewers to detect and reject inadequate or deceptive test implementations.

## Sub-concepts
none

## Part of
test-quality-criteria

## Implementation status
defects: missing-path, doc-drift

## Design notes
Insufficient Test Patterns provide a catalog of common test anti-patterns used to fake test coverage. By classifying behaviors like inspecting file text instead of invoking functions, claiming arrange-act-assert structure without assertions, or skipping mocks for external dependencies, it gives QA reviewers objective criteria for rejecting substandard tests.
