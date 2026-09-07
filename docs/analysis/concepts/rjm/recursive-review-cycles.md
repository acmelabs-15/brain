---
package: rjm
name: Recursive Review Cycles
slug: recursive-review-cycles
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Recursive Review Cycles

## Definition — verbatim
> "You must complete the following review cycles in order, and each must be performed recursively until all feedback is addressed:" — docs/autonomous-issue-development.md:37

## Also called — verbatim
> "4. **Complete recursive reviews** - Each review agent provides feedback that must be fully addressed before proceeding" — docs/autonomous-issue-development.md:133

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 36 | defined here | Defined as Phase 4 enforcing mandatory sequential, iterative review cycles by Critic, QA, and Security. |

## Consumes
Code changes, test implementations, and requirement specifications.

## Produces
Iterative remediation of findings, verified approvals from Critic, QA, and Security agents.

## When applied
Enforced sequentially after development before retrospective and PR creation.

## Sub-concepts
critic-review-recursive, qa-review-recursive, security-review-recursive

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
A multi-stage quality gate pattern in rjm requiring sequential review passes by three specialist agents (Critic -> QA -> Security). Each stage must be cleared with zero outstanding objections before proceeding to the next, guaranteeing rigorous pre-merge validation.
