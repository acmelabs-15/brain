---
package: addy
name: The Prove-It Pattern
slug: the-prove-it-pattern
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

# The Prove-It Pattern

## Definition — verbatim
> "## The Prove-It Pattern (Bug Fixes)" — skills/test-driven-development/SKILL.md:96
> "When a bug is reported, **do not start by trying to fix it.** Start by writing a test that reproduces it." — skills/test-driven-development/SKILL.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 96 | defined here | Bug-fixing discipline requiring reproduction via a failing test before attempting a fix. |

## Consumes
Bug reports, user defect descriptions, or unexpected error logs.

## Produces
An automated failing reproduction test that confirms the defect and prevents future regressions.

## When applied
Whenever a bug report arrives or defect remediation is requested.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A defect remediation pattern mandating that no production code be modified until an automated test reproduces the bug in a failing state, verifying the existence of the defect and guarding against regression once fixed.
