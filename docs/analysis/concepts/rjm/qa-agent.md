---
package: rjm
name: qa agent
slug: qa-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# qa agent

## Definition — verbatim
> "MUST route to qa agent after completing feature implementation" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:18

## Also called — verbatim
QA agent — docs/autonomous-issue-development.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 18 | used here | Cited in protocol rules mandating routing to the QA agent after completing feature changes. |
| docs/autonomous-issue-development.md | 46 | used here | Specified as the mandatory reviewer evaluating functionality, edge cases, and test coverage in recursive review. |

## Consumes
Implemented code changes, acceptance criteria, test suites, and feature descriptions.

## Produces
QA validation reports, test failure diagnostics, edge case evaluations, and pass/fail approval verdicts.

## When applied
Invoked after code implementation is finished and before opening pull requests or committing feature branches.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: orphan, missing-path

## Design notes
The QA agent is a dedicated persona in rjm responsible for verifying software functionality, test coverage, and edge cases after feature implementation. By operating independently from the implementer agent, it provides adversarial verification and ensures that code changes satisfy requirements before entering review or release gates.
