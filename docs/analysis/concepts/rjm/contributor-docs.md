---
package: rjm
name: Contributor docs
slug: contributor-docs
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Contributor docs

## Definition — verbatim
> "| **Contributor docs** | Repo root (`CLAUDE.md`, `CONTRIBUTING.md`, `AGENTS.md`) | Developers working on this repository | Development setup, testing, repo conventions |" — docs/customization.md:214

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 214 | defined here | Defined in a table establishing audience separation, located at repo root and focusing on setup, testing, and repo conventions. |

## Consumes
Repository architecture, contributor conventions, testing practices, and build scripts.

## Produces
Contributor-facing documentation files (`CLAUDE.md`, `CONTRIBUTING.md`, `AGENTS.md`) governing codebase development.

## When applied
Applied when establishing or modifying documentation meant for internal developers building and testing the repository.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Contributor docs are repository-root documentation files (`CLAUDE.md`, `CONTRIBUTING.md`, `AGENTS.md`) intended strictly for developers contributing to the repository. They specify development setup, test execution, and internal conventions, cleanly separated from user-facing documentation to prevent confusion between developer workflows and consumer usage.
