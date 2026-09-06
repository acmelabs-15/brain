---
package: addy
name: The Beyonce Rule
slug: the-beyonce-rule
kind: pattern
package_phase: addy:Build
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

# The Beyonce Rule

## Definition — verbatim
> "If you liked it, you should have put a test on it. Infrastructure changes, refactoring, and migrations are not responsible for catching your bugs — your tests are. If a change breaks your code and you didn't have a test for it, that's on you." — skills/test-driven-development/SKILL.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 161 | defined here | Engineering rule establishing developer responsibility for test coverage of intended behavior. |

## Consumes
Feature implementations, behavior changes, refactorings, and migrations.

## Produces
Automated tests securing all critical and intended system behaviors.

## When applied
When authoring or modifying code; dictates test coverage ownership for any behavior considered important.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
An engineering cultural aphorism establishing that code authors, rather than downstream refactorings or infrastructure migrations, bear sole responsibility for test coverage protecting expected functionality.
