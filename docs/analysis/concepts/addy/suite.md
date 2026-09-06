---
package: addy
name: Suite
slug: suite
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Suite

## Definition — verbatim
> "- **Suite** — your own tests. Most useful, and the only genuinely circular one." — skills/constraint-driven-development/SKILL.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 222 | defined here | Identifies repository unit and integration test suites as circular constraint checks |

## Consumes
Internal repository test suites, test runners, and test files.

## Produces
Test execution verdicts and coverage measurements.

## When applied
Run in the inner development loop and task completion checks (`check:task`, `/test`).

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The internal test suite category in constraint-driven development. Although unit and integration tests are essential for rapid feedback during development, they are fundamentally circular when an agent authors both the production code and the tests. Constraint-driven development balances suite checks with external and project constraints.
