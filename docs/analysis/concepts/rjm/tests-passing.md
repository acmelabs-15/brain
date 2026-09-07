---
package: rjm
name: Tests passing
slug: tests-passing
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tests passing

## Definition — verbatim
> "4. **Tests passing** - All tests green? No skipped tests without justification?" — .claude/commands/ship.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 111 | defined here | Pre-flight check 4 confirming all test suites pass and verifying that no tests were skipped without justification. |

## Consumes
Project test suites (unit, integration, regression) and test runner results.

## Produces
A verification verdict confirming clean test execution across all active suites.

## When applied
Evaluated as the final pre-flight check in `/ship` prior to PR opening or branch merging.

## Sub-concepts
none

## Part of
pre-flight-checks, ship

## Implementation status
clean

## Design notes
Tests passing is pre-flight check 4 in `/ship`. It serves as the baseline sanity gate ensuring that all functional unit, contract, and integration tests execute successfully on the local branch, and explicitly audits skipped tests to ensure developers do not bypass test suites to achieve artificial green statuses.
