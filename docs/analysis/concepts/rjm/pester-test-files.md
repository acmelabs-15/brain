---
package: rjm
name: Pester test files
slug: pester-test-files
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pester test files

## Definition — verbatim
> "**Purpose**: Pester test files" — .agents/architecture/ADR-019-script-organization.md:100

> "**Naming Convention**: `ScriptName.Tests.ps1` matching the script under test" — .agents/architecture/ADR-019-script-organization.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 100 | defined here | Defined as test files for PowerShell scripts, organized in the root `tests/` directory. |

## Consumes
PowerShell scripts, functions, and modules under test.

## Produces
Test execution assertions, pass/fail test results, and mock verifications.

## When applied
Executed during CI test workflows and locally by developers before committing script changes.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Test suite files following Pester conventions (`*.Tests.ps1`) positioned in the root-level `tests/` directory, ensuring comprehensive unit and regression testing for automation scripts.
