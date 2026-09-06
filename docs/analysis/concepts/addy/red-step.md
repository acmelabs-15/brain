---
package: addy
name: RED step
slug: red-step
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# RED step

## Definition — verbatim
> "TDD's RED step is doubt made concrete — a failing test is a disproof attempt." — skills/doubt-driven-development/SKILL.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 227 | used here | Describes TDD's initial failing test execution as the concrete manifestation of the doubt step for behavioral claims |

## Consumes
Target behavior specification, test assertion that initially fails.

## Produces
Verified failing test demonstrating absence of the target behavior before implementation begins.

## When applied
Applied during test-driven development before writing implementation code to disprove the claim that functionality already exists or that the test is a no-op.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
In addy's lifecycle, the RED step of TDD represents doubt materialized into automated verification. Writing a test that fails before code exists proves the test is capable of catching defects and serves as an empirical disproof attempt of the behavioral implementation claim.
