---
package: matt
name: setup-pre-commit
slug: setup-pre-commit
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

# setup-pre-commit

## Definition — verbatim
> "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing." — skills/misc/setup-pre-commit/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 8 | used here | Catalogs the skill as an automated pre-commit hook setup utility. |
| skills/misc/setup-pre-commit/SKILL.md | 2 | defined here | Defines the skill name and frontmatter metadata for configuring pre-commit hooks. |

## Consumes
Repository configuration files: lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`) to detect package manager, and `package.json` scripts (`typecheck`, `test`).

## Produces
Configured `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc` (if missing), and updated `package.json` with dependencies and `prepare` script.

## When applied
> "Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing." — skills/misc/setup-pre-commit/SKILL.md:3

## Sub-concepts
husky-pre-commit-hooks, lint-staged, prettier, type-checking

## Part of
none

## Implementation status
clean

## Design notes
An interactive setup skill that configures client-side pre-commit quality gates in a repository. It automatically detects the active package manager, installs Husky, lint-staged, and Prettier as devDependencies, initializes Husky v9+, configures formatting with `.lintstagedrc` and default `.prettierrc`, hooks up typechecking and test scripts if present, verifies the setup, and performs an initial commit as a smoke test.
