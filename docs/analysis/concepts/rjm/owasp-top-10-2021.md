---
package: rjm
name: OWASP Top 10:2021
slug: owasp-top-10-2021
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# OWASP Top 10:2021

## Definition — verbatim
> "# OWASP Top 10 (2021)" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:7

## Also called — verbatim
> "- OWASP Top 10:2021 scanning" — .claude/agents/security.md:232

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 232 | used here | Referenced as a core scanning standard under Static Analysis & Vulnerability Scanning. |
| .claude/skills/security-review/SKILL.md | 138 | used here | Cited as the vulnerability catalog standard alongside CWE-699 for mapping security findings. |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 7 | defined here | Defined as industry-standard vulnerability categories used as a checklist during threat identification. |

## Consumes
Architecture diagrams, source code changesets, API endpoints, and authentication mechanisms.

## Produces
Categorized threat models, vulnerability findings mapped to A01-A10 categories, and mitigation strategies.

## When applied
Applied during Phase 2 threat modeling and PR security review static analysis.

## Sub-concepts
owasp-a01-2021, owasp-a03-2021, owasp-a07-2021

## Part of
security

## Implementation status
defects: missing-path

## Design notes
OWASP Top 10:2021 is an authoritative reference framework defining the ten most critical security risks for web applications. Incorporated across rjm's security agent and threat modeling skills, it provides a structured taxonomy (A01 through A10) to guide threat identification, map STRIDE threats to industry standards, and ensure systematic vulnerability scanning during code reviews.
