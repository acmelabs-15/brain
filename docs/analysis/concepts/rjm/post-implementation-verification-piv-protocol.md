---
package: rjm
name: Post-Implementation Verification (PIV) Protocol
slug: post-implementation-verification-piv-protocol
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Post-Implementation Verification (PIV) Protocol

## Definition — verbatim
(used, not defined)

> "When orchestrator routes back to security after implementation:" — .claude/agents/security.md:418

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 416 | defined here | Mandatory protocol executed after implementation to verify changes against security requirements. |
| templates/agents/security.shared.md | 384 | defined here | Shared template specification for post-implementation security verification protocol. |

## Consumes
Pinned commit SHA, PR diff, implementation context, and prior security plan.

## Produces
Post-implementation verification report (`.agents/security/PIV-[feature].md`) with an APPROVED, CONDITIONAL, or BLOCKED verdict.

## When applied
Mandatory blocking gate executed after implementation completes for any change matching security-relevant triggers.

## Sub-concepts
piv-checklist, ci-environment-security-testing, piv-report-template

## Part of
security-review

## Implementation status
clean

## Design notes
A mandatory two-phase security gate protocol requiring the security agent to audit actual implementation code and diffs rather than relying on planning-phase intent, preventing untested security assumptions from reaching production.
