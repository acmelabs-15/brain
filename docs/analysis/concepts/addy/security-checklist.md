---
package: addy
name: Security Checklist
slug: security-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Security Checklist

## Definition — verbatim
> "Quick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 1 | defines | Header of the reference document defining standard web application security checks. |

## Consumes
Web application source code, API routes, authentication logic, dependencies, and configuration.

## Produces
Actionable verification status across threat modeling, headers, auth, validation, dependencies, and LLM safety.

## When applied
Applied during development, code review, and pre-release audits alongside the `security-and-hardening` skill.

## Sub-concepts
threat-modeling, pre-commit-checks, authentication, authorization, security-headers, cors-configuration, dependency-security, ai-llm-security

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
The Security Checklist is a centralized reference document establishing standard defensive practices across full-stack web applications. It operationalizes threat modeling, pre-commit secret scanning, authentication, authorization, input validation, HTTP headers, package manager supply-chain controls, and LLM vulnerability mitigations into concrete, auditable checklist items.
