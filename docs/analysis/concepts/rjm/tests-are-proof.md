---
package: rjm
name: Tests are proof
slug: tests-are-proof
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tests are proof

## Definition — verbatim
> "A passing test is evidence. A missing test is a gap in knowledge." — .claude/commands/test.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 123 | defined here | Core testing principle establishing that passing tests constitute verifiable evidence while missing tests represent gaps in knowledge. |

## Consumes
Executable test suites, test run results, specification contracts.

## Produces
Empirical verification evidence demonstrating system correctness and exposing unvalidated behavioral assumptions.

## When applied
Governs testing discipline across `/build`, `/test`, and `/review`.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
"Tests are proof" defines an empirical epistemological standard for software correctness in rjm. Subjective developer assertions, informal manual checks, and good intentions do not demonstrate correctness; only automated, repeatable passing tests provide verifiable proof of software behavior, and any untested functionality is treated as an unverified assumption.
