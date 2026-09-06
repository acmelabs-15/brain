---
package: addy
name: OWASP Top 10 for LLM Applications
slug: owasp-top-10-for-llm-applications
kind: reference
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# OWASP Top 10 for LLM Applications

## Definition — verbatim
> "Map findings to the OWASP Top 10 for LLM Applications where relevant." — agents/security-auditor.md:55

## Also called — verbatim
> "OWASP Top 10 for LLM Applications (2025)" — skills/security-and-hardening/SKILL.md:379

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 55 | applies | Instructs the security auditor to map all AI/LLM-related vulnerability findings to the standardized OWASP Top 10 for LLM Applications taxonomy. |
| skills/security-and-hardening/SKILL.md | 379 | references | References the standard 2025 OWASP Top 10 for LLM Applications framework as the authoritative baseline for securing LLM integrations. |

## Consumes
Vulnerabilities discovered in LLM integrations, prompt architectures, and tool invocation workflows.

## Produces
Standardized vulnerability classifications (LLM01–LLM10) in audit reports and hardening guides.

## When applied
Applied during threat modeling and audit reporting when evaluating generative AI features.

## Sub-concepts
none

## Part of
ai-llm-features

## Implementation status
clean

## Design notes
The OWASP Top 10 for LLM Applications provides a standardized vulnerability taxonomy for generative AI components, ensuring consistent risk classification across prompt injection, improper output handling, and excessive agency.
