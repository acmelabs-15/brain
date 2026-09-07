---
package: rjm
name: STRIDE to OWASP Mapping
slug: stride-to-owasp-mapping
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE to OWASP Mapping

## Definition — verbatim
> "Use this mapping during Phase 2 to cross-reference STRIDE findings with OWASP categories:" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 76 | defined here | Cross-reference table mapping STRIDE threat categories to corresponding OWASP Top 10 vulnerability categories. |

## Consumes
STRIDE threat findings identified across architecture elements during Phase 2 decomposition.

## Produces
Cross-referenced vulnerability classifications linking theoretical threat classes to concrete web vulnerability categories.

## When applied
Applied during Phase 2 (Threat Identification) of threat modeling to validate vulnerability coverage.

## Sub-concepts
none

## Part of
- threat-modeling

## Implementation status
defects: missing-path

## Design notes
A cross-referencing framework connecting Microsoft STRIDE categories (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) directly to OWASP Top 10 vulnerability categories to ensure comprehensive threat coverage.
