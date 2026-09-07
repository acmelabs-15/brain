---
package: rjm
name: pre-flight validation
slug: pre-flight-validation
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-flight validation

## Definition — verbatim
> "Pre-flight validation, CI check, and PR creation." — docs/workflow-commands.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 176 | defined here | Summarizes the primary gating function of the /ship command before opening a pull request. |

## Consumes
Local branch diff, CI pipeline status, test results, and review findings.

## Produces
Verification verdict permitting or blocking PR creation and release.

## When applied
Triggered upon running /ship before code is pushed or PRs are opened.

## Sub-concepts
pre-flight-checks

## Part of
ship

## Implementation status
defects: doc-drift

## Design notes
A release safety gate executed during the /ship command that validates pipeline health, security posture, code review completion, test passage, and standards compliance before allowing pull request creation.
