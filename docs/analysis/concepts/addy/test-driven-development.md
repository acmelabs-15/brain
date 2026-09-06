---
package: addy
name: test-driven-development
slug: test-driven-development
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# test-driven-development

## Definition — verbatim
> "Write a failing test before writing the code that makes it pass. For bug fixes, reproduce the bug with a test before attempting a fix. Tests are proof — "seems right" is not done. A codebase with good tests is an AI agent's superpower; a codebase without tests is a liability." — skills/test-driven-development/SKILL.md:10

## Also called — verbatim
`Test-Driven Development` — skills/test-driven-development/SKILL.md:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/test.toml | 4 | applies | Invoked by the Gemini CLI /test command to initiate the TDD workflow. |
| evals/cases/test-driven-development.json | 2 | applies | Target skill in evaluation test cases measuring TDD compliance. |
| external/api-and-interface-design.md | 12 | references | Referenced in external documentation sidebar for interface design. |
| external/context-engineering.md | 12 | references | Cited in external documentation sidebar for context management. |
| external/doubt-driven-development.md | 12 | references | Mentioned in external documentation sidebar for critical verification. |
| external/frontend-ui-engineering.md | 12 | references | Cross-referenced in external documentation sidebar for UI testing. |
| external/source-driven-development.md | 12 | references | Cited in external documentation sidebar for source grounding. |
| external/test-driven-development.md | 5 | defines | External documentation page summarizing TDD practices. |
| README.md | 58 | references | Cataloged in root README under the core skill catalog. |
| references/testing-patterns.md | 3 | references | Reference guide introducing testing patterns and test pyramid structure. |
| skills/constraint-driven-development/SKILL.md | 10 | references | Referenced as complementary implementation skill alongside constraints. |
| skills/debugging-and-error-recovery/SKILL.md | 75 | references | Invoked during debugging to create reproducible failing test cases. |
| skills/doubt-driven-development/SKILL.md | 227 | references | Cited when doubting implementation correctness to demand test proof. |
| skills/spec-driven-development/SKILL.md | 202 | references | Prescribed as the implementation methodology following task breakdown. |
| skills/test-driven-development/SKILL.md | 6 | defines | Primary skill file defining the Red-Green-Refactor cycle and Prove-It pattern. |

## Consumes
Specifications, acceptance criteria, bug reports, and project-specific test runners

## Produces
Automated test suites, verified production implementations, and refactored codebases

## When applied
When implementing new logic or behavior, fixing bugs, or modifying existing functionality.

## Sub-concepts
prove-it-pattern, browser-testing-with-devtools, chrome-devtools-mcp

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift (skills/test-driven-development/SKILL.md:1 classified under Build in README.md/CLAUDE.md but Verify in using-agent-skills; doc-drift between frontmatter description and README.md:250; external/test-driven-development.md exhibits doc-drift and orphan status)

## Design notes
Test-driven development is addy's core implementation discipline. By requiring automated test failure before code is written, it turns tests into executable proof of correctness, preventing regressions and providing a reliable feedback loop for AI agent development.
