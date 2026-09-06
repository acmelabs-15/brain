---
package: addy
name: Test Coverage Analysis
slug: test-coverage-analysis
kind: artifact
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Test Coverage Analysis

## Definition — verbatim
(used, not defined)
> "## Test Coverage Analysis" — agents/test-engineer.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/test-engineer.md | 64 | defines | Section heading defining the markdown output artifact produced by the test engineer when analyzing test suites. |

## Consumes
Existing test suites, source code coverage reports, and identified untested logic paths.

## Produces
Structured report documenting current test coverage, identified gaps, and prioritized recommended tests.

## When applied
Emitted when running test suite gap analysis directly or via the /ship command fan-out.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Test Coverage Analysis is the standard reporting artifact of the test engineer persona, prioritizing test creation by business and data-loss risk.
