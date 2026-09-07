---
package: rjm
name: Script Invocation
slug: script-invocation
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

# Script Invocation

## Definition — verbatim
> "Pattern 2: Script Invocation" — .agents/guides/python-cicd-patterns.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 30 | defined here | Section heading describing the invocation pattern for standalone Python utility scripts. |

## Consumes
Standalone Python scripts without package dependencies or complex import hierarchies.

## Produces
Execution of lightweight utility scripts in CI/CD workflows.

## When applied
When running simple standalone utilities that do not require module or package imports.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Execution pattern for standalone Python scripts executed directly via path invocation in CI workflows. It provides a lightweight alternative to module invocation for simple utility tasks that have no external intra-package dependencies.
