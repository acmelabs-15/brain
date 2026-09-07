---
package: rjm
name: Test Optimization
slug: test-optimization
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Test Optimization

## Definition — verbatim
> "### Test Optimization" — .claude/agents/janitor.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 60 | defined here | Section heading specifying rules for deleting obsolete tests, removing flaky tests, and simplifying test fixtures. |
| templates/agents/janitor.shared.md | 68 | defined here | Section heading outlining test suite optimization tasks across shared templates. |

## Consumes
Test suites, test setup/teardown fixtures, flaky test records, and duplicate test cases.

## Produces
Leaner test suites with faster execution times, eliminated flakiness, and simplified fixtures.

## When applied
When pruning bloated or slow test suites to maintain high test signal fidelity without unnecessary execution overhead.

## Sub-concepts
none

## Part of
debt-removal-tasks

## Implementation status
clean

## Design notes
Treats test code as subject to the same technical debt constraints as production source. Rather than accumulating tests indefinitely, Test Optimization directs agents to delete duplicate, obsolete, or meaningless tests and remove flaky assertions, ensuring test suites remain fast, reliable, and maintainable.
