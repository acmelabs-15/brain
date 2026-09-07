---
package: rjm
name: fail-closed-and-loud
slug: fail-closed-and-loud
kind: pattern
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

# fail-closed-and-loud

## Definition — verbatim
> "The default for hooks is prevention-first, fail-closed-and-loud: runtime errors that escape prevention exit non-zero with actionable stderr, and silent exit 0 as a recovery path violates ADR-071 item 5 and ADR-066 D1." — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 115 | used here | Binding failure semantics rule mandating that hooks terminate non-zero with actionable error messages rather than silently failing. |

## Consumes
Hook execution runtime errors, environment defects, or invariant violations.

## Produces
Non-zero exit codes with actionable error descriptions written to standard error, halting agent execution.

## When applied
Applied whenever an automated hook encounters an unprevented error or violated invariant during execution.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
clean. Binding architectural policy established by ADR-071 and ADR-066 following incident #2205 to prevent silent degradation.

## Design notes
A core reliability and governance pattern ensuring that automated protocol interceptors stop execution visibly upon error rather than allowing broken state or unverified actions to proceed unnoticed.
