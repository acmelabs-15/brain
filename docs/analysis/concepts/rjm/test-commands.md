---
package: rjm
name: Test Commands
slug: test-commands
kind: reference
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Test Commands

## Definition — verbatim
> "## Test Commands" — .claude/agents/qa.md:731

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 731 | defines | Reference catalog of standard test runner CLI commands across supported languages and test frameworks. |

## Consumes
Project language environment (PowerShell, Python, TypeScript/JavaScript, Rust, Go).

## Produces
Correct CLI execution commands for invoking test suites and generating coverage data.

## When applied
Consulted by the QA agent when determining how to execute tests in an unfamiliar codebase.

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
A reference catalog documenting standard test invocation commands across supported environments (such as Pester for PowerShell, pytest for Python, Jest/Bun for JavaScript/TypeScript, cargo test for Rust). It ensures the QA agent selects the correct language-specific test runner flags for test execution, coverage collection, and CI parity.
