---
package: rjm
name: validation report
slug: validation-report
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validation report

## Definition — verbatim
(used, not defined)

> "Expands QA agent to produce \"investigation report\" instead of \"validation report\"." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 76 | used here | Contrasted against proposed investigation reports as the canonical QA evidence deliverable for code changes. |

## Consumes
Test execution logs, acceptance criteria, edge case tests, and code diffs.

## Produces
Formal QA evidence documenting verification results, defect findings, and approval status.

## When applied
Produced by the QA agent upon completing post-implementation verification for code-modifying sessions.

## Sub-concepts
none

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path

## Design notes
The validation report is the primary deliverable produced by the QA agent upon verifying feature code in rjm. It records test results, coverage confirmation, and edge case evaluations, providing the concrete evidence required for session logs and pre-commit verification gates to pass.
