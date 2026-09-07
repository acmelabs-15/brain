---
package: rjm
name: Security-sensitive carve-out
slug: security-sensitive-carve-out
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security-sensitive carve-out

## Definition — verbatim
> "**Security-sensitive carve-out (overrides reuse-first):** For auth, crypto, payments, or any security-sensitive capability, do NOT apply reuse-first. Recommend a vetted, widely-used external provider over extending or reusing a homegrown implementation, even when internal prior-art exists and covers most of the requirement." — .claude/skills/programming-advisor/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 51 | defined here | Establishes an override to reuse-first, mandating vetted external providers for auth, crypto, and payments. |

## Consumes
Identified requirement involving security-sensitive functionality such as authentication, cryptography, or payments.

## Produces
Mandatory recommendation to adopt established external solutions rather than reusing or building homegrown implementations.

## When applied
Applied during capability evaluation whenever authentication, cryptography, or payment processing is required, overriding reuse-first heuristics.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
The security-sensitive carve-out acts as a critical safety override in rjm's solution evaluation process. While internal reuse is normally prioritized, homegrown implementations for auth, crypto, and payments carry severe security, compliance (e.g. PCI), and audit liabilities; this rule prevents agents from reusing inadequate internal implementations and mandates trusted commercial/industry providers.
