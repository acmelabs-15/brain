---
package: addy
name: LINT CHECK
slug: lint-check
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# LINT CHECK

## Definition — verbatim
> "│   LINT CHECK     │  eslint, prettier" — skills/ci-cd-and-automation/SKILL.md:33

## Also called — verbatim
`Lint` — skills/ci-cd-and-automation/SKILL.md:84

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 33 | defined here | First quality gate executing static analysis tools (eslint, prettier) in the CI pipeline |

## Consumes
Source code files and linter or formatter configurations (.eslintrc, .prettierrc).

## Produces
Linting report and exit status (0 on clean code; non-zero if style or syntax violations exist).

## When applied
First gate in the CI pipeline; must pass before subsequent gates run.

## Sub-concepts
none

## Part of
quality-gate-pipeline

## Implementation status
clean

## Design notes
In addy, LINT CHECK is the earliest static analysis gate in the automated CI pipeline. By catching code style, potential bugs, and formatting deviations in minutes via tools like ESLint and Prettier, it prevents trivial issues from consuming developer or reviewer time during later stages.
