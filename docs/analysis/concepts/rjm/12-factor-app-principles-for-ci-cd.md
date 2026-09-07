---
package: rjm
name: 12-Factor App Principles for CI/CD
slug: 12-factor-app-principles-for-ci-cd
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 12-Factor App Principles for CI/CD

## Definition — verbatim
> "## 12-Factor App Principles for CI/CD" — .claude/agents/devops.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 215 | defined here | Section heading mapping each 12-Factor App methodology principle to concrete CI/CD pipeline practices. |

## Consumes
CI/CD architecture requirements and deployment target specifications.

## Produces
Pipeline configurations adhering to codebase isolation, config in environment, strict build/release/run separation, and dev/prod parity.

## When applied
When designing or refactoring automated build and deployment pipelines.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
An architectural adaptation of the 12-Factor App methodology tailored to CI/CD pipeline design in rjm. It establishes concrete rules for each factor (e.g. strict build/release/run separation, stateless processes, external log streaming), ensuring pipelines remain modular, reproducible, and cloud-native.
