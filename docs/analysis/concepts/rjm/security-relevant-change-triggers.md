---
package: rjm
name: Security-Relevant Change Triggers
slug: security-relevant-change-triggers
kind: pattern
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

# Security-Relevant Change Triggers

## Definition — verbatim
> "Post-implementation verification REQUIRED when implementation includes:" — .claude/agents/security.md:403

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 401 | defined here | Trigger criteria defining when changes require mandatory Post-Implementation Verification (PIV). |
| templates/agents/security.shared.md | 369 | defined here | Shared template trigger criteria defining sensitive paths and functional patterns requiring mandatory PIV. |

## Consumes
Implementation diffs, changed file paths, and feature implementation context.

## Produces
Binary gating determination of whether the security agent's post-implementation verification protocol must be invoked.

## When applied
Evaluated after implementation whenever code touches auth, data protection, input handling, external interfaces, file operations, env vars, eval, or specified sensitive path patterns.

## Sub-concepts
none

## Part of
post-implementation-verification-piv-protocol

## Implementation status
clean

## Design notes
A categorical trigger taxonomy establishing exact functional domains and file path patterns (such as auth, crypto, hooks, and env files) that automatically require mandatory post-implementation security verification before PR approval.
