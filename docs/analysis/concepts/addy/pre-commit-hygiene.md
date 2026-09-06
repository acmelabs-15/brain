---
package: addy
name: Pre-Commit Hygiene
slug: pre-commit-hygiene
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Pre-Commit Hygiene

## Definition — verbatim
> "Before every commit:" — skills/git-workflow-and-versioning/SKILL.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 211 | defined here | Section heading introducing the 5-step pre-commit verification checklist. |

## Consumes
Staged code modifications inspected via `git diff --staged`.

## Produces
Verified and sanitized commits free from secrets, syntax/lint errors, and test regressions.

## When applied
> "Before every commit:" — skills/git-workflow-and-versioning/SKILL.md:213

## Sub-concepts
- git-hooks

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A mandatory five-step gate executed prior to committing that inspects staged diffs, scans for sensitive credentials, and runs unit tests, linters, and type checkers. It ensures that unverified or broken changes are never persisted to repository history.
