---
package: rjm
name: Review Process
slug: review-process
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Review Process

## Definition — verbatim
> "## Your Review Process" — .claude/agents/silent-failure-hunter.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 25 | defined here | Heading defining the 5-step pull request error handling review methodology. |
| templates/agents/silent-failure-hunter.shared.md | 35 | defined here | Shared template section specifying the systematic review process for auditing error handling. |

## Consumes
Pull request diffs, code changes, or source files containing error handling, try-catch blocks, fallback logic, or exit codes.

## Produces
Structured error handling audit findings identifying silent failures, swallowed exceptions, inadequate logging, and inappropriate fallbacks.

## When applied
Applied during code review when inspecting PR diffs or code changes that touch error handling, catch blocks, fallback logic, or exit codes.

## Sub-concepts
logging-quality, user-feedback, catch-block-specificity, fallback-behavior, error-propagation, hidden-failures, boundary-aware-failure-policy, reducing-false-positives

## Part of
silent-failure-hunter

## Implementation status
defects: other

## Design notes
The review process is a structured 5-step methodology used by silent-failure-hunter to audit pull request changes for swallowed exceptions, silent fallbacks, unlogged errors, and inadequate diagnostic context across any language runtime.
