---
package: addy
name: Test at the Right Level
slug: test-at-the-right-level
kind: technique
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

# Test at the Right Level

## Definition — verbatim
> "### 2. Test at the Right Level" — agents/test-engineer.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/test-engineer.md | 20 | defines | Section heading and decision rubric directing pure logic to unit tests, boundary crossing to integration tests, and critical flows to E2E tests. |

## Consumes
Feature specifications, architectural boundaries, and user journey definitions.

## Produces
Appropriate test type selection (unit, integration, or E2E) optimized for speed and fidelity.

## When applied
Applied when determining where in the test pyramid a new test case belongs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Test at the Right Level enforces testing efficiency by mandating that behaviors be verified at the lowest viable test pyramid layer, preventing slow and brittle E2E tests for logic testable via unit tests.
