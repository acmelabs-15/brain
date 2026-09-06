---
package: addy
name: Test hierarchy
slug: test-hierarchy
kind: pattern
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Test hierarchy

## Definition — verbatim
(used, not defined)
> "- Test hierarchy: unit > integration > e2e (use the lowest level that captures the behavior)" — docs/copilot-setup.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-setup.md | 59 | used here | Specified in .github/copilot-instructions.md as unit > integration > e2e testing priority. |

## Consumes
Software behaviors, feature requirements, and bug reports needing test coverage.

## Produces
Layered test architecture prioritizing fast unit tests over integration and end-to-end test suites.

## When applied
When designing test cases for features or bugs to ensure tests are authored at the lowest sufficient layer.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The test hierarchy guides developers and agents to implement test coverage at the lowest possible architectural level (unit > integration > e2e) that faithfully captures the target behavior. This prevents over-reliance on brittle, slow end-to-end tests while preserving high feedback velocity and precise defect localization.
