---
package: rjm
name: Pre-flight Checks
slug: pre-flight-checks
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-flight Checks

## Definition — verbatim
> "## Pre-flight Checks" — .claude/commands/ship.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 58 | defined here | Mandatory release gate executed by the DevOps agent covering pipeline health, security posture, review proof, and tests. |
| docs/workflow-commands.md | 186 | defined here | Documented as the initial verification battery run by `/ship` before PR validation and branch merging. |

## Consumes
Working tree state, staged git diffs, commit history, test suites, and remote CI status.

## Produces
A consolidated pre-flight verification verdict (PASS, BLOCKED, or DEFERRED) documented with specific evidence for each check.

## When applied
Executed immediately upon invoking `/ship` after determining host and mode settings.

## Sub-concepts
pipeline-health, security-posture, reviewed-on-this-sha, tests-passing

## Part of
ship

## Implementation status
defects: doc-drift

## Design notes
Pre-flight Checks form the central release quality gate in rjm. By executing a strict sequence of four automated verifications—remote pipeline health, static security scanning, cryptographic review marker attestation, and local test execution—before any code is pushed or merged, `/ship` prevents regressions, security vulnerabilities, and unreviewed commits from reaching shared branches or mainline.
