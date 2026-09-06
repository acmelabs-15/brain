---
package: addy
name: Discover the Stack First
slug: discover-the-stack-first
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Discover the Stack First

## Definition — verbatim
> "The TDD cycle is universal; the commands are not. Before writing the first test, discover how *this* repository tests, and use its commands for every RED, GREEN, and verification step:" — skills/test-driven-development/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 75 | used here | Instructs the debugger to discover and substitute repository-specific test commands rather than assuming npm test. |
| skills/test-driven-development/SKILL.md | 24 | defined here | Establishes the rule of discovering project build tools, wrappers, test framework configs, and CI commands prior to testing. |

## Consumes
Repository configuration manifests (`package.json`, `pom.xml`, `Cargo.toml`, `pyproject.toml`), checked-in wrappers (`./gradlew`, `./mvnw`, `Makefile`), and CI workflow files.

## Produces
Accurate, project-specific commands for running focused single tests and full test suites.

## When applied
Applied at the start of any testing or debugging task before executing the first test command.

## Sub-concepts
none

## Part of
test-driven-development, debugging-and-error-recovery

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A preparatory technique mandating that agents inspect the repository's build system, checked-in wrappers, and CI configurations before invoking test commands. Without it, agents default to assumptions like `npm test` on non-Node repositories or invoke global binaries rather than project wrappers.
