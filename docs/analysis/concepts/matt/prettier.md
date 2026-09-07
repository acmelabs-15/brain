---
package: matt
name: Prettier
slug: prettier
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prettier

## Definition — verbatim
(used, not defined)

> "- **Prettier** config (if missing)" — skills/misc/setup-pre-commit/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 8 | used here | Listed as the automated code formatting tool configured in pre-commit hooks. |
| skills/misc/setup-pre-commit/SKILL.md | 12 | used here | Configured as the code formatter executed by lint-staged with a default configuration. |

## Consumes
Source code files staged for commit and `.prettierrc` configuration.

## Produces
Consistently formatted source code files according to standardized formatting rules.

## When applied
Invoked automatically on staged files during pre-commit checks.

## Sub-concepts
none

## Part of
setup-pre-commit, lint-staged

## Implementation status
clean

## Design notes
An opinionated code formatting tool that enforces consistent styling across a codebase. Integrated into pre-commit workflows so developers and agents do not waste review bandwidth on formatting trivialities.
