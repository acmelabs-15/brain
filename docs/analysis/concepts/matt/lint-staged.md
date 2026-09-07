---
package: matt
name: lint-staged
slug: lint-staged
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

# lint-staged

## Definition — verbatim
> "- **lint-staged** running Prettier on all staged files" — skills/misc/setup-pre-commit/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 8 | used here | Listed as a component of pre-commit hook automation for formatting staged files. |
| skills/misc/setup-pre-commit/SKILL.md | 11 | used here | Identified as the tool that runs Prettier formatting against staged files. |

## Consumes
Staged files in git index and `.lintstagedrc` configuration.

## Produces
Auto-formatted staged files before commit finalization.

## When applied
Executed during pre-commit hooks on staged files.

## Sub-concepts
prettier

## Part of
setup-pre-commit, husky-pre-commit-hooks

## Implementation status
clean

## Design notes
A fast pre-commit optimization technique that scopes formatting tools like Prettier strictly to staged files rather than scanning the entire repository, keeping commit times minimal.
