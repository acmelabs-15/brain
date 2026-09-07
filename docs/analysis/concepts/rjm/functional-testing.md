---
package: rjm
name: Functional Testing
slug: functional-testing
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

# Functional Testing

## Definition — verbatim
> "## Gate 1: Functional Testing" — .claude/commands/test.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 41 | defined here | Gate 1 in `/test` delegating functional verification to a senior QA engineer subagent. |

## Consumes
Code changes, test implementations, and acceptance criteria from `/spec` outputs.

## Produces
A QA evaluation report citing specific file:line evidence across unit, integration, acceptance, and edge case coverage.

## When applied
Executed during Gate 1 of `/test` whenever PR classification indicates functional code changes.

## Sub-concepts
unit-coverage, integration-coverage

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Functional Testing is Gate 1 of the `/test` command, enforcing rigorous quality assurance on functional modifications. Delegated to a dedicated QA persona instructed to be skeptical and cite file:line evidence, it assesses unit isolation, integration contracts, acceptance coverage against specs, and edge case resilience to catch defects before production deployment.
