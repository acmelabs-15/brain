---
package: rjm
name: Attack Surface Analysis
slug: attack-surface-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/architecture-security-template.md, sha256: 05ed96c8675d7c953c030e2eca5d3546182f60ec9e873ef7e55f9e2c6a231c5c}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Attack Surface Analysis

## Definition — verbatim
(used, not defined)

> "Use for attack surface analysis, security architecture review, or when asking what can go wrong." — .claude/skills/threat-modeling/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 118 | defines | Section structuring external/internal attack surface evaluations and reduction recommendations. |
| .claude/skills/threat-modeling/SKILL.md | 4 | used here | Cited in skill description as a primary use case for structured threat modeling. |

## Consumes
Public APIs, internal service interfaces, message brokers, protocols, and authentication schemes.

## Produces
External and internal attack surface tables, protocol mappings, threat enumerations, and prioritized reduction recommendations.

## When applied
Applied during threat modeling, system design reviews, and security audits to identify and minimize exposed attack vectors.

## Sub-concepts
attack-surfaces

## Part of
architecture-security-audit-template

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
A security analysis technique that catalogs and inspects all entry points and protocols accessible to external users and internal components, identifying reduction strategies to minimize exploit exposure.
