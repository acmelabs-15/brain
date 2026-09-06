---
package: addy
name: Integration test
slug: integration-test
kind: technique
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

# Integration test

## Definition — verbatim
> "Does it cross a boundary (API, database, file system)? → Integration test (medium)" — skills/test-driven-development/SKILL.md:181-182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 182 | defined here | Decision guide rule selecting an integration test (medium size) when logic crosses a boundary (API, database, file system). |

## Consumes
Component interfaces, database connections, local services, or filesystem access.

## Produces
Test execution outcome verifying that collaborating components and subsystems interact correctly across boundaries.

## When applied
When testing behavior that crosses system or module boundaries (such as APIs, databases, or filesystem operations).

## Sub-concepts
medium

## Part of
test-pyramid, test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
An integration test in Addy's test strategy corresponds to a Medium test size in the resource model (~15% of test suites) and validates behavior that crosses process or boundary layers like APIs, databases, or filesystems on localhost without external network dependencies.
