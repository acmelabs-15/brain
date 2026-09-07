---
package: rjm
name: Error Handling Pattern
slug: error-handling-pattern
kind: pattern
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

# Error Handling Pattern

## Definition — verbatim
> "### Error Handling Pattern" — scripts/AGENTS.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 81 | defined here | Defines standard fail-fast error handling rules and structured exception handling. |

## Consumes
Potentially failing script operations, file access, and subprocess calls.

## Produces
Predictable script failure behavior with immediate exit and clear error diagnostic messages.

## When applied
Applied across all automation scripts to ensure unhandled errors immediately halt execution.

## Sub-concepts
none

## Part of
powershell-coding-standards

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Prescribes fail-fast error handling conventions (`$ErrorActionPreference = 'Stop'` and structured exception trapping) to prevent silent script failures in CI and lifecycle automation.
