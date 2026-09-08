---
package: rjm
name: Command routing
slug: command-routing
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Command routing

## Definition — verbatim
> "**Command routing (required)**: The orchestrator must run shell commands" — templates/agents/analyst.shared.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/analyst.shared.md | 148 | defined here | Architectural rule specifying that shell execution belongs exclusively to the orchestrator while the analyst uses read-only tools. |

## Consumes
Investigation requirements necessitating shell command execution (git, gh, Python, tests, builds).

## Produces
Delegation boundary requirement where shell commands are routed back to the orchestrator rather than executed by the analyst.

## When applied
Applied when an investigation requires shell output or code execution context that exceeds the analyst's read-only toolset.

## Sub-concepts
none

## Part of
analyst

## Implementation status
defects: missing-path

## Design notes
`Command routing` enforces an architectural separation of concerns between orchestrator and analyst agents in rjm, strictly restricting the analyst to passive and read-only tools while requiring all active shell execution (compilation, test execution, git operations) to be performed and supplied by the orchestrator.
