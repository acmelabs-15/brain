---
package: rjm
name: Module Invocation
slug: module-invocation
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

# Module Invocation

## Definition — verbatim
> "Pattern 1: Module Invocation (Preferred)" — .agents/guides/python-cicd-patterns.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 17 | defined here | Section heading defining the preferred execution pattern using python -m for CI/CD workflow steps. |

## Consumes
Python packages structured with `__main__.py` or module entry points and repository root context.

## Produces
Execution of CI/CD tasks with package import resolution and consistent environment paths.

## When applied
When invoking Python scripts and tools from GitHub Actions workflows where package imports are required.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Execution pattern recommending `python -m <module>` over direct script execution in CI/CD workflows. It ensures correct `sys.path` configuration and package hierarchy resolution across different runners without fragile path manipulation.
