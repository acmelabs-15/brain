---
package: rjm
name: Pre-PR Readiness Validation
slug: pre-pr-readiness-validation
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-PR Readiness Validation

## Definition — verbatim
> "When asked to validate PR readiness, check against this list:" — .claude/agents/critic.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 123 | defines | Section heading and 8-point checklist verifying test results, coverage, diff hygiene, and reversibility. |
| templates/agents/critic.shared.md | 127 | defines | Shared template section heading establishing pre-PR readiness criteria. |

## Consumes
Pull request branch state, local test execution logs, diff contents, and linters.

## Produces
PR readiness validation results confirming whether the branch is eligible for submission.

## When applied
Evaluated before creating or merging a pull request.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
An 8-point pre-submission checklist executed by the critic agent to confirm branch readiness across tests, coverage, lint warnings, scope boundaries, reversibility, and hygiene.
