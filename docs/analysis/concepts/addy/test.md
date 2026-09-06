---
package: addy
name: /test
slug: test
kind: gate
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /test

## Definition — verbatim
> "| Prove it works | `/test` | Tests are proof |" — README.md:31

## Also called — verbatim
`test` — evals/fixtures/ci-cd-and-automation/package.json:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/ci-cd-and-automation/package.json | 6 | defines | Declares the npm test script command executing node --test. |
| external/api-and-interface-design.md | 12 | references | Catalogs the /test command as a related action in the Build and Verify phase. |
| external/browser-testing-with-devtools.md | 12 | references | Associates browser devtools testing with the /test command and verification phase. |
| external/context-engineering.md | 12 | references | Links context management practices to the /test execution command. |
| external/debugging-and-error-recovery.md | 12 | references | References /test as the execution verification step following error recovery. |
| external/doubt-driven-development.md | 12 | references | Identifies /test as the verification mechanism to challenge unverified assumptions. |
| external/frontend-ui-engineering.md | 12 | references | Connects UI component verification to the /test lifecycle command. |
| external/source-driven-development.md | 12 | references | Links source investigation and verification to the /test command. |
| external/test-driven-development.md | 5 | references | Associates the test-driven development skill with the /test command. |
| README.md | 17 | defines | Defines /test as the lifecycle verification slash command under Verify. |
| skills/constraint-driven-development/SKILL.md | 193 | references | Assigns /test to the VERIFY lifecycle phase to run related tests and check coverage under 90 seconds. |

## Consumes
Implemented code changes, unit or integration test suites, and test configuration.

## Produces
Test execution results, test failure logs, and coverage reports.

## When applied
> "Prove it works" — README.md:31

## Sub-concepts
none

## Part of
verify

## Implementation status
defects: doc-drift

## Design notes
The /test command and test gate represent the automated verification phase in Addy's lifecycle. It enforces that test suites are executed as proof before code enters review or shipping, ensuring that implementation correctness is validated through automated checks.
