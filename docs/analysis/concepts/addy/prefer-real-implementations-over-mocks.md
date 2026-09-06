---
package: addy
name: Prefer Real Implementations Over Mocks
slug: prefer-real-implementations-over-mocks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Prefer Real Implementations Over Mocks

## Definition — verbatim
> "Use the simplest test double that gets the job done. The more your tests use real code, the more confidence they provide." — skills/test-driven-development/SKILL.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 234 | defined here | Hierarchy of preference for test doubles prioritizing real code over fakes, stubs, and mocks. |

## Consumes
Dependencies, test environment, test double options (real implementation, fake, stub, mock).

## Produces
High-confidence tests executing real application code, with mocks restricted to slow, non-deterministic, or uncontrollable external boundaries.

## When applied
When designing test dependencies and determining whether to use real components, fakes, stubs, or mocks.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test double selection strategy establishing a preference hierarchy (Real implementation > Fake > Stub > Mock) to maximize verification confidence and avoid brittle tests that pass in CI while failing in production.
