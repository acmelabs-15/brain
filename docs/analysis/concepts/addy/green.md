---
package: addy
name: GREEN
slug: green
kind: pattern
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# GREEN

## Definition — verbatim
> "4. Implement the minimum code to pass the test (GREEN)" — commands/build.toml:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/build.toml | 20 | applies | Step 4 of the default build loop directing implementation of the minimum code necessary to make the failing test pass. |
| skills/test-driven-development/SKILL.md | 41 | defines | Second step in the TDD cycle where minimal code is written to transition the failing test to passing. |

## Consumes
A failing test authored in the RED phase.

## Produces
Working production code that satisfies the test suite.

## When applied
Applied immediately after a test has been confirmed to fail in RED phase.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
GREEN is the implementation phase of Test-Driven Development where the engineer writes the minimal code needed to satisfy the test, avoiding premature complexity before reaching green.
