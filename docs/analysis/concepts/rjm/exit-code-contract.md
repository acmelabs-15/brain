---
package: rjm
name: Exit Code Contract
slug: exit-code-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit Code Contract

## Definition — verbatim
> "Condition 3: Document Exit Code Contract" — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 95 | defined here | Defined as Condition 3, requiring documentation of Write-ErrorAndExit behavior and exit code semantics in function docstrings and SKILL.md. |

## Consumes
CLI scripts, tool functions, and error handling routines.

## Produces
Documented function docstrings, SKILL.md specifications, and standardized process exit codes (e.g., 0 for success, non-zero for failures).

## When applied
When implementing or refactoring scripts and CLI utilities whose exit status is monitored by CI workflows or caller processes.

## Sub-concepts
none

## Part of
concerns-and-conditions

## Implementation status
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95)

## Design notes
`Exit Code Contract` specifies the formal interface contract for script termination codes, ensuring callers and CI automation pipelines can reliably distinguish between successful execution, recoverable warnings, and catastrophic aborts.
