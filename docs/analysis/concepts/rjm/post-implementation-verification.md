---
package: rjm
name: Post-Implementation Verification
slug: post-implementation-verification
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-Implementation Verification

## Definition — verbatim
> "Security review is a TWO-PHASE process. Pre-implementation analysis is insufficient. PIV is MANDATORY for all security-relevant changes." — .claude/agents/security.md:370

## Also called — verbatim
> "Post-Implementation Verification (PIV) reports" — .agents/AGENT-SYSTEM.md:287

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 287 | defined here | Agent catalog output list specifying mandatory PIV reports. |
| .claude/agents/security.md | 368 | defined here | Capability definition establishing PIV as a mandatory blocking review gate. |
| templates/agents/security.shared.md | 339 | defined here | Shared agent specification defining post-implementation security verification. |

## Consumes
Implemented code changes, pre-implementation threat models, security controls.

## Produces
PIV verification report with approval or blocking findings.

## When applied
Applied mandatorily after implementation completes for all security-relevant changes (auth, security configs, env files, hooks).

## Sub-concepts
none

## Part of
security, quality-gates

## Implementation status
clean

## Design notes
A mandatory blocking quality gate establishing that security verification is a two-phase process: pre-implementation threat modeling is necessary but insufficient; post-implementation verification (PIV) must confirm that coded implementations accurately satisfy security controls and introduce no new attack surfaces before merging.
