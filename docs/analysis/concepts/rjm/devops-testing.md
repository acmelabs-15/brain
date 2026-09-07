---
package: rjm
name: DevOps Testing
slug: devops-testing
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DevOps Testing

## Definition — verbatim
> "You are a build and release engineer. Focus on pipeline safety, reproducibility, and supply chain security." — .claude/commands/test.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 82 | defined here | Gate 4 in `/test` dispatching the devops subagent to evaluate pipeline impact, action security, shell quality, build reproducibility, and artifact integrity. |

## Consumes
CI/CD workflow definitions, shell scripts, build tool configurations, lockfiles, release artifact specifications.

## Produces
Gate verdict (`PASS|WARN|CRITICAL_FAIL`) and structured findings on workflow validity, action SHA pinning, and supply chain security.

## When applied
Executed as Gate 4 of `/test` for WORKFLOW, CONFIG, and MIXED pull requests.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
DevOps Testing validates that changes to pipelines, deployment automation, and configuration files adhere to operational safety standards. By enforcing GitHub Action SHA pinning, strict shell error propagation, minimal permission scopes, and deterministic build dependencies, it guards continuous integration pipelines against supply-chain vulnerabilities and build breakage.
