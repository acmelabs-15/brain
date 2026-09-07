---
package: rjm
name: Test-Implementation Alignment
slug: test-implementation-alignment
kind: technique
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

# Test-Implementation Alignment

## Definition — verbatim
> "#### Step 3: Test-Implementation Alignment" — .claude/agents/qa.md:438

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 438 | defines | Step 3 of Pre-PR Quality Gate verifying tests exercise real implementation behaviors rather than tautologies. |
| templates/agents/qa.shared.md | 428 | defines | Shared template definition for verifying test assertions align with actual implementation logic. |

## Consumes
Implementation code diffs and newly introduced or modified test suites.

## Produces
Alignment assessment confirming assertions test real production logic without tautologies or over-mocking.

## When applied
Executed as the third step of the pre-PR quality gate.

## Sub-concepts
none

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
The third step of the pre-PR quality gate, validating that tests assert meaningful behaviors against the actual code changes rather than testing mocked behaviors, trivial getters, or inverted tautologies. It protects against the illusion of test coverage where test suites pass green despite failing to verify real implementation contracts.
