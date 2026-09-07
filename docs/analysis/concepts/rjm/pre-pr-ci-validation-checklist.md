---
package: rjm
name: Pre-PR CI Validation Checklist
slug: pre-pr-ci-validation-checklist
kind: checklist
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-PR CI Validation Checklist

## Definition — verbatim
> "Run before creating PRs to catch CI issues locally:" — .claude/agents/devops.md:408

## Also called — verbatim
> "## Pre-PR CI Checklist" — .claude/agents/devops.md:411

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 406 | defined here | Pre-pull-request checklist covering CI environment variables, continuous integration builds, test filtering, exit code verification, secret scanning, and error handling. |

## Consumes
Local working tree modifications, build/test toolchain, CI environment simulation.

## Produces
Verification checklist confirmation and readiness signal for creating a pull request.

## When applied
Run before creating PRs to catch CI issues locally.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
The Pre-PR CI Validation Checklist establishes a mandatory local pre-flight gate. By systematically running CI builds, tests with filters, secret scans, and error checks before code reaches GitHub Actions, it reduces CI queue churn, avoids broken PR runs, and accelerates feedback cycles.
