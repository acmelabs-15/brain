---
package: rjm
name: Reading Workflow Inputs
slug: reading-workflow-inputs
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

# Reading Workflow Inputs

## Definition — verbatim
> "Reading Workflow Inputs" — .agents/guides/python-cicd-patterns.md:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 322 | defined here | Heading and helper function pattern for reading INPUT_* environment variables in GitHub Actions. |

## Consumes
`INPUT_<NAME>` environment variables passed into actions by the GitHub Actions runner.

## Produces
Extracted and validated input values for Python script execution.

## When applied
When writing custom composite actions or scripts that consume workflow step inputs.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Pattern establishing helper methods to normalize and retrieve GitHub Actions workflow inputs from `INPUT_<NAME>` environment variables with required-input validation.
