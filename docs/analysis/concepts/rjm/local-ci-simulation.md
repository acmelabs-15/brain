---
package: rjm
name: Local CI Simulation
slug: local-ci-simulation
kind: technique
package_phase: rjm:test
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

# Local CI Simulation

## Definition — verbatim
> "Run CI checks locally before pushing PRs to catch environment-specific issues early." — .claude/agents/devops.md:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 307 | defined here | Section heading defining local pre-push simulation scripts for environment variables and branch protection. |

## Consumes
Local development working tree and shell environment (PowerShell or Bash).

## Produces
Local verification of CI build flags, environment variables, test execution, and protected branch behavior before pushing.

## When applied
Executed by developers or agents before pushing branches or opening pull requests.

## Sub-concepts
ci-environment-setup, protected-branch-simulation, environment-variable-leak-detection

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
A pre-push validation technique in rjm that executes CI checks locally in simulated continuous integration environments. By setting CI environment variables, enabling ContinuousIntegrationBuild compilation flags, and mocking protected branch contexts, developers detect failure modes locally before consuming remote runner time.
