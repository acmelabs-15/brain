---
package: matt
name: pre-commit hook
slug: pre-commit-hook
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-commit hook

## Definition — verbatim
> "- **Husky** pre-commit hook" — skills/misc/setup-pre-commit/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/setup-pre-commit/SKILL.md | 10 | defined here | Outlined as the primary automated verification gate set up by the skill. |

## Consumes
Git staged changes and configured repository scripts (`lint-staged`, `typecheck`, `test`).

## Produces
A pass/fail gate verdict that permits or blocks a git commit.

## When applied
Triggered automatically by Git on every `git commit` invocation before commit creation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Automated quality gate executed by Git prior to finalizing commits, executing staged formatting, typechecking, and tests to prevent broken code from entering repository history.
