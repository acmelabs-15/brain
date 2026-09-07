---
package: rjm
name: Structured Output for Workflow Consumption
slug: structured-output-for-workflow-consumption
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Structured Output for Workflow Consumption

## Definition — verbatim
> "Structured Output for Workflow Consumption" — .agents/guides/python-cicd-patterns.md:297

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 297 | defined here | Heading and pattern demonstrating how Python scripts write outputs to GITHUB_OUTPUT for downstream workflow steps. |

## Consumes
Script execution outcomes, calculation results, and JSON metadata.

## Produces
Formatted key-value pairs written to the `$GITHUB_OUTPUT` file descriptor.

## When applied
When a Python script needs to pass data or decision flags to subsequent steps in a GitHub Actions workflow.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Integration pattern demonstrating how Python scripts export key-value and serialized JSON outputs to `$GITHUB_OUTPUT` for downstream steps. It includes fallbacks for local test execution.
