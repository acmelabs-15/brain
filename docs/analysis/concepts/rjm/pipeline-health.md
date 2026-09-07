---
package: rjm
name: Pipeline health
slug: pipeline-health
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pipeline health

## Definition — verbatim
> "1. **Pipeline health**" — .claude/commands/ship.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 62 | defined here | Pre-flight check 1 validating remote CI/CD status on GitHub or branch policies on Azure DevOps. |

## Consumes
GitHub Pull Request CI check status or Azure DevOps branch build policies.

## Produces
Verification verdict confirming that all remote continuous integration checks or required branch policies have passed.

## When applied
Evaluated during `/ship` pre-flight checks; executes immediately when a PR exists or on Azure DevOps, and is deferred when shipping a new branch without an existing PR on GitHub.

## Sub-concepts
none

## Part of
pre-flight-checks, ship

## Implementation status
clean

## Design notes
Pipeline health ensures that remote CI builds, linters, and test suites are completely green before code delivery proceeds. It incorporates a sophisticated deferral mechanism: because GitHub Actions require an open pull request to run PR-targeted workflows, `/ship` defers this check to post-PR creation when starting with `pr=none`, preventing an impossible circular dependency while still guaranteeing that no branch merges without green CI.
