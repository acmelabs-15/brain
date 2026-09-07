---
package: rjm
name: OWASP Top 10
slug: owasp-top-10
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OWASP Top 10

## Definition — verbatim
> "Vulnerability category checklist with STRIDE mapping" — .claude/skills/threat-modeling/SKILL.md:434

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 277 | used here | Listed under security agent core specializations. |
| .agents/security/ADR-045-framework-extraction-security-review.md | 900 | used here | Security review evaluating architectural changes against OWASP vulnerability categories. |
| .agents/security/static-analysis-checklist.md | 243 | used here | Related documents link referencing OWASP Top 10 vulnerability baseline. |
| .claude/agents/security.md | 80 | used here | Security agent prompt incorporating OWASP standards into threat modeling tasks. |
| .claude/commands/test.md | 72 | used here | Test command documentation referencing OWASP security compliance testing. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 99 | used here | Zero trust reference guide cross-referencing OWASP vulnerability classes. |
| .claude/skills/threat-modeling/SKILL.md | 434 | used here | Threat modeling skill reference bibliography citing OWASP Top 10 checklist. |

## Consumes
System architectures, PR changes, API interfaces, authentication/authorization flows.

## Produces
Vulnerability assessments, mitigation recommendations, compliance findings.

## When applied
Applied during security reviews and threat modeling to assess codebase exposure against the standard ten most critical web application security risks.

## Sub-concepts
none

## Part of
security

## Implementation status
clean

## Design notes
Standard reference taxonomy for the ten most critical security vulnerabilities affecting web and cloud applications. Used by the security agent and threat modeling skills as a baseline checklist to systematically uncover attack surfaces, identify CWE patterns, and formulate defensive controls.
