---
package: rjm
name: PowerShell Coding Standards
slug: powershell-coding-standards
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PowerShell Coding Standards

## Definition — verbatim
> "## PowerShell Coding Standards" — scripts/AGENTS.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 10 | defined here | Section heading establishing coding standards and Python-first migration constraints for scripts. |

## Consumes
Script implementation tasks and repository automation requirements.

## Produces
Consistent and compliant script implementations adhering to repository coding standards.

## When applied
Applied when reviewing, writing, or refactoring automation and utility scripts.

## Sub-concepts
script-structure, error-handling-pattern, cross-platform-patterns, testing-standards, module-structure

## Part of
none

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Coding standards section in `scripts/AGENTS.md` governing script authoring, notably mandating a Python-first policy per ADR-042 while documenting legacy PowerShell conventions for existing utility automation.
