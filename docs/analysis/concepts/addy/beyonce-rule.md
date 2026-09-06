---
package: addy
name: Beyonce Rule
slug: beyonce-rule
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Beyonce Rule

## Definition — verbatim
> "The Beyonce Rule applies: if the agent liked a behavior enough to depend on it, it should have put a test on it." — docs/adoption-guide.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 90 | defines | Dictates that any behavior an agent or team depends upon must be backed by an explicit test. |
| README.md | 250 | references | Listed as a core testing principle of the test-driven-development skill. |

## Consumes
New or modified system behaviors, legacy dependencies, and integration contracts.

## Produces
Explicit automated tests verifying every expected property and dependent behavior.

## When applied
When modifying existing systems, implementing new features, or relying on specific component behaviors.

## Sub-concepts
none

## Part of
test-driven-development, adoption-guide

## Implementation status
clean

## Design notes
The Beyonce Rule ("if you liked it, then you should have put a ring on it") dictates that if an engineer or AI agent relies on a specific behavior, that behavior must be asserted by an automated test. Unasserted behavior is unverified and prone to silent degradation during refactoring or future modifications.
