---
package: rjm
name: Pre-Commit Hooks
slug: pre-commit-hooks
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Commit Hooks

## Definition — verbatim
> "1. **Pre-commit hooks** validate session logs, markdown formatting, and security patterns" — docs/architecture.md:188

## Also called — verbatim
> "## Pre-Commit Hooks" — CONTRIBUTING.md:539

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 539 | used here | Details Lefthook installation and execution rules for validating staged files prior to commit creation. |
| docs/architecture.md | 188 | used here | Architecture overview establishing pre-commit hooks as the first automated quality gate tier. |

## Consumes
Staged git files, session logs, markdown documents, and Python source files.

## Produces
Validation pass/fail verdict gating local git commit operations.

## When applied
Executed automatically on `git commit` via Lefthook shims.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Shift-left quality enforcement mechanism that intercepts commits locally to enforce formatting, linting, and basic hygiene rules before changes enter the git commit history.
