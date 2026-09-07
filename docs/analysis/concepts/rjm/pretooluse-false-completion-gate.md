---
package: rjm
name: "PreToolUse: False Completion Gate"
slug: pretooluse-false-completion-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PreToolUse: False Completion Gate

## Definition — verbatim
> "PreToolUse: False Completion Gate" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 144 | defined here | Historical entry in the lifecycle hook table for a gate designed to block premature completion claims without test evidence. |

## Consumes
PreToolUse tool execution requests (`git commit`, `gh pr create`, etc.) and test execution output.

## Produces
Exit code 2 blocking tool execution if test evidence is absent, or exit code 0 permitting execution.

## When applied
Triggered prior to executing tool actions that finalize a change or claim completion.

## Sub-concepts
invoke-false-completion-gate

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144. Retired by Issue #3184 for negative ROI and removed from disk; the test verification responsibility was shifted to continuous integration pipelines.

## Design notes
An automated interceptor intended to prevent agents from declaring tasks complete or opening pull requests without executing test suites first, demonstrating the trade-off between hook enforcement complexity and CI verification.
